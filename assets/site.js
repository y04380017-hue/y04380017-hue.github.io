(function () {
  'use strict';

  var profile = window.PIKO_PROFILE;
  if (!profile) return;

  var copy = {
    zh: {
      title: 'Piko 刘咏乐 | 产品经理实习求职作品集',
      description: '刘咏乐 Piko，社会工作硕士在读，寻找上海产品经理实习机会。了解我的教育背景、社工实习和手账游戏设计项目。',
      heroAvailability: '产品经理实习 · 工作意向地：上海',
      heroLede: '你好，我是刘咏乐 Piko，社会工作专业硕士在读，正在寻找上海的产品经理实习机会。',
      seeWork: '查看我的实践 →', letsTalk: '联系我',
      navAbout: '关于我', navEducation: '教育背景', navExperience: '相关经历', navPortfolio: '项目实践', navContact: '联系我 ↗',
      educationLabel: 'Education', educationTitle: '在学习中，提出', educationEmphasis: '更好的问题', educationEnd: '。',
      educationIntro: '社会工作硕士在读，本科主修经济学、辅修法学，具备经济学、管理与法律的跨学科知识基础。',
      experienceLabel: '实习与校内经历', experienceTitle: '在实践中，理解', experienceEmphasis: '人和需求', experienceEnd: '。',
      portfolioLabel: '项目与实践', portfolioTitle: '从问题出发，', portfolioEmphasis: '动手实践', portfolioEnd: '。',
      contactLabel: 'Contact', contactTitle: '有个机会，', contactEmphasis: '一起聊聊？',
      contactIntro: '我是刘咏乐 Piko，正在寻找上海的产品经理实习机会。欢迎通过邮箱联系我。',
      emailLabel: '邮箱 ↗', footerNote: '保持好奇，继续行动。',
      gachaHint: '点击扭蛋机，给好奇心一点惊喜',
      gachaLabel: '转动扭蛋机，随机抽取一颗扭蛋',
      mainNav: '主导航', degreeLabel: '学历', filterLabel: '筛选项目',
      all: '全部', details: '查看实践细节',
      gameTools: ['Unity', '鼠标交互', 'AI 协作开发']
    },
    en: {
      title: 'Piko 刘咏乐 | Product Manager Internship Portfolio',
      description: 'Piko, a master’s student in Social Work, seeking a product manager internship in Shanghai. Education, social work internships and a journaling game design project.',
      heroAvailability: 'Seeking a product manager internship · Shanghai',
      heroLede: 'Hi, I’m Piko (刘咏乐), a master’s student in Social Work seeking a product manager internship in Shanghai.',
      seeWork: 'Explore my work →', letsTalk: 'Let’s talk',
      navAbout: 'About', navEducation: 'Education', navExperience: 'Experience', navPortfolio: 'Projects', navContact: 'Say hello ↗',
      educationLabel: 'Education', educationTitle: 'Learning to ask ', educationEmphasis: 'better questions', educationEnd: '.',
      educationIntro: 'A master’s student in Social Work with an undergraduate major in Economics and a minor in Law, bringing an interdisciplinary foundation in economics, management and law.',
      experienceLabel: 'Internships & campus experience', experienceTitle: 'Understanding ', experienceEmphasis: 'people and needs', experienceEnd: '.',
      portfolioLabel: 'Projects & practice', portfolioTitle: 'Start with questions. ', portfolioEmphasis: 'Learn by doing', portfolioEnd: '.',
      contactLabel: 'Contact', contactTitle: 'An opportunity ', contactEmphasis: 'worth exploring?',
      contactIntro: 'I’m Piko (刘咏乐), seeking a product manager internship in Shanghai. Get in touch by email.',
      emailLabel: 'Email ↗', footerNote: 'Still curious. Still going.',
      gachaHint: 'Click the machine for a little surprise',
      gachaLabel: 'Give the capsule machine a spin for a random capsule',
      mainNav: 'Main navigation', degreeLabel: 'Degree', filterLabel: 'Filter projects',
      all: 'All', details: 'Explore the details',
      gameTools: ['Unity', 'Mouse interaction', 'AI-assisted development']
    }
  };

  var locale = 'zh';
  var educationIndex = 0;
  var openJobIndex = 0;
  var activeFilter = 'all';
  var tabButtons = [];
  var jobElements = [];
  var filterButtons = [];
  var tabs = document.getElementById('tabs');
  var jobs = document.getElementById('jobs');
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

  function pickEducation(index) {
    educationIndex = index;
    tabButtons.forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    var entry = profile[locale].education[index];
    document.getElementById('edu-years').textContent = entry.years;
    document.getElementById('edu-school').textContent = entry.school;
    document.getElementById('edu-degree').textContent = entry.degree;
    document.getElementById('edu-detail').textContent = entry.detail;
    document.getElementById('edu-panel').setAttribute('aria-labelledby', 'edu-tab-' + index);
  }

  function renderEducation() {
    tabs.replaceChildren();
    tabButtons = profile[locale].education.map(function (entry, index) {
      var tab = button(entry.label, 'pill tab');
      tab.id = 'edu-tab-' + index;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', 'edu-panel');
      tab.addEventListener('click', function () { pickEducation(index); });
      tab.addEventListener('keydown', function (event) {
        var next = index;
        if (event.key === 'ArrowRight') next = (index + 1) % tabButtons.length;
        else if (event.key === 'ArrowLeft') next = (index + tabButtons.length - 1) % tabButtons.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabButtons.length - 1;
        else return;
        event.preventDefault();
        pickEducation(next);
        tabButtons[next].focus();
      });
      tabs.appendChild(tab);
      return tab;
    });
    pickEducation(educationIndex);
  }

  function updateJobs() {
    jobElements.forEach(function (entry, index) {
      var open = index === openJobIndex;
      entry.card.classList.toggle('open', open);
      entry.button.setAttribute('aria-expanded', String(open));
      entry.list.hidden = !open;
    });
  }

  function renderJobs() {
    jobs.replaceChildren();
    jobElements = profile[locale].jobs.map(function (entry, index) {
      var card = element('div', 'job lift');
      var trigger = button('', 'job-btn');
      trigger.id = 'job-trigger-' + index;
      trigger.setAttribute('aria-controls', 'job-points-' + index);
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
      list.id = 'job-points-' + index;
      list.setAttribute('aria-labelledby', trigger.id);
      entry.pts.forEach(function (point) { list.appendChild(element('li', '', point)); });
      trigger.addEventListener('click', function () {
        openJobIndex = openJobIndex === index ? -1 : index;
        updateJobs();
      });
      card.append(trigger, list);
      jobs.appendChild(card);
      return {card: card, button: trigger, list: list};
    });
    updateJobs();
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
    tabs.setAttribute('aria-label', text.degreeLabel);
    filters.setAttribute('aria-label', text.filterLabel);
    languageToggle.textContent = locale === 'zh' ? 'English' : '中文';
    languageToggle.lang = locale === 'zh' ? 'en' : 'zh-CN';
    languageToggle.setAttribute('aria-label', locale === 'zh' ? 'Switch to English' : '切换为中文');
    renderEducation();
    renderJobs();
    renderProjects();
    try { window.localStorage.setItem('piko-language', locale); } catch (error) { /* A stored preference is optional. */ }
  }

  languageToggle.addEventListener('click', function () { setLanguage(locale === 'zh' ? 'en' : 'zh'); });
  var savedLanguage = 'zh';
  try { savedLanguage = window.localStorage.getItem('piko-language') || 'zh'; } catch (error) { /* Use Chinese by default. */ }
  setLanguage(savedLanguage);
})();
