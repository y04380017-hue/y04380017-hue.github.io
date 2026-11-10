(function () {
  'use strict';

  var profile = window.PIKO_PROFILE;
  if (!profile) return;

  var copy = {
    zh: {
      title: 'Piko Yongle Liu | 个人作品集',
      description: 'Piko Yongle Liu 的个人作品集，展示项目实习、社工实践、市集运营实践、白日梦手作房游戏原型和 Encore 活动回访产品设计。',
      seeWork: '查看我的实践 →',
      navAbout: '关于我', navExperience: '实习经历', navPractice: '实践经历', navPortfolio: '项目实践',
      aboutLabel: '关于我', aboutTitle: '语言与', aboutEmphasis: '技能',
      languageSkills: '语言', englishCET4: '英语四级 · CET-4', englishCET6: '英语六级 · CET-6',
      aiSkills: 'AI 工具', designSkills: '设计工具',
      experienceLabel: '实习经历', experienceTitle: '在实践中，理解', experienceEmphasis: '人和需求', experienceEnd: '。',
      practiceLabel: '实践经历', practiceTitle: '在真实场景中，', practiceEmphasis: '回应需求', practiceEnd: '。',
      portfolioLabel: '项目与实践', portfolioTitle: '从问题出发，', portfolioEmphasis: '动手实践', portfolioEnd: '。',
      footerNote: '保持好奇，继续行动。',
      gachaHint: '点击扭蛋机，给好奇心一点惊喜',
      gachaLabel: '转动扭蛋机，随机抽取一颗扭蛋',
      mainNav: '主导航', filterLabel: '筛选项目',
      all: '全部', details: '查看实践细节',
      gameTools: ['Unity', '鼠标交互', 'AI 协作开发'],
      productTools: ['产品设计', 'HTML 交互原型', 'AI 协作']
    },
    en: {
      title: 'Piko Yongle Liu | Portfolio',
      description: 'The portfolio of Piko Yongle Liu, featuring project and social work internships, market operations, the Daydream Handjournal game prototype and Encore product design.',
      seeWork: 'Explore my work →',
      navAbout: 'About', navExperience: 'Internships', navPractice: 'Practice', navPortfolio: 'Projects',
      aboutLabel: 'About me', aboutTitle: 'Languages & ', aboutEmphasis: 'skills',
      languageSkills: 'Languages', englishCET4: 'English · CET-4', englishCET6: 'English · CET-6',
      aiSkills: 'AI tools', designSkills: 'Design tools',
      experienceLabel: 'Internships', experienceTitle: 'Understanding ', experienceEmphasis: 'people and needs', experienceEnd: '.',
      practiceLabel: 'Practical experience', practiceTitle: 'Responding to needs ', practiceEmphasis: 'through practice', practiceEnd: '.',
      portfolioLabel: 'Projects & practice', portfolioTitle: 'Start with questions. ', portfolioEmphasis: 'Learn by doing', portfolioEnd: '.',
      footerNote: 'Still curious. Still going.',
      gachaHint: 'Click the machine for a little surprise',
      gachaLabel: 'Give the capsule machine a spin for a random capsule',
      mainNav: 'Main navigation', filterLabel: 'Filter projects',
      all: 'All', details: 'Explore the details',
      gameTools: ['Unity', 'Mouse interaction', 'AI-assisted development'],
      productTools: ['Product design', 'HTML prototype', 'AI collaboration']
    }
  };

  var locale = 'zh';
  var jobState = {openIndex: 0, elements: []};
  var practiceState = {openIndex: 0, elements: []};
  var activeFilter = 'all';
  var filterButtons = [];
  var jobs = document.getElementById('jobs');
  var practiceItems = document.getElementById('practice-items');
  var works = document.getElementById('works');
  var filters = document.getElementById('filters');
  var languageToggle = document.getElementById('language-toggle');

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function button(label, className) {
    var node = element('button', className, label);
    node.type = 'button';
    return node;
  }

  function updateExperienceGroup(state) {
    state.elements.forEach(function (entry, index) {
      var open = index === state.openIndex;
      entry.card.classList.toggle('open', open);
      entry.button.setAttribute('aria-expanded', String(open));
      entry.list.hidden = !open;
    });
  }

  function renderExperienceGroup(container, entries, idPrefix, state) {
    if (!container) return;
    container.replaceChildren();
    state.elements = entries.map(function (entry, index) {
      var card = element('div', 'job lift');
      var trigger = button('', 'job-btn');
      trigger.id = idPrefix + '-trigger-' + index;
      trigger.setAttribute('aria-controls', idPrefix + '-points-' + index);
      var number = element('span', 'job-n', entry.n);
      number.setAttribute('aria-hidden', 'true');
      var heading = element('span', 'job-t');
      var organization = element('span', 'org');
      organization.append(element('span', 'o', entry.org), document.createTextNode(' · '), element('span', 'dt', entry.dates));
      heading.append(element('span', 'role', entry.role), organization);
      var plus = element('span', 'plus', '+');
      plus.setAttribute('aria-hidden', 'true');
      trigger.append(number, heading, plus);
      var list = element('ul', 'rise');
      list.id = idPrefix + '-points-' + index;
      list.setAttribute('aria-labelledby', trigger.id);
      entry.pts.forEach(function (point) { list.appendChild(element('li', '', point)); });
      trigger.addEventListener('click', function () {
        state.openIndex = state.openIndex === index ? -1 : index;
        updateExperienceGroup(state);
      });
      card.append(trigger, list);
      container.appendChild(card);
      return {card: card, button: trigger, list: list};
    });
    updateExperienceGroup(state);
  }

  function renderJobs() {
    renderExperienceGroup(jobs, profile[locale].jobs, 'job', jobState);
  }

  function renderPractices() {
    renderExperienceGroup(practiceItems, profile[locale].practices || [], 'practice', practiceState);
  }

  function pickFilter(kind) {
    activeFilter = kind;
    filterButtons.forEach(function (entry) { entry.button.setAttribute('aria-pressed', String(entry.kind === kind)); });
    works.querySelectorAll('.work').forEach(function (work) {
      work.hidden = kind !== 'all' && work.dataset.kind !== kind;
    });
  }

  function renderProjects() {
    var expanded = {};
    var kinds = [];
    var categories = {};
    works.querySelectorAll('.work').forEach(function (work) {
      expanded[work.dataset.kind] = work.querySelector('details').open;
    });
    works.replaceChildren();
    profile[locale].projects.forEach(function (project) {
      if (kinds.indexOf(project.kind) === -1) kinds.push(project.kind);
      categories[project.kind] = project.category;
      var card = element('article', 'work lift');
      card.dataset.kind = project.kind;
      var preview = element('div', project.image ? 'preview game-preview' : 'preview dots evidence-preview');
      if (project.image) {
        var image = element('img');
        image.src = project.image;
        image.alt = project.imageAlt || project.title;
        image.width = 1280;
        image.height = 720;
        image.loading = 'lazy';
        image.decoding = 'async';
        preview.appendChild(image);
      } else {
        // The same source metrics appear as text below, so this visual is decorative.
        preview.setAttribute('aria-hidden', 'true');
        preview.append(
          element('span', 'mono', project.category),
          element('strong', 'evidence-number', project.metrics[0].value),
          element('span', 'evidence-caption', project.metrics[0].label)
        );
      }
      var projectTools = copy[locale][project.kind + 'Tools'] || [];
      if (projectTools.length) {
        var tools = element('div', 'evidence-tools');
        projectTools.forEach(function (tool) { tools.appendChild(element('span', '', tool)); });
        if (!project.image) preview.appendChild(tools);
      }

      var body = element('div', 'work-body');
      var meta = project.category + ' · ' + project.period;
      if (project.role !== project.period) meta += ' · ' + project.role;
      body.append(element('span', 'mono', meta), element('h3', 'serif', project.title), element('p', '', project.summary));
      if (project.image && tools) body.appendChild(tools);
      if (project.links && project.links.length) {
        var actions = element('div', 'project-actions');
        project.links.forEach(function (link) {
          var action = element('a', 'project-action' + (link.primary ? ' primary' : ''), link.label);
          action.href = link.href;
          action.target = '_blank';
          action.rel = 'noopener noreferrer';
          actions.appendChild(action);
        });
        body.appendChild(actions);
      }
      var metrics = element('div', 'work-metrics');
      project.metrics.forEach(function (metric) {
        var item = element('div', 'work-metric');
        item.append(element('strong', '', metric.value), element('span', '', metric.label));
        metrics.appendChild(item);
      });
      body.appendChild(metrics);
      var details = element('details', 'work-detail');
      details.open = Boolean(expanded[project.kind]);
      var points = element('ul');
      project.points.forEach(function (point) { points.appendChild(element('li', '', point)); });
      details.append(element('summary', '', copy[locale].details), points);
      body.appendChild(details);
      card.append(preview, body);
      works.appendChild(card);
    });
    filters.replaceChildren();
    filters.hidden = kinds.length <= 1;
    var filterKinds = filters.hidden ? [] : ['all'].concat(kinds);
    if (filterKinds.indexOf(activeFilter) === -1) activeFilter = 'all';
    filterButtons = filterKinds.map(function (kind) {
      var label = kind === 'all' ? copy[locale].all : categories[kind];
      var trigger = button(label, 'pill pill-dark');
      trigger.addEventListener('click', function () { pickFilter(kind); });
      filters.appendChild(trigger);
      return {kind: kind, button: trigger};
    });
    pickFilter(activeFilter);
  }

  function setLanguage(language) {
    locale = language === 'en' ? 'en' : 'zh';
    var text = copy[locale];
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(text, key)) node.textContent = text[key];
    });
    document.getElementById('main-nav').setAttribute('aria-label', text.mainNav);
    document.getElementById('gacha-trigger').setAttribute('aria-label', text.gachaLabel);
    document.querySelector('.gacha').lang = locale === 'zh' ? 'zh-CN' : 'en';
    filters.setAttribute('aria-label', text.filterLabel);
    languageToggle.textContent = locale === 'zh' ? 'English' : '中文';
    languageToggle.lang = locale === 'zh' ? 'en' : 'zh-CN';
    languageToggle.setAttribute('aria-label', locale === 'zh' ? 'Switch to English' : '切换为中文');
    renderJobs();
    renderPractices();
    renderProjects();
    try { window.localStorage.setItem('piko-language', locale); } catch (error) { /* A stored preference is optional. */ }
  }

  languageToggle.addEventListener('click', function () { setLanguage(locale === 'zh' ? 'en' : 'zh'); });
  var savedLanguage = 'zh';
  try { savedLanguage = window.localStorage.getItem('piko-language') || 'zh'; } catch (error) { /* Use Chinese by default. */ }
  setLanguage(savedLanguage);
})();
