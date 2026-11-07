/* The view layer: all user-facing portfolio entries live in data/content.js. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  if (!data) { document.body.insertAdjacentHTML('afterbegin', '<p role="alert">Portfolio data could not be loaded.</p>'); return; }
  const $ = (s) => document.querySelector(s);
  const create = (tag, className, value) => {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (value !== undefined) n.textContent = value;
    return n;
  };
  const appendText = (parent, tag, className, value) => parent.append(create(tag, className, value));
  function renderCurrently() {
    const target = $('#currently-list');
    data.currently.forEach(item => {
      const row = create('div', 'status-item');
      row.append(create('span','status-symbol','✳'));
      const body = create('div');
      appendText(body,'strong','',item.label);
      appendText(body,'span','',item.detail);
      row.append(body);target.append(row);
    });
  }
  function renderAbout() {
    const target = $('#about-copy');
    data.about.forEach(paragraph => appendText(target,'p','',paragraph));
  }
  function renderProjects() {
    const target = $('#projects-list');
    data.projects.forEach((p, i) => {
      const card = create('article','mac-window project-card');
      card.id = `project-${p.slug}`;
      const bar = create('div','window-bar');
      const traffic = create('span','traffic'); traffic.setAttribute('aria-hidden','true');
      for (let j=0;j<3;j++) traffic.append(create('i'));
      bar.append(traffic,create('span','window-name',p.windowTitle));
      const layout = create('div','project-layout');
      const art = create('div',`project-art art-${p.art}`); art.setAttribute('aria-label',`Decorative conceptual illustration for ${p.name}`);art.setAttribute('role','img');
      const artInner = create('div','art-inner');
      const label = create('span','art-overline',`PROJECT 0${i+1}`); artInner.append(label);
      if (p.art==='momweight') {
        const motif=create('div','motif phones'); motif.append(create('div','phone left-phone'),create('div','phone right-phone')); artInner.append(motif);
      } else if(p.art==='grouplet'){
        const motif=create('div','motif dashboard');motif.append(create('div','dashboard-top'));
        const cells=create('div','dashboard-cells'); for(let j=0;j<6;j++)cells.append(create('span','dashboard-cell'));motif.append(cells);artInner.append(motif);
      } else {
        const motif=create('div','motif location-art');motif.append(create('span','location-pin','●'),create('div','food-card'),create('div','food-card second'));artInner.append(motif);
      }
      art.append(artInner,create('span','concept-label','CONCEPTUAL ART'));
      const overview = create('div','project-summary');
      appendText(overview,'span','project-category',p.category.toUpperCase());
      appendText(overview,'h3','',p.name);
      appendText(overview,'p','project-subtitle',p.subtitle);
      appendText(overview,'span','project-role',p.role);
      appendText(overview,'p','project-description',p.summary);
      const details = create('div','project-details');
      appendText(details,'h4','','Key Contributions');
      const list = create('ul','contribution-list');p.contributions.forEach(t=>appendText(list,'li','',t));details.append(list);
      appendText(details,'h4','stack-heading','Tech Stack');
      const tags = create('div','stack-tags');p.stack.forEach(t=>appendText(tags,'span','tech-tag',t));details.append(tags);
      layout.append(art,overview,details);card.append(bar,layout);target.append(card);
    });
  }
  function renderExperience() {
    const target = $('#experience-list');
    data.experience.forEach(item => {
      const row=create('article','timeline-item');
      appendText(row,'h3','',item.role);
      appendText(row,'p','timeline-org',item.organization);
      appendText(row,'p','timeline-note',item.note);
      appendText(row,'p','timeline-period',item.period);
      target.append(row);
    });
  }
  function renderEducation() {
    const target=$('#education-list');
    data.education.forEach(item=>{
      const row=create('article','education-item');
      appendText(row,'h3','',item.school);
      appendText(row,'p','',item.degree);
      appendText(row,'span','education-detail',item.detail);
      target.append(row);
    });
  }
  function renderSkills() {
    const target=$('#skills-list');
    data.skills.forEach(item=>{
      const group=create('section','skill-group');
      appendText(group,'h3','',item.category);
      const tags=create('div','skill-tags');item.items.forEach(s=>appendText(tags,'span','skill-tag',s));group.append(tags);target.append(group);
    });
  }
  function renderContact(){
    const target=$('#contact-links');
    data.contact.forEach(item=>{
      if(!(/^(https:\/\/|mailto:)/.test(item.url))) return;
      const link=create('a','contact-item');link.href=item.url;
      if(item.url.startsWith('https://')) { link.target='_blank';link.rel='noopener noreferrer'; }
      appendText(link,'span','contact-label',item.label);
      appendText(link,'strong','',item.display);
      appendText(link,'span','contact-arrow','↗');target.append(link);
    });
  }
  function setupMenu(){
    const btn=$('.menu-toggle'),nav=$('#site-nav');
    btn.addEventListener('click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',String(!open));btn.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('open',!open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open navigation');}));
  }
  renderCurrently();renderAbout();renderProjects();renderExperience();renderEducation();renderSkills();renderContact();setupMenu();
  $('#year').textContent=String(new Date().getFullYear());
})();
