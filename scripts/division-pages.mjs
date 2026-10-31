// Content for the three core divisions, shared by the home, expertise and detail pages.
export const divisions = [
  {
    slug: 'construction', name: 'Construction', number: '01',
    headline: 'Built on experience.<br>Finished with pride.',
    summary: 'Decades of hands-on experience. A deep understanding of the build. From the first excavation to the final finish, we turn ambitious plans into places made to last.',
    short: 'Structural expertise. Exacting craftsmanship. Built to last.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85',
    alt: 'Cranes and structural works on an active construction site',
    label: 'FROM THE GROUND UP', title: 'We know what<br>a great build takes.',
    lead: 'Experience shows in the decisions you never have to worry about. The right sequence. The right materials. The right people on site.',
    story: 'At Real Royal Rajput, decades of construction experience inform the way we plan, coordinate, and build. We look beyond the drawings to understand how every structural element, service, and finish comes together on site.',
    detail: 'From private residences to commercial developments, we bring practical thinking to complex work. Clear preparation, disciplined supervision, and attention to workmanship guide the project through each stage.',
    capabilities: [
      ['Residential construction', 'Villas, homes, and residential buildings shaped around everyday living, structural integrity, and carefully executed finishes.'],
      ['Commercial construction', 'Workplaces and commercial spaces with coordinated structures, services, and layouts that support their intended use.'],
      ['Civil & structural works', 'Groundworks, foundations, concrete, and structural packages planned in a sequence that gives the next trade a solid start.'],
      ['Renovation & finishing', 'Upgrades, alterations, and finishing works with close attention to existing conditions, interfaces, and the final detail.'],
    ],
    promise: 'The quality you see.<br>The discipline behind it.',
    standards: [['Practical expertise', 'Buildability reviews and early coordination help resolve difficult details before they reach the site.'], ['Quality at every stage', 'Material reviews, workmanship checks, and inspections keep attention on the work that matters.'], ['A considered handover', 'Final checks, snagging, and clear project information support the move from construction to use.']],
    steps: [['Understand', 'Review your brief, drawings, site conditions, and priorities.'], ['Prepare', 'Agree the scope, construction sequence, materials, and programme.'], ['Build', 'Coordinate trades and check workmanship as the project takes shape.'], ['Complete', 'Inspect, resolve outstanding details, and prepare for handover.']],
    cta: 'Let’s build something<br>that stands the test of time.', action: 'Discuss your build',
  },
  {
    slug: 'contracting', name: 'Contracting', number: '02',
    headline: 'Complex projects.<br>Confidently delivered.',
    summary: 'Decades of contracting experience bring clarity to every moving part. People, procurement, programme, and quality, coordinated by a team that understands delivery.',
    short: 'One coordinated team. Clear accountability. Every detail.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85',
    alt: 'Architectural plans and tools used to coordinate a building project',
    label: 'OWNING THE DETAIL', title: 'Every trade.<br>One shared standard.',
    lead: 'A successful project needs more than skilled trades. It needs someone who understands how all the work connects.',
    story: 'Our contracting approach draws on decades of practical experience: defining clear packages, coordinating specialists, and keeping decisions connected to what is happening on site. We take ownership of the interfaces that make complex projects demanding.',
    detail: 'From procurement to completion, we bring structure to delivery. Clients have a clear point of contact, teams understand the plan, and progress is reviewed against the agreed scope and programme.',
    capabilities: [
      ['General contracting', 'Coordinated delivery of construction packages, specialist trades, site activity, and the path to completion.'],
      ['Design & build coordination', 'Bring design intent and site knowledge together early to resolve interfaces and develop practical construction solutions.'],
      ['Fit-out & specialist trades', 'Coordinate interiors, finishes, joinery, and MEP interfaces so individual packages work together as a complete space.'],
      ['Procurement & project control', 'Plan material requirements, review package scopes, and track progress to support informed decisions throughout delivery.'],
    ],
    promise: 'Control the detail.<br>Protect the bigger picture.',
    standards: [['Clear accountability', 'Defined responsibilities and a clear communication route keep questions and decisions moving.'], ['Coordinated delivery', 'Trade sequencing, procurement planning, and interface reviews connect the programme to daily site work.'], ['Visible progress', 'Regular reviews give clients a practical view of progress, upcoming decisions, and outstanding items.']],
    steps: [['Define', 'Clarify scope, responsibilities, interfaces, and delivery priorities.'], ['Coordinate', 'Align packages, procurement, specialists, and the programme.'], ['Manage', 'Supervise site activity, review quality, and communicate progress.'], ['Hand over', 'Close out packages, resolve snags, and assemble handover information.']],
    cta: 'Your ambition.<br>Our responsibility to deliver.', action: 'Discuss your contract',
  },
  {
    slug: 'transport', name: 'Transport', number: '03',
    headline: 'Heavy loads.<br>Handled with precision.',
    summary: 'Decades of practical experience supporting the work on site. Materials, equipment, and project loads moved with careful planning and clear coordination from collection to delivery.',
    short: 'Materials, equipment, and logistics that keep work moving.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=85',
    alt: 'Road freight truck transporting a load by highway',
    label: 'THE DRIVE BEHIND DELIVERY', title: 'The right movement.<br>At the right moment.',
    lead: 'Transport is part of the project programme. A well-planned delivery gives the next team what they need to get to work.',
    story: 'At Real Royal Rajput, decades of experience shape our understanding of site logistics. We connect collection, transport, and delivery with the real constraints of the job: access, load requirements, unloading arrangements, and changing site priorities.',
    detail: 'Whether the requirement is a single movement or ongoing project support, we start with the load and the destination. We agree the transport arrangement around the actual requirement, with clear communication throughout the journey.',
    capabilities: [
      ['Construction material transport', 'Coordinate the movement of building materials around collection readiness, site access, and receiving arrangements.'],
      ['Equipment movements', 'Plan equipment transport around dimensions, weight, loading requirements, and the suitability of the transport arrangement.'],
      ['Site logistics support', 'Align delivery slots and site contacts with the construction programme to keep receiving and unloading organised.'],
      ['Scheduled project deliveries', 'Coordinate repeat movements and staged deliveries as material requirements change through the course of a project.'],
    ],
    promise: 'Planned with care.<br>Moved with purpose.',
    standards: [['Load-led planning', 'Understand weight, dimensions, handling needs, and site access before agreeing the movement.'], ['Safety in the details', 'Review loading, load restraint, unloading, and any route or permit requirements relevant to the job.'], ['Clear coordination', 'Confirm collection and receiving contacts, delivery windows, and changes that affect the journey.']],
    steps: [['Brief', 'Share the load, dimensions, weight, locations, and preferred date.'], ['Plan', 'Review transport suitability, access, handling, and any special requirements.'], ['Move', 'Coordinate collection and keep delivery arrangements connected.'], ['Receive', 'Confirm arrival and coordinate the handover with the receiving team.']],
    cta: 'Let’s keep your<br>next project moving.', action: 'Plan your transport',
  },
];

export function divisionCards({eyebrow, arrow}) {
  return `<section class="section container divisions-overview"><div class="section-heading"><div>${eyebrow('THREE DIVISIONS. ONE STANDARD.')}<h2>Experience where<br>it matters most.</h2></div><p>Explore the people, thinking, and practical expertise behind each part of our business.</p></div><div class="division-cards">${divisions.map(d => `<a class="division-card" href="${d.slug}.html"><span class="eyebrow">${d.number} / OUR EXPERTISE</span><h3>${d.name}</h3><p>${d.short}</p><span class="division-card-link">Explore ${d.name.toLowerCase()} ${arrow}</span></a>`).join('')}</div></section>`;
}

export function divisionPage(d, {eyebrow, button, arrow}) {
  if (d.slug === 'contracting') return contractingPage(d, {eyebrow, button, arrow});
  if (d.slug === 'transport') return transportPage(d, {eyebrow, button, arrow});
  const enquiry = `contact.html?service=${encodeURIComponent(d.name)}`;
  return `<section class="division-hero"><img src="${d.image}" alt="${d.alt}" width="2000" height="1300" fetchpriority="high"><div class="container division-hero-content"><nav class="division-breadcrumb" aria-label="Breadcrumb"><a href="services.html">Our expertise</a><span aria-hidden="true">/</span><span aria-current="page">${d.name}</span></nav>${eyebrow(`REAL ROYAL RAJPUT / ${d.name.toUpperCase()}`)}<h1>${d.headline}</h1><p>${d.summary}</p>${button(d.action, enquiry)}<span class="division-hero-caption">${d.number} / CONSTRUCTION · CONTRACTING · TRANSPORT</span></div></section>
  <nav class="division-tabs container" aria-label="Our divisions">${divisions.map(other => `<a href="${other.slug}.html" ${other.slug === d.slug ? 'aria-current="page"' : ''}><span>${other.number}</span> ${other.name} ${arrow}</a>`).join('')}</nav>
  <section class="section container story-grid"><div>${eyebrow(d.label)}<h2>${d.title}</h2></div><div class="prose"><p class="lead">${d.lead}</p><p>${d.story}</p><p>${d.detail}</p></div></section>
  <section class="section dark-section"><div class="container"><div class="section-heading"><div>${eyebrow('WHAT WE DO')}<h2>${d.name} expertise.<br>From plan to practice.</h2></div><p>Practical capabilities, brought together around the needs of your project.</p></div><div class="division-capabilities">${d.capabilities.map(([title,desc], i) => `<article class="division-capability reveal"><span class="large-index">0${i+1}</span><div><h3>${title}</h3><p>${desc}</p></div></article>`).join('')}</div></div></section>
  <section class="section container"><div class="section-heading"><div>${eyebrow('THE REAL ROYAL RAJPUT STANDARD')}<h2>${d.promise}</h2></div><p>Decades of experience inform our approach. Care, communication, and attention to detail define the work.</p></div><div class="division-standards">${d.standards.map(([title,desc]) => `<article><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div></section>
  <section class="section muted-section"><div class="container"><div class="section-heading"><div>${eyebrow('HOW WE WORK')}<h2>A clear path.<br>From brief to delivery.</h2></div>${button(d.action, enquiry, true)}</div><div class="process-grid">${d.steps.map(([title,desc],i) => `<div class="process-step reveal"><span>0${i+1}</span><h3>${title}</h3><p>${desc}</p></div>`).join('')}</div></div></section>
  <section class="section container division-next"><div>${eyebrow('LET’S TALK ABOUT YOUR REQUIREMENT')}<h2>${d.cta}</h2></div>${button(d.action, enquiry)}</section>`;
}

const dubaiSkyline = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85';
const divisionLinks = (current, arrow) => `<nav class="division-tabs container" aria-label="Our divisions">${divisions.map(d=>`<a href="${d.slug}.html" ${current===d.slug?'aria-current="page"':''}><span>${d.number}</span> ${d.name} ${arrow}</a>`).join('')}</nav>`;
const breadcrumb = name => `<nav class="division-breadcrumb" aria-label="Breadcrumb"><a href="services.html">Our expertise</a><span aria-hidden="true">/</span><span aria-current="page">${name}</span></nav>`;

function contractingPage(d, {eyebrow, button, arrow}) {
  const enquiry = 'contact.html?service=Contracting';
  return `<section class="contract-intro container"><div class="contract-title">${breadcrumb(d.name)}${eyebrow('02 / CONTRACTING')}<h1>Every detail.<br>One vision.<br><em>Delivered.</em></h1><p>${d.summary}</p>${button(d.action,enquiry)}<div class="contract-signature"><span>DECADES OF EXPERIENCE</span><span>ONE ACCOUNTABLE PARTNER</span></div></div><figure class="contract-landmark"><img src="assets/images/dubai-frame.jpg" alt="Golden towers of Dubai Frame framing the city skyline" width="800" height="1100" fetchpriority="high"><figcaption><span>DUBAI FRAME / ARCHITECTURAL INSPIRATION</span><span>Precision. At every scale.</span></figcaption><span class="contract-image-index" aria-hidden="true">02</span></figure></section>
  ${divisionLinks(d.slug,arrow)}
  <section class="section container contract-manifesto"><p class="eyebrow">THE ART OF COORDINATION</p><h2>Great projects happen when<br>every moving part<br><span class="muted">moves together.</span></h2><div class="contract-story"><p class="lead">${d.lead}</p><div><p>${d.story}</p><p>${d.detail}</p></div></div></section>
  <section class="section dark-section"><div class="container contract-scope"><div class="contract-scope-heading">${eyebrow('OUR CONTRACTING CAPABILITIES')}<h2>One partner.<br>Across every<br><em>discipline.</em></h2><p>Explore how we bring people, packages, and project priorities together.</p>${button('Talk through your scope',enquiry,true)}</div><div class="contract-accordions">${d.capabilities.map(([title,desc],i)=>`<details ${i===0?'open':''}><summary><span>0${i+1}</span><h3>${title}</h3><b aria-hidden="true">+</b></summary><div><p>${desc}</p></div></details>`).join('')}</div></div></section>
  <section class="section container contract-delivery"><div class="section-heading"><div>${eyebrow('STRUCTURE BEHIND THE RESULT')}<h2>Clarity from the outset.<br>Control to completion.</h2></div><p>Decades of practical experience, translated into a disciplined delivery process.</p></div><ol class="contract-timeline">${d.steps.map(([title,desc],i)=>`<li><span class="timeline-dot">0${i+1}</span><h3>${title}</h3><p>${desc}</p></li>`).join('')}</ol></section>
  <section class="contract-city"><img src="${dubaiSkyline}" alt="Dubai skyline with elevated highways and towers at dusk" width="2200" height="1450" loading="lazy"><div class="container"><p class="eyebrow">AMBITION NEEDS A STRONG PARTNER</p><h2>The bigger the vision.<br>The more the<br><em>details matter.</em></h2><p>Dubai skyline · Architectural inspiration</p></div></section>
  <section class="section container contract-closing"><div>${eyebrow('THE REAL ROYAL RAJPUT STANDARD')}<h2>${d.promise}</h2>${button(d.action,enquiry)}</div><div>${d.standards.map(([title,desc])=>`<article><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div></section>`;
}

function transportPage(d, {eyebrow, button, arrow}) {
  const enquiry = 'contact.html?service=Transport';
  return `<section class="transport-hero"><img src="${dubaiSkyline}" alt="Dubai's connected highways winding through the skyline at dusk" width="2200" height="1450" fetchpriority="high"><div class="container transport-hero-content">${breadcrumb(d.name)}${eyebrow('03 / TRANSPORT & PROJECT LOGISTICS')}<h1>Driven by experience.<br><em>Moving you forward.</em></h1><div class="transport-hero-bottom"><p>${d.summary}</p>${button(d.action,enquiry)}</div><div class="transport-location"><span class="location-dot">AL AIN, ABU DHABI, UAE</span><span>DUBAI SKYLINE / ARCHITECTURAL INSPIRATION</span></div></div></section>
  ${divisionLinks(d.slug,arrow)}
  <section class="transport-strip" aria-label="Our transport priorities"><div class="container"><span>THE RIGHT LOAD</span><b aria-hidden="true">↗</b><span>THE RIGHT PLAN</span><b aria-hidden="true">↗</b><span>THE RIGHT CONNECTION</span></div></section>
  <section class="section container transport-dispatch"><div class="transport-route"><div>${eyebrow('FROM COLLECTION TO COMPLETION')}<h2>A clear route.<br>A connected team.</h2><p>Every movement starts with understanding the job. Here’s how we connect your requirement to delivery.</p></div><ol>${d.steps.map(([title,desc],i)=>`<li><span>0${i+1}</span><div><h3>${title}</h3><p>${desc}</p></div></li>`).join('')}</ol></div><div class="transport-photo"><img src="${d.image}" alt="${d.alt}" width="850" height="1100" loading="lazy"><div class="transport-photo-note"><span>EXPERIENCE IN MOTION</span><p>Heavy loads.<br>Careful planning.<br>Clear communication.</p></div></div></section>
  <section class="section dark-section transport-services"><div class="container"><div class="section-heading"><div>${eyebrow('WHAT WE MOVE. HOW WE SUPPORT.')}<h2>The logistics behind<br>your next milestone.</h2></div><p>${d.lead}</p></div><div class="transport-service-list">${d.capabilities.map(([title,desc],i)=>`<article><span class="transport-service-number">0${i+1}</span><h3>${title}</h3><p>${desc}</p><span aria-hidden="true">↗</span></article>`).join('')}</div></div></section>
  <section class="section container transport-outlook"><div class="transport-dubai"><img src="assets/images/dubai-frame.jpg" alt="Dubai Frame rising over the trees of Zabeel Park" width="850" height="1000" loading="lazy"><p class="landmark-credit">Dubai Frame · Dubai · Architectural inspiration</p></div><div>${eyebrow('A BIGGER PICTURE. A BETTER PLAN.')}<h2>Built around<br>the way your<br><em>project moves.</em></h2><p>${d.story}</p><p>${d.detail}</p><div class="transport-principles">${d.standards.map(([title,desc])=>`<details><summary>${title}<span aria-hidden="true">+</span></summary><p>${desc}</p></details>`).join('')}</div></div></section>
  <section class="transport-brief"><div class="container"><div>${eyebrow('READY FOR THE NEXT MOVE?')}<h2>Tell us the load.<br>We’ll talk logistics.</h2><p>Share the collection point, destination, dimensions, weight, and preferred date so we can discuss your requirements.</p></div>${button(d.action,enquiry)}</div></section>`;
}
