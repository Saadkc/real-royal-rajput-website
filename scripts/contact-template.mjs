export const contactContent = ({intro,services,eyebrow,arrow}) => `${intro('LET’S BUILD SOMETHING EXTRAORDINARY','Your vision.<br>Starts here','A new development, a distinctive home, or a space ready for its next chapter. Tell us what you have in mind.')}
<section class="container contact-layout">
 <aside class="contact-aside">
  <h2>A good project starts<br>with a good conversation.</h2>
  <p>Share your ideas, your priorities, and where you are in the journey.</p>
  <div class="contact-info"><span class="eyebrow">VISIT OUR OFFICE</span><h3>Dubai, United Arab Emirates</h3><p>Suite 1204, Royal Business Centre<br>Business Bay, Dubai, UAE</p><small class="contact-sample">Sample office address</small></div>
  <div class="contact-info"><span class="eyebrow">CALL OR EMAIL</span><p class="contact-detail">+971 0 000 0000<br>hello@realroyalrajput.example</p><small class="contact-sample">Dummy contact details · Not monitored</small></div>
  <div class="contact-info"><span class="eyebrow">HOW WE CAN HELP</span><p>New project enquiries<br>Design & construction consultations<br>Partnerships & general enquiries</p></div>
  <div class="contact-note" data-contact-note>Demo form — try the enquiry experience. Details are not sent or stored.</div>
 </aside>
 <form id="contact-form" class="enquiry-form" data-enquiry action="contact.html" method="post" aria-labelledby="form-title">
  <div class="form-heading"><div><p class="eyebrow">LET’S GET ACQUAINTED</p><h2 id="form-title">Tell us about your project</h2></div><span>* Required fields</span></div>
  <div class="form-grid">
   <label for="contact-name">Full name *<input id="contact-name" name="name" required autocomplete="name" placeholder="Your full name" minlength="2" maxlength="100"></label>
   <label for="contact-email">Email address *<input id="contact-email" name="email" required type="email" autocomplete="email" inputmode="email" placeholder="you@company.com" maxlength="150"></label>
   <label for="contact-phone">Phone number<input id="contact-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="Include country code" maxlength="40"></label>
   <label for="contact-company">Company<input id="contact-company" name="company" autocomplete="organization" placeholder="Your company (optional)" maxlength="150"></label>
   <label for="contact-service">I'm interested in *<select id="contact-service" name="service" required><option value="">Select a service</option>${services.map(([,t])=>`<option>${t}</option>`).join('')}<option>Careers</option><option>General enquiry</option></select></label>
   <label for="contact-budget">Estimated budget<select id="contact-budget" name="budget"><option value="Not specified">Select a range (optional)</option><option>Under AED 1 million</option><option>AED 1–5 million</option><option>AED 5–20 million</option><option>AED 20 million+</option><option>Let’s discuss</option></select></label>
   <label for="contact-location">Project location<input id="contact-location" name="location" autocomplete="off" placeholder="City or neighbourhood" maxlength="150"></label>
   <label for="contact-timeline">Preferred start<select id="contact-timeline" name="timeline"><option value="Not specified">Select a timeline (optional)</option>As soon as possible</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>Just exploring</option></select></label>
   <label for="contact-message" class="full">Your message *<textarea id="contact-message" name="message" required rows="5" minlength="10" maxlength="5000" aria-describedby="message-help" placeholder="Tell us about the scope, approximate size, and what you want to achieve…"></textarea><small id="message-help" class="field-help">At least 10 characters. Please don’t include sensitive information.</small></label>
  </div>
  <div class="form-honeypot" aria-hidden="true"><label for="contact-website">Leave this field empty<input id="contact-website" type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
  <input type="hidden" name="_subject" value="New website enquiry — Real Royal Rajput">
  <label class="consent" for="contact-consent"><input id="contact-consent" type="checkbox" required name="consent" value="Agreed"> <span>I have read the <a href="privacy.html">privacy policy</a> and understand this is a demo enquiry. *</span></label>
  <div class="form-actions"><button class="button" type="submit" data-submit>Send enquiry ${arrow}</button><button class="save-enquiry" type="button" data-save-enquiry>Save a copy ↓</button></div>
  <p class="form-status" role="status" aria-live="polite" aria-atomic="true" tabindex="-1"></p>
  <a class="button outline download-enquiry" hidden download="real-royal-rajput-enquiry.txt">Download enquiry ↓</a>
  <noscript><p class="contact-note">Please enable JavaScript to use the enquiry form.</p></noscript>
 </form>
</section>
<section class="section container faq"><div>${eyebrow('BEFORE WE BEGIN')}<h2>A little more clarity.</h2></div><div>${[
 ['What information should I include in my brief?','A location, approximate area, intended use, preferred timeline, and budget range are useful starting points. Tell us what you know so far; you can discuss drawings and detailed requirements in a follow-up conversation.'],
 ['Can I enquire before I have drawings?','Yes. Describe your idea and current stage, whether you have a detailed brief or are still exploring the possibilities.'],
 ['Are the projects on this website completed company projects?','The current portfolio contains illustrative concepts and reference imagery. Verified project details and original photography will replace them before the company’s public launch.']
 ].map(([q,a])=>`<details><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join('')}</div></section>`;

export const privacyContent = ({intro}) => `${intro('YOUR INFORMATION','Privacy, with clarity','How information is handled on this concept website.')}<article class="container legal-copy prose">
<p class="lead">This website currently offers a demonstration enquiry form. The information below explains how your entries are handled.</p>
<h2>Contact enquiries</h2><p>The form asks for your name, email address, service interest, message, and consent. You may also share a phone number, company, budget range, project location, and preferred timeline. Please do not include sensitive personal information.</p><p>This is a demonstration form. Pressing Send enquiry validates your entries, displays a sample success message, and resets the form. It does not send, upload, or save your details. The success notice is a demonstration of the intended experience, not confirmation of delivery.</p>
<h2>Saving a copy</h2><p>Save a copy prepares a downloadable text file on your device. This action does not send an enquiry. The website does not store your message in browser local storage. Keep or delete the downloaded file as you prefer.</p>
<h2>External resources</h2><p>Architectural reference images load from Unsplash and fonts load from Google Fonts. These providers receive standard connection information, including an IP address, when your browser requests their files. There is no connected contact-form service.</p>
<h2>Analytics and hosting</h2><p>This website does not include advertising trackers or application cookies. Hosting providers may process access logs according to their policies. If published with GitHub Pages, GitHub records visitor IP addresses for security.</p>
<h2>Before public launch</h2><p>Company identity, privacy contact details, retention practices, and this policy must be confirmed before online enquiry delivery is enabled. The project portfolio and careers listings currently contain illustrative content.</p><p>Return to the <a href="contact.html">contact page</a>.</p></article>`;
