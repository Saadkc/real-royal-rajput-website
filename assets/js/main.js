(() => {
  'use strict';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('.header');
  const progress = document.querySelector('.scroll-progress');
  let queued = false;
  const updateScroll = () => {
    header?.classList.toggle('scrolled', scrollY > 15);
    const distance = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
    queued = false;
  };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(updateScroll); } }, { passive: true });
  updateScroll();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => {
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if (!header?.contains(event.target)) closeMenu(); });
  matchMedia('(min-width: 1181px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  if ('IntersectionObserver' in window && !reducedMotion) {
    document.documentElement.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const counter = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target, end = Number(el.dataset.count), start = performance.now();
        const frame = time => {
          const t = Math.min((time - start) / 1400, 1);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame); counter.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counter.observe(el));
  }
  const filters = document.querySelectorAll('[data-filter]');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(filter => { filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button)); });
    let count = 0;
    document.querySelectorAll('.all-projects [data-category]').forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter;
      card.hidden = !show;
      if (show) { count++; card.classList.add('visible'); }
    });
    const label = document.querySelector('.filter-count');
    if (label) label.textContent = `${count} project${count === 1 ? '' : 's'}`;
  }));
  const hero = document.querySelector('.hero-photo');
  if (hero) {
    const slides = [
      ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85', 'Dubai skyline and modern architecture at dusk', 'DUBAI SKYLINE · ARCHITECTURAL INSPIRATION', 'center 54%'],
      ['assets/images/dubai-frame.jpg', 'The golden Dubai Frame in Zabeel Park, Dubai', 'DUBAI FRAME · ARCHITECTURAL INSPIRATION', 'center 20%'],
      ['assets/images/sheikh-zayed-grand-mosque.jpg', 'White domes of Sheikh Zayed Grand Mosque in Abu Dhabi', 'SHEIKH ZAYED GRAND MOSQUE · ABU DHABI', 'center 45%']
    ];
    let current = 0, request = 0;
    document.querySelectorAll('[data-slide]').forEach(button => button.addEventListener('click', () => {
      current = (current + Number(button.dataset.slide) + slides.length) % slides.length;
      const next = current, token = ++request, [src, alt, caption, position] = slides[next], preload = new Image();
      hero.classList.add('changing');
      preload.onload = () => {
        if (token !== request) return;
        hero.src = preload.src; hero.alt = alt; hero.style.objectPosition = position;
        const label = document.querySelector('.hero-caption');
        if (label) {
          label.replaceChildren();
          const number = document.createElement('span'); number.textContent = `0${next + 1} / 03`;
          label.append(number, document.createTextNode(caption));
        }
        hero.classList.remove('changing');
      };
      preload.onerror = () => { if (token === request) hero.classList.remove('changing'); };
      preload.src = src;
    }));
  }
  const form = document.querySelector('[data-enquiry]');
  if (form) {
    const params = new URLSearchParams(location.search);
    if ([...form.elements.service.options].some(option => option.value === params.get('service'))) form.elements.service.value = params.get('service');
    if (params.has('role')) form.elements.message.value = `I would like to register my interest in the sample ${params.get('role')} role. `;
    if (params.has('project')) form.elements.message.value = `I would like to discuss a project inspired by ${params.get('project').replaceAll('-', ' ')}. `;
    let objectUrl;
    const download = form.querySelector('.download-enquiry'), status = form.querySelector('.form-status');
    const clearPrepared = () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = undefined; download.hidden = true; download.removeAttribute('href'); status.textContent = ''; status.classList.remove('success');
    };
    form.addEventListener('input', clearPrepared);
    form.querySelector('[data-save-enquiry]').addEventListener('click', () => {
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const text = ['REAL ROYAL RAJPUT — PROJECT ENQUIRY', 'Demo enquiry. This message has not been sent.', '', ...['name', 'email', 'phone', 'company', 'service', 'budget', 'location', 'timeline', 'message'].map(key => `${key.toUpperCase()}: ${data.get(key) || 'Not specified'}`)].join('\n');
      clearPrepared(); objectUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
      download.href = objectUrl; download.hidden = false;
      status.textContent = 'Your enquiry copy is ready to download. No message has been sent.';
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity() || form.elements._gotcha.value) return;
      clearPrepared();
      form.reset();
      status.classList.add('success');
      const heading = document.createElement('strong');
      heading.textContent = 'Thank you! Your enquiry has been submitted successfully.';
      const detail = document.createElement('span');
      detail.textContent = 'Demo confirmation — no message was sent or stored.';
      status.replaceChildren(heading, detail);
      status.focus({ preventScroll: true });
      status.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'nearest' });
    });
    addEventListener('pagehide', () => { if (objectUrl) URL.revokeObjectURL(objectUrl); });
  }
})();
