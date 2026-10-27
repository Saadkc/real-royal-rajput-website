import {spawn} from 'node:child_process';
import {mkdirSync,writeFileSync,readdirSync} from 'node:fs';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
mkdirSync('.preview',{recursive:true});
const browser=spawn('C:/Program Files/Google/Chrome/Application/chrome.exe',['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=9333',`--user-data-dir=${resolve('.preview/chrome')}`,'about:blank'],{windowsHide:true,stdio:'ignore'});
let socket;
try{
 let targets;
 for(let attempt=0;attempt<40;attempt++){
  try{targets=await (await fetch('http://127.0.0.1:9333/json')).json();break;}catch{await new Promise(r=>setTimeout(r,250));}
 }
 assert.ok(targets,'Headless Chrome started');
 socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
 await new Promise((r,j)=>{socket.addEventListener('open',r,{once:true});socket.addEventListener('error',j,{once:true});});
 let seq=0;const pending=new Map(),errors=[];
 socket.addEventListener('message',event=>{const msg=JSON.parse(event.data);if(msg.id){const p=pending.get(msg.id);pending.delete(msg.id);msg.error?p.reject(msg.error):p.resolve(msg.result);}if(msg.method==='Runtime.exceptionThrown')errors.push(msg.params.exceptionDetails.text);});
 socket.addEventListener('close',event=>console.log('CDP closed',event.code,event.reason));
 const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;const timeout=setTimeout(()=>{pending.delete(id);reject(Error(`CDP timeout: ${method}`));},15000);pending.set(id,{resolve:value=>{clearTimeout(timeout);resolve(value);},reject:error=>{clearTimeout(timeout);reject(error);}});socket.send(JSON.stringify({id,method,params}));});
 await call('Page.enable');await call('Runtime.enable');
 const evaluate=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value;};
 const navigate=async path=>{await call('Page.navigate',{url:`http://127.0.0.1:3000/${path}`});for(let a=0;a<60;a++){await new Promise(r=>setTimeout(r,100));if(await evaluate(`document.readyState === 'complete' && !!document.querySelector('.header')`))break;}};
 const shot=async name=>{await evaluate(`Promise.all([document.fonts.ready,...document.getAnimations().filter(a=>a.effect.getTiming().iterations!==Infinity).map(a=>a.finished.catch(()=>{}))]).then(()=>true)`);const r=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});writeFileSync(`.preview/${name}.png`,Buffer.from(r.data,'base64'));};
 const sizes=[{width:1440,height:1000},{width:1280,height:900},{width:1180,height:900},{width:1024,height:900},{width:768,height:1024},{width:320,height:740},{width:390,height:844}];
 const pages=readdirSync('.').filter(f=>f.endsWith('.html'));
 for(const size of sizes){
  await call('Emulation.setDeviceMetricsOverride',{...size,deviceScaleFactor:1,mobile:size.width<700});
  for(const page of pages){
   await navigate(page);
   const layout=await evaluate(`({width:innerWidth,scroll:document.documentElement.scrollWidth,h1:document.querySelector('h1')?.textContent,broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)})`);
   assert.ok(layout.scroll<=layout.width+1,`${page} overflow at ${size.width}: ${layout.scroll}`);
   assert.ok(layout.h1,`${page} heading renders`);
   assert.equal(await evaluate(`document.querySelectorAll('#main-nav a[href="contact.html"]').length`),1,`${page}: Contact navigation exists once`);
   if(layout.broken.length)console.log(`Image warning ${page}: ${layout.broken.join(', ')}`);
   if(page==='index.html'){
    await shot(`home-${size.width}`);
    await evaluate(`scrollTo(0,950)`);await new Promise(r=>setTimeout(r,1000));await shot(`home-intro-${size.width}`);
   }
  }
 }
 await navigate('projects.html');
 await evaluate(`document.querySelector('[data-filter="Residential"]').click()`);
 assert.equal(await evaluate(`document.querySelectorAll('.all-projects .project-card:not([hidden])').length`),2,'Residential filter');
 await evaluate(`document.querySelector('[data-filter="Infrastructure"]').click()`);
 assert.equal(await evaluate(`document.querySelectorAll('.all-projects .project-card:not([hidden])').length`),1,'Infrastructure filter');
 await evaluate(`document.querySelector('[data-filter="all"]').click()`);
 assert.equal(await evaluate(`document.querySelectorAll('.all-projects .project-card:not([hidden])').length`),6,'Reset filter');
 await evaluate(`document.querySelector('.menu-toggle').click()`);
 assert.equal(await evaluate(`document.querySelector('.menu-toggle').getAttribute('aria-expanded')`),'true','Mobile menu opens');
 await call('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
 assert.equal(await evaluate(`document.querySelector('.menu-toggle').getAttribute('aria-expanded')`),'false','Escape closes menu');
 await navigate('contact.html?service=Design%20%26%20build');
 assert.equal(await evaluate(`document.querySelector('select[name="service"]').value`),'Design & build','Service prefills');
 assert.equal(await evaluate(`document.querySelector('form').checkValidity()`),false,'Empty form is invalid');
 await evaluate(`(() => {const f=document.querySelector('form');f.elements.namedItem('name').value='QA Test';f.elements.email.value='test@example.com';f.elements.message.value='This is a construction project test enquiry.';f.elements.consent.checked=true;document.querySelector('[data-save-enquiry]').click();})()`);
 assert.equal(await evaluate(`document.querySelector('.download-enquiry').hidden`),false,'Enquiry download available');
 const enquiry=await evaluate(`fetch(document.querySelector('.download-enquiry').href).then(r=>r.text())`);
 assert.ok(enquiry.includes('QA Test')&&enquiry.includes('Design & build'),'Download contains enquiry');
 await evaluate(`document.querySelector('[name="message"]').dispatchEvent(new Event('input',{bubbles:true}))`);
 assert.equal(await evaluate(`document.querySelector('.download-enquiry').hidden`),true,'Editing clears stale download');
 await evaluate(`window.__formRequests=0;window.fetch=()=>{window.__formRequests++;throw new Error('Demo must not send a request');};document.querySelector('form').requestSubmit();`);
 assert.match(await evaluate(`document.querySelector('.form-status').textContent`),/submitted successfully.*no message was sent or stored/,'Honest demo success confirmation');
 assert.equal(await evaluate(`document.querySelector('form').elements.email.value`),'','Form resets after demo success');
 assert.equal(await evaluate(`window.__formRequests`),0,'Demo sends no network requests');
 await evaluate(`document.querySelector('#contact-form').scrollIntoView({block:'start'})`);
 await shot('contact-mobile');
 assert.deepEqual(errors,[],'No browser JavaScript exceptions');
 console.log(`Passed browser QA: ${pages.length} pages at ${sizes.length} widths (320–1440px), no horizontal overflow, Contact navigation, filters, mobile menu, form validation, prefill, local download, demo success, form reset, and no submission requests. Screenshots: .preview/.`);
}finally{if(socket?.readyState===WebSocket.OPEN){socket.send(JSON.stringify({id:9999,method:'Browser.close'}));socket.close();}else browser.kill();}
