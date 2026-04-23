/* ===== TRANSLATIONS ===== */
const translations = {
  id: {
    nav_about: "Tentang", nav_skills: "Tools", nav_projects: "Proyek",
    nav_experience: "Pengalaman", nav_contact: "Kontak",
    hero_greeting: "Halo, saya",
    hero_desc: "Mahasiswa dari Universitas Negeri Surabaya yang passionate dalam dunia kecerdasan buatan.",
    hero_cta_projects: "Lihat Proyek", hero_cta_contact: "Hubungi Saya",
    scroll_down: "scroll",
    about_label: "tentang saya", about_title: "Kenali Lebih Dekat",
    about_bio1: 'Saya <strong style="color:var(--text-main)">Ananta Naufal Imamul Hikam</strong>, seorang mahasiswa aktif di <strong style="color:var(--accent-primary)">Universitas Negeri Surabaya</strong> dengan keahlian utama sebagai <strong style="color:var(--accent-secondary)">AI Engineer</strong>.',
    about_bio2: "Ini adalah proyek pertama saya dalam membuat website portofolio. Saya bersemangat membangun solusi cerdas berbasis kecerdasan buatan yang dapat berdampak nyata bagi masyarakat.",
    stat_projects: "Proyek", stat_passion: "AI",
    skills_label: "tools", skills_title: "Tools",
    projects_label: "proyek", projects_title: "Portofolio",
    projects_subtitle: "Proyek pertama dalam perjalanan saya sebagai developer.",
    exp_label: "pengalaman", exp_title: "Perjalanan Saya",
    contact_label: "kontak", contact_title: "Hubungi Saya",
    contact_subtitle: "Ada pertanyaan, kolaborasi, atau sekadar ingin menyapa? Saya selalu terbuka!",
    contact_email_label: "Email",
    form_name: "Nama", form_email: "Email", form_message: "Pesan",
    form_name_ph: "Nama kamu", form_email_ph: "email@contoh.com",
    form_msg_ph: "Tulis pesanmu di sini...",
    form_send: "Kirim Pesan", form_success: "Terima kasih! Pesan terkirim ✨",
    form_err_name: "Nama wajib diisi.", form_err_email: "Email tidak valid.",
    form_err_msg: "Pesan wajib diisi.",
    footer_made: "Dibuat", footer_by: "oleh",
    roles: ["AI Engineer", "Mahasiswa UNESA", "Problem Solver"],
  },
  en: {
    nav_about: "About", nav_skills: "Tools", nav_projects: "Projects",
    nav_experience: "Experience", nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_desc: "A student from Universitas Negeri Surabaya passionate about artificial intelligence.",
    hero_cta_projects: "View Projects", hero_cta_contact: "Contact Me",
    scroll_down: "scroll",
    about_label: "about me", about_title: "Get to Know Me",
    about_bio1: 'I am <strong style="color:var(--text-main)">Ananta Naufal Imamul Hikam</strong>, an active student at <strong style="color:var(--accent-primary)">Universitas Negeri Surabaya</strong> with a primary expertise as an <strong style="color:var(--accent-secondary)">AI Engineer</strong>.',
    about_bio2: "This is my first project building a portfolio website. I'm excited about building intelligent AI-powered solutions that create real impact for society.",
    stat_projects: "Projects", stat_passion: "AI",
    skills_label: "tools", skills_title: "Tools",
    projects_label: "projects", projects_title: "Portfolio",
    projects_subtitle: "My first project in the journey as a developer.",
    exp_label: "experience", exp_title: "My Journey",
    contact_label: "contact", contact_title: "Get In Touch",
    contact_subtitle: "Have a question, collaboration, or just want to say hi? I'm always open!",
    contact_email_label: "Email",
    form_name: "Name", form_email: "Email", form_message: "Message",
    form_name_ph: "Your name", form_email_ph: "email@example.com",
    form_msg_ph: "Write your message here...",
    form_send: "Send Message", form_success: "Thank you! Message sent",
    form_err_name: "Name is required.", form_err_email: "Invalid email.",
    form_err_msg: "Message is required.",
    footer_made: "Made with", footer_by: "by",
    roles: ["AI Engineer", "UNESA Student", "Problem Solver"],
  }
};

/* ===== STATE ===== */
let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('id') ? 'id' : 'en');
let currentTheme = localStorage.getItem('theme') || 'dark';
let roleIndex = 0;
let roleInterval;

/* ===== THEME ===== */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
applyTheme(currentTheme);

/* ===== LANGUAGE ===== */
function setLanguage(lang) {
  document.body.classList.add('lang-transition');
  setTimeout(() => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    const t = translations[lang];
    // text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });
    // lang button
    document.getElementById('lang-text').textContent = lang === 'id' ? 'EN 🇺🇸' : 'ID 🇮🇩';
    // re-render dynamic sections that use currentLang
    renderProjects();
    renderTimeline();
    observeCards('.skill-card');
    observeCards('.project-card');
    observeCards('.timeline-card');
    // restart role rotator
    startRoles();
    document.body.classList.remove('lang-transition');
  }, 150);
}
document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'id' ? 'en' : 'id');
});

/* ===== ROLES ROTATOR ===== */
function startRoles() {
  if (roleInterval) clearInterval(roleInterval);
  const roles = translations[currentLang].roles;
  const el = document.querySelector('[data-i18n-roles]');
  if (!el) return;
  roleIndex = 0;
  el.textContent = roles[roleIndex];
  roleInterval = setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    setTimeout(() => {
      el.textContent = roles[roleIndex];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 300);
  }, 3000);
  el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

/* ===== TYPEWRITER ===== */
function typewriter(el, text, speed = 70) {
  el.textContent = '';
  let i = 0;
  const t = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ===== CUSTOM CURSOR ===== */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

/* ===== MOBILE MENU ===== */
const mobileBtn = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('nav-mobile');
mobileBtn.addEventListener('click', () => {
  const open = mobileBtn.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  mobileBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileBtn.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ===== TOOLS DATA ===== */
const toolsData = [
  {
    name: 'Tailwind CSS',
    pct: 70,
    svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.33 10.8 14.44 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.67 7.2 14.56 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.33 16.8 9.44 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.67 13.2 9.56 12 7 12z" fill="currentColor"/></svg>'
  },
  {
    name: 'Lua',
    pct: 75,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="17.5" cy="6.5" r="2.5"/><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><circle cx="12" cy="12" r="4"/></svg>'
  },
  {
    name: 'Luau',
    pct: 70,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="2"/><path d="M7 8l2 2-2 2"/></svg>'
  },
  {
    name: 'Python',
    pct: 80,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.92 2c-.96.01-1.88.1-2.68.28-2.35.52-2.78 1.62-2.78 3.64v2.67h5.56v.89H5.59c-1.62 0-3.03.97-3.47 2.82-.51 2.12-.53 3.45 0 5.66.39 1.65 1.33 2.82 2.95 2.82h1.91v-2.54c0-1.84 1.59-3.46 3.47-3.46h5.55c1.55 0 2.78-1.27 2.78-2.83V5.92c0-1.51-1.27-2.64-2.78-2.92A16.8 16.8 0 0 0 11.92 2zM8.89 3.97c.58 0 1.05.48 1.05 1.07 0 .58-.47 1.06-1.05 1.06-.58 0-1.06-.48-1.06-1.06 0-.59.48-1.07 1.06-1.07zm6.22 5.62v2.6c0 1.92-1.63 3.51-3.47 3.51H6.09c-1.52 0-2.78 1.3-2.78 2.83v5.31c0 1.51 1.31 2.4 2.78 2.83 1.76.52 3.45.61 5.55 0 1.4-.41 2.78-1.23 2.78-2.83v-2.12h-5.55v-.71h8.33c1.62 0 2.22-1.13 2.78-2.82.58-1.74.55-3.41 0-5.66-.4-1.61-1.16-2.82-2.78-2.82h-2.08v-.02zm-3.05 10.39c.58 0 1.06.47 1.06 1.06 0 .59-.48 1.07-1.06 1.07-.59 0-1.05-.48-1.05-1.07 0-.59.46-1.06 1.05-1.06z"/></svg>'
  },
  {
    name: 'JavaScript',
    pct: 65,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.16 1.46 2.26 1.46 1.34 0 2.2-.7 2.2-2.42v-6.57h-1.7v6.53c0 .8-.33 1.01-.85 1.01-.52 0-.74-.35-.98-.77l-1.47.76h.54zm5.33-.27c.52.98 1.51 1.73 3.09 1.73 1.63 0 2.83-.85 2.83-2.27 0-1.36-.78-1.95-2.16-2.49l-.42-.18c-.7-.3-1-.5-1-.98 0-.39.3-.69.77-.69.46 0 .76.2 1.04.69l1.41-.9c-.59-1.04-1.42-1.44-2.45-1.44-1.54 0-2.52.98-2.52 2.26 0 1.33.78 1.96 1.95 2.42l.42.18c.73.32 1.17.51 1.17 1.05 0 .45-.42.78-1.07.78-.78 0-1.22-.4-1.56-1.04l-1.5.88z"/></svg>'
  },
  {
    name: 'HTML',
    pct: 75,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.136 3.012h15.729l-1.431 16.15L12.012 21l-6.396-1.838L4.136 3.012zM17.09 6.27H6.91l.255 2.86h9.67l-.44 4.96-4.39 1.22-4.39-1.22-.3-3.33h2.79l.15 1.7 1.75.47 1.75-.47.18-2.05H7.39l-.44-4.97h10.14l-.26-2.86h.26z"/></svg>'
  },
  {
    name: 'GitHub',
    pct: 70,
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>'
  }
];

function renderTools() {
  const container = document.getElementById('skills-tools-grid');
  if (!container) return;
  container.innerHTML = toolsData.map((s, i) => `
    <div class="skill-card" style="transition-delay:${i * 80}ms">
      <span class="skill-icon tool-svg-icon">${s.svg}</span>
      <p class="font-medium text-sm text-[var(--text-main)] mb-1">${s.name}</p>
      <div class="skill-bar-bg"><div class="skill-bar" data-pct="${s.pct}"></div></div>
    </div>
  `).join('');
}
renderTools();

/* ===== PROJECTS DATA ===== */
const projectsData = [
  {
    title: 'Portfolio Website',
    desc_id: 'Website portofolio pertama saya yang dibangun dengan teknologi modern sebagai langkah awal perjalanan saya di dunia programming.',
    desc_en: 'My first portfolio website built with modern technology as the first step of my programming journey.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    demo: '#'
  },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const t = translations[currentLang];
  grid.innerHTML = projectsData.map((p, i) => `
    <div class="project-card" style="transition-delay:${i * 80}ms">
      <div class="project-thumb">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/><line x1="14" y1="4" x2="10" y2="20"/></svg>
      </div>
      <div class="p-6">
        <h3 class="font-display font-bold text-lg text-[var(--text-main)] mb-2">${p.title}</h3>
        <p class="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">${currentLang === 'id' ? p.desc_id : p.desc_en}</p>
        <div class="flex flex-wrap gap-2 mb-5">
          ${p.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="flex gap-3">
          <a href="${p.demo}" class="btn-primary text-xs px-4 py-2" aria-label="Demo ${p.title}">Demo ↗</a>
        </div>
      </div>
    </div>
  `).join('');
  observeCards('.project-card');
}

/* ===== TIMELINE DATA ===== */
const timelineData = [
  {
    year: '2024',
    title_id: 'Mulai Kuliah',
    title_en: 'Started University',
    desc_id: 'Bergabung dengan Universitas Negeri Surabaya.',
    desc_en: 'Joined Universitas Negeri Surabaya.',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
  },
  {
    year: '2025',
    title_id: 'Mulai Tertarik Ngoding',
    title_en: 'Started Interest in Coding',
    desc_id: 'Mulai tertarik dan belajar programming, mengeksplorasi berbagai bahasa pemrograman dan teknologi web.',
    desc_en: 'Started getting interested in programming, exploring various programming languages and web technologies.',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  {
    year: '2026',
    title_id: 'Mendalami Ngoding & Membuat Web Porto',
    title_en: 'Deep Diving into Code & Building Portfolio',
    desc_id: 'Mulai mendalami dunia programming secara serius dan membuat website portofolio sebagai proyek pertama.',
    desc_en: 'Started deep diving into programming seriously and building a portfolio website as the first project.',
    iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  },
];


function renderTimeline() {
  const container = document.getElementById('timeline-items');
  if (!container) return;
  container.innerHTML = timelineData.map((item, i) => {
    const isRight = i % 2 === 1;
    return `
      <div class="md:flex items-center gap-8 ${isRight ? 'md:flex-row-reverse' : ''}">
        <div class="timeline-card ${isRight ? 'right' : ''} flex-1" style="transition-delay:${i * 150}ms">
          <div class="flex items-center gap-3 mb-2">
            <span class="timeline-svg-icon text-[var(--accent-primary)]">${item.iconSvg}</span>
            <span class="font-mono text-xs text-[var(--accent-secondary)]">${item.year}</span>
          </div>
          <h3 class="font-display font-bold text-[var(--text-main)] mb-2">${currentLang === 'id' ? item.title_id : item.title_en}</h3>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed">${currentLang === 'id' ? item.desc_id : item.desc_en}</p>
        </div>
        <div class="timeline-dot hidden md:block flex-shrink-0"></div>
        <div class="flex-1 hidden md:block"></div>
      </div>
    `;
  }).join('');
  observeCards('.timeline-card');
}

/* ===== INTERSECTION OBSERVER ===== */
function observeCards(selector) {
  const cards = document.querySelectorAll(selector);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // animate skill bars
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => obs.observe(c));
}

function observeFadeUps() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

function observeSectionTitles() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.section-title').forEach(el => obs.observe(el));
}

/* ===== TIMELINE FILL ===== */
function animateTimelineFill() {
  const fill = document.getElementById('timeline-fill');
  const timeline = document.getElementById('timeline');
  if (!fill || !timeline) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const rect = timeline.getBoundingClientRect();
        const visible = Math.min(1, (window.innerHeight - rect.top) / rect.height);
        fill.style.height = Math.max(0, visible * 100) + '%';
      }
    });
  }, { threshold: Array.from({ length: 20 }, (_, i) => i / 20) });
  obs.observe(timeline);
}

/* ===== STATS COUNTER ===== */
function animateCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 40;
        const t = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current) + suffix;
          if (current >= target) clearInterval(t);
        }, 30);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-counter').forEach(el => obs.observe(el));
}

/* ===== CONTACT FORM ===== */
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const t = translations[currentLang];
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();
  const errEl = document.getElementById('form-error');
  const successEl = document.getElementById('form-success');
  errEl.classList.add('hidden');
  successEl.classList.add('hidden');

  if (!name) { errEl.textContent = t.form_err_name; errEl.classList.remove('hidden'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = t.form_err_email; errEl.classList.remove('hidden'); return;
  }
  if (!msg) { errEl.textContent = t.form_err_msg; errEl.classList.remove('hidden'); return; }

  const btn = document.getElementById('form-submit');
  btn.disabled = true;
  btn.style.opacity = '0.6';
  setTimeout(() => {
    successEl.textContent = t.form_success;
    successEl.classList.remove('hidden');
    this.reset();
    btn.disabled = false;
    btn.style.opacity = '1';
  }, 800);
});

/* ===== PARALLAX HERO ===== */
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const scrollY = window.scrollY;
  hero.querySelectorAll('.orb').forEach((orb, i) => {
    orb.style.transform = `translateY(${scrollY * (0.1 + i * 0.05)}px)`;
  });
}, { passive: true });

/* ===== INIT ===== */
function init() {
  setLanguage(currentLang);
  renderProjects();
  renderTimeline();
  observeCards('.skill-card');
  observeFadeUps();
  observeSectionTitles();
  animateTimelineFill();
  animateCounters();

  // Typewriter on hero name
  const heroName = document.getElementById('hero-name');
  if (heroName) {
    setTimeout(() => typewriter(heroName, 'Ananta Naufal', 80), 600);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
