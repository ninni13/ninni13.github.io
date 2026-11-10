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
  const createExternalLinkIcon = () => {
    const namespace = 'http://www.w3.org/2000/svg';
    const icon = document.createElementNS(namespace,'svg');
    icon.setAttribute('class','external-link-icon');
    icon.setAttribute('viewBox','0 0 24 24');
    icon.setAttribute('fill','none');
    icon.setAttribute('stroke','currentColor');
    icon.setAttribute('stroke-width','2');
    icon.setAttribute('stroke-linecap','round');
    icon.setAttribute('stroke-linejoin','round');
    icon.setAttribute('aria-hidden','true');
    icon.setAttribute('focusable','false');
    ['M15 3h6v6','M10 14 21 3','M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'].forEach(value => {
      const path = document.createElementNS(namespace,'path');
      path.setAttribute('d',value);
      icon.append(path);
    });
    return icon;
  };
  const createWindowBar = (title) => {
    const bar = create('div','window-bar');
    const traffic = create('span','traffic');
    traffic.setAttribute('aria-hidden','true');
    for (let j=0;j<3;j++) traffic.append(create('i'));
    bar.append(traffic,create('span','window-name',title));
    return bar;
  };
  const createGitHubIcon = () => {
    const icon = create('img','github-link-icon');
    icon.src = './assets/github-mark.svg';
    icon.width = 18;
    icon.height = 18;
    icon.alt = '';
    return icon;
  };
  function renderAbout() {
    const target = $('#about-copy');
    data.about.forEach(paragraph => appendText(target,'p','',paragraph));
  }
  function renderProjects() {
    const featuredTarget = $('#featured-projects-list');
    data.featuredProjects.forEach(p => {
      const card = create('article','mac-window project-card featured-project-card');
      card.id = `project-${p.slug}`;
      const content = create('div','featured-card-body');
      appendText(content,'span','project-category',p.category.toUpperCase());
      const titleRow = create('div','featured-title-row');
      appendText(titleRow,'h3','',p.name);
      appendText(titleRow,'span','project-role',p.role);
      content.append(titleRow);
      appendText(content,'p','project-subtitle',p.subtitle);
      appendText(content,'h4','overview-heading marker-highlight marker-highlight--label','Project Overview');
      appendText(content,'p','project-description',p.home.overview);
      appendText(content,'h4','contribution-heading marker-highlight marker-highlight--label','Key Contributions');
      const list = create('ul','contribution-list compact-contribution-list');
      p.home.contributions.forEach(item => appendText(list,'li','',item));
      content.append(list);
      appendText(content,'h4','stack-heading marker-highlight marker-highlight--label','Core Technologies');
      const tags = create('div','stack-tags featured-stack');
      p.home.stack.forEach(item => appendText(tags,'span','tech-tag',item));
      content.append(tags);
      const detailLink = create('a','detail-link');
      detailLink.href = p.detailPath;
      appendText(detailLink,'span','','View Details');
      const arrow = create('span','detail-link-arrow','→');
      arrow.setAttribute('aria-hidden','true');
      detailLink.append(arrow);
      content.append(detailLink);
      card.append(createWindowBar(p.windowTitle),content);
      featuredTarget.append(card);
    });

    const otherTarget = $('#other-projects-list');
    data.otherProjects.forEach(p => {
      const card = create('article','mac-window other-project-card');
      card.id = `project-${p.slug}`;
      const content = create('div','other-project-body');
      appendText(content,'h3','',p.name);
      appendText(content,'p','other-project-overview',p.overview);
      const list = create('ul','other-project-highlights');
      p.highlights.forEach(item => appendText(list,'li','',item));
      content.append(list);
      const tags = create('div','stack-tags other-project-stack');
      p.stack.forEach(item => appendText(tags,'span','tech-tag',item));
      content.append(tags);
      const link = create('a','repository-link');
      link.href = p.repositoryUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.append(createGitHubIcon());
      appendText(link,'span','', 'View Repository');
      link.append(createExternalLinkIcon());
      content.append(link);
      card.append(createWindowBar(p.windowTitle),content);
      otherTarget.append(card);
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
      appendText(row,'span','education-location',item.location);
      if(item.detail) appendText(row,'span','education-detail',item.detail);
      target.append(row);
    });
  }
  function renderSkills() {
    const target=$('#skills-list');
    data.skills.forEach(item=>{
      const row=create('div','skill-row');
      appendText(row,'h3','skill-category',item.category);
      appendText(row,'p','skill-technologies',item.items.join(' · '));
      target.append(row);
    });
  }
  function renderHeroEmail(){
    const target=$('#hero-email');
    const email=data.contact.find(item=>item.label==='Email'&&item.url.startsWith('mailto:'));
    if(!email){ target.hidden=true; return; }
    target.href=email.url;
    target.setAttribute('aria-label',`Email Chengni Yang at ${email.display}`);
  }
  function cleanIndexUrl(){
    if(!/^https?:$/.test(window.location.protocol) || !window.location.pathname.endsWith('/index.html')) return;
    const cleanPath=window.location.pathname.slice(0,-'index.html'.length);
    window.history.replaceState(window.history.state,'',`${cleanPath}${window.location.search}${window.location.hash}`);
  }
  renderAbout();renderProjects();renderExperience();renderEducation();renderSkills();renderHeroEmail();
  $('#year').textContent=String(new Date().getFullYear());
  cleanIndexUrl();
})();
