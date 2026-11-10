/* Shared renderer for every Featured Project detail page. */
(() => {
  'use strict';
  const data = window.PORTFOLIO_DATA;
  const root = document.querySelector('#project-detail-root');
  const slug = document.body.dataset.projectSlug;
  const project = data?.featuredProjects?.find(item => item.slug === slug);

  if (!root || !project) {
    if (root) root.innerHTML = '<p class="detail-error" role="alert">This project could not be loaded. <a href="../index.html#projects">Back to Projects</a></p>';
    return;
  }

  const create = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const appendText = (parent, tag, className, text) => parent.append(create(tag, className, text));
  const externalIcon = () => {
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
    ['M15 3h6v6','M10 14 21 3','M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'].forEach(value => {
      const path = document.createElementNS(namespace,'path');
      path.setAttribute('d',value);
      icon.append(path);
    });
    return icon;
  };
  const backIcon = () => {
    const namespace = 'http://www.w3.org/2000/svg';
    const icon = document.createElementNS(namespace,'svg');
    icon.setAttribute('class','back-link-icon');
    icon.setAttribute('viewBox','0 0 24 24');
    icon.setAttribute('fill','none');
    icon.setAttribute('stroke','currentColor');
    icon.setAttribute('stroke-width','2');
    icon.setAttribute('stroke-linecap','round');
    icon.setAttribute('stroke-linejoin','round');
    icon.setAttribute('aria-hidden','true');
    icon.setAttribute('focusable','false');
    ['M19 12H5','m12 19-7-7 7-7'].forEach(value => {
      const path = document.createElementNS(namespace,'path');
      path.setAttribute('d',value);
      icon.append(path);
    });
    return icon;
  };
  const section = (title) => {
    const wrapper = create('section','detail-section');
    appendText(wrapper,'h2','',title);
    return wrapper;
  };
  const renderParagraphs = (wrapper, paragraphs) => {
    paragraphs.forEach(paragraph => appendText(wrapper,'p','detail-copy',paragraph));
  };

  document.title = `${project.name} | Chengni Yang`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = project.home.overview;
  document.querySelectorAll('[data-project-name]').forEach(node => { node.textContent = project.name; });

  const back = create('a','back-link');
  back.href = '../index.html#projects';
  back.append(backIcon(),create('span','back-link-text','Back to Projects'));
  root.append(back);

  const detailWindow = create('article','mac-window detail-window');
  const bar = create('div','window-bar');
  const traffic = create('span','traffic');
  traffic.setAttribute('aria-hidden','true');
  for (let i=0;i<3;i++) traffic.append(create('i'));
  bar.append(traffic,create('span','window-name',project.windowTitle));

  const body = create('div','detail-window-body');
  const hero = create('header','detail-project-header');
  appendText(hero,'span','project-category',project.category.toUpperCase());
  const titleRow = create('div','detail-title-row');
  appendText(titleRow,'h1','',project.name);
  appendText(titleRow,'span','detail-role',project.role);
  hero.append(titleRow);
  appendText(hero,'p','detail-subtitle',project.subtitle);
  if (project.detail.publicLinks?.length) {
    const linkList = create('div','detail-header-links');
    project.detail.publicLinks.forEach(item => {
      const link = create('a','project-link');
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      appendText(link,'span','',item.label);
      link.append(externalIcon());
      linkList.append(link);
    });
    hero.append(linkList);
  }
  body.append(hero);

  const overview = section('Overview');
  renderParagraphs(overview,project.detail.overview);
  body.append(overview);

  const contributions = section('Key Engineering Contributions');
  const contributionList = create('div','detail-contributions');
  project.detail.contributions.forEach(item => {
    const entry = create('article','detail-contribution');
    appendText(entry,'h3','',item.title);
    appendText(entry,'p','detail-copy',item.detail);
    contributionList.append(entry);
  });
  contributions.append(contributionList);
  body.append(contributions);

  const stack = section('Tech Stack');
  const stackGroups = create('div','detail-stack-groups');
  project.detail.stack.forEach(group => {
    const row = create('div','detail-stack-row');
    appendText(row,'h3','',group.category);
    appendText(row,'p','',group.items.join(' · '));
    stackGroups.append(row);
  });
  stack.append(stackGroups);
  body.append(stack);

  if (project.detail.technicalDeepDive?.length) {
    const deepDive = section('Technical Deep Dive');
    const deepDiveList = create('div','detail-deep-dives');
    project.detail.technicalDeepDive.forEach(item => {
      const entry = create('article','detail-deep-dive');
      appendText(entry,'h3','',item.title);
      appendText(entry,'p','detail-copy',item.detail);
      deepDiveList.append(entry);
    });
    deepDive.append(deepDiveList);
    body.append(deepDive);
  }

  const projectVisuals = [
    ...(project.detail.screenshots || []),
    ...(project.detail.architectureDiagrams || [])
  ];
  if (projectVisuals.length) {
    const screenshots = section('Project Visuals');
    const gallery = create('div','detail-gallery');
    projectVisuals.forEach(item => {
      const figure = create('figure','detail-figure');
      const image = create('img');
      image.src = item.src;
      image.alt = item.alt;
      image.loading = 'lazy';
      figure.append(image);
      if (item.caption) appendText(figure,'figcaption','',item.caption);
      gallery.append(figure);
    });
    screenshots.append(gallery);
    body.append(screenshots);
  }

  detailWindow.append(bar,body);
  root.append(detailWindow);
  document.querySelector('#year').textContent = String(new Date().getFullYear());

})();
