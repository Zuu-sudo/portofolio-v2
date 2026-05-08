const { useState, useEffect, useRef } = React;

const translations = {
  id: {
    brand: "Ananta.",
    nav: {
      about: "Tentang",
      tools: "Tools",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    hero: {
      eyebrow: "PORTFOLIO // AI & FRONTEND CRAFT",
      greeting: "Halo, saya",
      title: "Ananta Naufal Imamul Hikam",
      roles: ["AI Engineer", "Frontend Builder", "Mahasiswa UNESA", "Problem Solver"],
      description:
        "Saya membangun pengalaman digital yang terasa presisi, cepat, dan hidup — dari antarmuka modern sampai eksperimen AI yang fungsional.",
      primaryCta: "Lihat Proyek",
      secondaryCta: "Hubungi Saya",
      socialLabel: "Temukan saya di",
      availability: "Terbuka untuk kolaborasi, freelance, dan project build.",
      stats: [
        { value: "02", label: "Proyek unggulan" },
        { value: "08", label: "Tools utama" },
        { value: "24/7", label: "Rasa ingin tahu" },
      ],
    },
    about: {
      label: "tentang saya",
      title: "Mendesain struktur. Membangun sistem.",
      lead:
        "Saya mahasiswa Universitas Negeri Surabaya yang suka menggabungkan logika, visual, dan eksperimen teknologi jadi produk yang terasa matang.",
      body:
        "Fokus saya ada di AI, web interface, dan workflow development yang rapi. Saya tertarik pada detail kecil: ritme layout, performa interaksi, dan cara pengalaman digital meninggalkan kesan kuat.",
      cardTitle: "Profil singkat",
      location: "Sidoarjo, Indonesia",
      study: "Universitas Negeri Surabaya",
      focus: "AI Engineer / Frontend Craft",
      years: "Perjalanan aktif 2024 — sekarang",
      bioPoints: [
        "Suka mengubah ide mentah jadi interface yang lebih jelas dan usable.",
        "Nyaman bekerja dengan React ecosystem, modern CSS, dan tooling frontend.",
        "Terus eksplorasi Python dan Lua untuk otomasi, eksperimen, dan integrasi.",
      ],
      stats: [
        { value: "2", label: "Project showcase" },
        { value: "8", label: "Tech stack inti" },
        { value: "100%", label: "Build dengan rasa penasaran" },
      ],
      contactLabel: "Kontak cepat",
      email: "Email",
      instagram: "Instagram",
    },
    tools: {
      label: "tools",
      title: "Stack yang paling sering saya pakai",
      description:
        "Frontend modern, tooling development, dan bahasa yang saya gunakan untuk membangun produk, eksperimen, serta workflow kerja sehari-hari.",
      proficiency: "Proficiency",
    },
    projects: {
      label: "proyek",
      title: "Dua proyek. Dua arah karakter.",
      description:
        "Pilihan karya yang menonjolkan kombinasi visual, struktur, dan fokus implementasi nyata.",
      demo: "Demo",
      featured: "Featured Project",
      items: [
        {
          title: "Kureksari Blacksmith",
          summary:
            "Website company profile untuk pande besi tradisional dengan presentasi modern, kuat, dan dipercaya untuk kebutuhan industri serta pesanan custom.",
          details:
            "Fokus utama proyek ini ada pada penyajian brand yang tegas, navigasi jelas, dan tampilan layanan yang terasa profesional tanpa kehilangan karakter lokal.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
          demo: "https://kureksari-blacksmith.vercel.app/",
          accent: "forge",
        },
        {
          title: "Portfolio V2",
          summary:
            "Portofolio generasi kedua dengan dark theme, animasi bertahap, bilingual support, dan pengalaman yang lebih refined dari versi sebelumnya.",
          details:
            "Project ini jadi ruang eksperimen untuk visual rhythm, komposisi kontras, serta kualitas interaksi dari hero sampai contact section.",
          tags: ["JavaScript", "React", "Tailwind CSS"],
          demo: "#contact",
          accent: "ember",
        },
      ],
    },
    experience: {
      label: "pengalaman",
      title: "Timeline perjalanan",
      description:
        "Langkah-langkah yang membentuk fokus saya di dunia coding, AI, dan interface building.",
      items: [
        {
          year: "2024",
          title: "Memulai perjalanan kampus",
          description:
            "Masuk Universitas Negeri Surabaya dan mulai membentuk fondasi belajar yang lebih serius.",
        },
        {
          year: "2025",
          title: "Masuk lebih dalam ke coding",
          description:
            "Mulai aktif mengeksplorasi JavaScript, Python, Lua, dan pola membangun website modern.",
        },
        {
          year: "2026",
          title: "Membangun project dengan identitas",
          description:
            "Mulai fokus pada portofolio, kualitas visual, dan implementasi yang terasa lebih matang dan personal.",
        },
      ],
    },
    contact: {
      label: "kontak",
      title: "Mari bangun sesuatu yang solid.",
      description:
        "Kalau kamu punya ide, project, atau peluang kolaborasi, kirim pesan. Saya akan baca dan balas secepat mungkin.",
      cards: {
        email: "Email",
        instagram: "Instagram",
        github: "GitHub",
      },
      form: {
        title: "Kirim pesan",
        name: "Nama",
        email: "Email",
        message: "Pesan",
        namePlaceholder: "Nama kamu",
        emailPlaceholder: "email@contoh.com",
        messagePlaceholder: "Ceritakan project, ide, atau kebutuhanmu...",
        submit: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Terima kasih. Pesan berhasil dikirim.",
        errorName: "Nama wajib diisi.",
        errorEmail: "Email tidak valid.",
        errorMessage: "Pesan wajib diisi.",
        errorSubmit: "Gagal mengirim pesan. Coba lagi.",
      },
    },
    footer: {
      backToTop: "Kembali ke atas",
      copyright: "Dibuat oleh Ananta Naufal Imamul Hikam.",
    },
  },
  en: {
    brand: "Ananta.",
    nav: {
      about: "About",
      tools: "Tools",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      eyebrow: "PORTFOLIO // AI & FRONTEND CRAFT",
      greeting: "Hi, I'm",
      title: "Ananta Naufal Imamul Hikam",
      roles: ["AI Engineer", "Frontend Builder", "UNESA Student", "Problem Solver"],
      description:
        "I build digital experiences that feel precise, fast, and alive — from modern interfaces to functional AI experiments.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      socialLabel: "Find me on",
      availability: "Open for collaboration, freelance work, and product builds.",
      stats: [
        { value: "02", label: "Featured projects" },
        { value: "08", label: "Core tools" },
        { value: "24/7", label: "Curiosity mode" },
      ],
    },
    about: {
      label: "about me",
      title: "Designing structure. Building systems.",
      lead:
        "I am a student at Universitas Negeri Surabaya who likes turning logic, visuals, and technology experiments into polished products.",
      body:
        "My focus sits across AI, web interfaces, and clean development workflows. I care about small details: layout rhythm, interaction performance, and how digital experiences leave a strong impression.",
      cardTitle: "Quick profile",
      location: "Sidoarjo, Indonesia",
      study: "Universitas Negeri Surabaya",
      focus: "AI Engineer / Frontend Craft",
      years: "Active journey 2024 — present",
      bioPoints: [
        "I like turning raw ideas into clearer and more usable interfaces.",
        "Comfortable with React ecosystem, modern CSS, and frontend tooling.",
        "Continuously exploring Python and Lua for automation, experiments, and integrations.",
      ],
      stats: [
        { value: "2", label: "Showcase projects" },
        { value: "8", label: "Core technologies" },
        { value: "100%", label: "Built with curiosity" },
      ],
      contactLabel: "Quick contact",
      email: "Email",
      instagram: "Instagram",
    },
    tools: {
      label: "tools",
      title: "Stack I reach for most",
      description:
        "Modern frontend, development tooling, and languages I use to build products, experiments, and day-to-day workflows.",
      proficiency: "Proficiency",
    },
    projects: {
      label: "projects",
      title: "Two projects. Two distinct moods.",
      description:
        "Selected work showing how visual tone, structure, and real-world implementation can move together.",
      demo: "Demo",
      featured: "Featured Project",
      items: [
        {
          title: "Kureksari Blacksmith",
          summary:
            "A company profile website for a traditional blacksmith business, presented with a strong modern feel for industrial services and custom orders.",
          details:
            "Main focus: strong brand presentation, clear navigation, and service storytelling that feels professional without losing local identity.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
          demo: "https://kureksari-blacksmith.vercel.app/",
          accent: "forge",
        },
        {
          title: "Portfolio V2",
          summary:
            "A second-generation portfolio with dark theme, staggered animation, bilingual support, and a more refined feel than previous iterations.",
          details:
            "This project became a playground for visual rhythm, contrast-heavy composition, and stronger interaction quality from hero to contact.",
          tags: ["JavaScript", "React", "Tailwind CSS"],
          demo: "#contact",
          accent: "ember",
        },
      ],
    },
    experience: {
      label: "experience",
      title: "Journey timeline",
      description:
        "Milestones that shaped my focus on coding, AI, and interface building.",
      items: [
        {
          year: "2024",
          title: "Started university journey",
          description:
            "Joined Universitas Negeri Surabaya and began building a more serious learning foundation.",
        },
        {
          year: "2025",
          title: "Went deeper into coding",
          description:
            "Actively explored JavaScript, Python, Lua, and patterns for building modern websites.",
        },
        {
          year: "2026",
          title: "Built projects with identity",
          description:
            "Started focusing on portfolio work, visual quality, and implementation that feels more mature and personal.",
        },
      ],
    },
    contact: {
      label: "contact",
      title: "Let’s build something solid.",
      description:
        "If you have an idea, a project, or a collaboration opportunity, send a message. I’ll read it and reply as soon as I can.",
      cards: {
        email: "Email",
        instagram: "Instagram",
        github: "GitHub",
      },
      form: {
        title: "Send message",
        name: "Name",
        email: "Email",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "email@example.com",
        messagePlaceholder: "Tell me about your project, idea, or needs...",
        submit: "Send Message",
        sending: "Sending...",
        success: "Thank you. Your message has been sent.",
        errorName: "Name is required.",
        errorEmail: "Email is not valid.",
        errorMessage: "Message is required.",
        errorSubmit: "Failed to send message. Try again.",
      },
    },
    footer: {
      backToTop: "Back to top",
      copyright: "Built by Ananta Naufal Imamul Hikam.",
    },
  },
};

const toolsData = [
  {
    name: "Next.js",
    level: 82,
    iconClass: "devicon-nextjs-original",
    accent: "from-white/80 to-zinc-500/70",
  },
  {
    name: "React",
    level: 88,
    iconClass: "devicon-react-original",
    accent: "from-cyan-300/80 to-sky-500/60",
  },
  {
    name: "Python",
    level: 84,
    iconClass: "devicon-python-plain",
    accent: "from-yellow-300/80 to-blue-500/60",
  },
  {
    name: "Lua",
    level: 80,
    iconClass: "devicon-lua-plain",
    accent: "from-blue-300/80 to-indigo-500/60",
  },
  {
    name: "TypeScript",
    level: 85,
    iconClass: "devicon-typescript-plain",
    accent: "from-sky-300/80 to-blue-600/60",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    iconClass: "devicon-tailwindcss-original",
    accent: "from-cyan-200/80 to-teal-500/60",
  },
  {
    name: "Git",
    level: 78,
    iconClass: "devicon-git-plain",
    accent: "from-orange-200/80 to-orange-600/70",
  },
  {
    name: "JavaScript",
    level: 86,
    iconClass: "devicon-javascript-plain",
    accent: "from-yellow-200/80 to-amber-500/70",
  },
];

const contactLinks = {
  email: "mailto:anantanaufalwork@gmail.com",
  instagram: "https://instagram.com/zuu.sudo",
  github: "https://github.com/Zuu-sudo",
};

const socialLinks = [
  {
    label: "Instagram",
    href: contactLinks.instagram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: contactLinks.email,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: contactLinks.github,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    const nodes = ref.current.querySelectorAll("[data-reveal]");
    const timers = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const delay = Number(entry.target.dataset.delay || 0);
          const timer = setTimeout(() => {
            entry.target.classList.add("is-visible");
          }, delay);
          timers.push(timer);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return ref;
}

function useTypewriter(words, speed = 90, pause = 1700) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!words.length) return undefined;

    const currentWord = words[index % words.length];
    let timeoutId;

    if (displayed.length < currentWord.length) {
      timeoutId = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, speed);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayed("");
        setIndex((prev) => (prev + 1) % words.length);
      }, pause);
    }

    return () => clearTimeout(timeoutId);
  }, [displayed, index, pause, speed, words]);

  return displayed;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

function SectionHeading({ label, title, description, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <div
        data-reveal
        className="opacity-0 translate-y-8 [transition:all_.7s_ease] data-[visible=true]:opacity-100"
      >
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.45em] text-orange-400">
          {label}
        </p>
        <h2 className="mb-4 text-3xl font-black tracking-[-0.06em] text-text-primary md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-sm leading-7 text-text-secondary md:text-base">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

function Navbar({ t, theme, language, mobileMenuOpen, setMobileMenuOpen, toggleTheme, toggleLanguage }) {
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#tools", label: t.nav.tools },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(10,10,10,0.72)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#hero" className="text-xl font-black tracking-[-0.08em] text-text-primary md:text-2xl">
            <span className="text-orange-400">{t.brand}</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-text-secondary transition hover:border-orange-400/40 hover:text-text-primary"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text-secondary transition hover:border-orange-400/40 hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-primary lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[rgba(10,10,10,0.96)] px-6 pt-28 transition duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-[1.5rem] border border-white/8 bg-white/4 px-5 py-4 text-lg font-semibold text-text-primary transition hover:border-orange-400/30 hover:bg-white/8"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.24em] text-text-secondary"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-text-secondary"
            >
              {theme === "dark" ? "☀ Light" : "☾ Dark"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero({ t }) {
  const revealRef = useReveal();
  const typedRole = useTypewriter(t.hero.roles, 80, 1500);

  return (
    <section id="hero" ref={revealRef} className="relative overflow-hidden px-6 pb-20 pt-32 md:px-8 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute right-[-5%] top-40 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p
            data-reveal
            data-delay="0"
            className="mb-5 opacity-0 [transition:all_.7s_ease]"
          >
            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] text-orange-300">
              {t.hero.eyebrow}
            </span>
          </p>

          <div data-reveal data-delay="120" className="opacity-0 [transition:all_.7s_ease]">
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-text-secondary">{t.hero.greeting}</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-text-primary sm:text-6xl md:text-7xl xl:text-[6.2rem]">
              {t.hero.title}
            </h1>
          </div>

          <div
            data-reveal
            data-delay="240"
            className="mt-6 opacity-0 [transition:all_.7s_ease]"
          >
            <div className="inline-flex min-h-[3.25rem] items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base text-orange-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:text-lg">
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,0.7)]" />
              <span className="font-medium">{typedRole}</span>
              <span className="ml-1 animate-pulse text-orange-400">|</span>
            </div>
          </div>

          <p
            data-reveal
            data-delay="360"
            className="mt-6 max-w-2xl text-base leading-8 text-text-secondary opacity-0 [transition:all_.7s_ease] md:text-lg"
          >
            {t.hero.description}
          </p>

          <div
            data-reveal
            data-delay="480"
            className="mt-8 flex flex-col gap-4 opacity-0 [transition:all_.7s_ease] sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02] hover:bg-orange-400"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-primary transition hover:border-orange-400/30 hover:bg-white/8"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div
            data-reveal
            data-delay="600"
            className="mt-10 flex flex-col gap-5 opacity-0 [transition:all_.7s_ease] md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-text-muted">{t.hero.socialLabel}</p>
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition hover:-translate-y-1 hover:border-orange-400/40 hover:text-orange-300"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-text-muted">{t.hero.availability}</p>
          </div>
        </div>

        <div data-reveal data-delay="300" className="opacity-0 [transition:all_.8s_ease]">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_40%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-orange-300">System Snapshot</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.05em] text-text-primary">Portfolio Core</h3>
                </div>
                <div className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-orange-200">
                  Live
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {t.hero.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-[1.4rem] border border-white/8 bg-black/20 p-4 ${index === 1 ? "sm:translate-y-5 xl:translate-y-5" : ""}`}
                  >
                    <p className="text-3xl font-black tracking-[-0.08em] text-text-primary">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.6rem] border border-white/8 bg-black/25 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary">Core Signals</p>
                  <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.85)]" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: "UI rhythm", value: 92 },
                    { label: "Motion", value: 86 },
                    { label: "Structure", value: 90 },
                  ].map((item, idx) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-text-muted">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#F97316,#FDBA74)] animate-[scaleIn_.9s_ease_forwards] origin-left"
                          style={{ width: `${item.value}%`, animationDelay: `${idx * 120}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }) {
  const revealRef = useReveal();

  return (
    <section id="about" ref={revealRef} className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label={t.about.label} title={t.about.title} description={t.about.lead} />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal data-delay="0" className="opacity-0 [transition:all_.7s_ease]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-bg-secondary p-4 shadow-[0_25px_70px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_44%)]" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-orange-300">
                    {t.about.cardTitle}
                  </span>
                  <span className="text-xs uppercase tracking-[0.24em] text-text-muted">01</span>
                </div>
                <div className="mx-auto flex h-72 w-full max-w-[20rem] items-center justify-center rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-orange-400/20 bg-[radial-gradient(circle,rgba(249,115,22,0.2),rgba(255,255,255,0.02))] text-center shadow-[0_0_40px_rgba(249,115,22,0.12)]">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-orange-200">Ananta</p>
                      <p className="mt-3 text-5xl font-black tracking-[-0.08em] text-text-primary">AN</p>
                      <p className="mt-3 text-sm text-text-secondary">AI • Web • Motion</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-text-secondary">
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                    <span>{t.about.location}</span>
                    <span className="text-text-primary">IDN</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                    <span>{t.about.study}</span>
                    <span className="text-text-primary">UNESA</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                    <span>{t.about.focus}</span>
                    <span className="text-text-primary">Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div data-reveal data-delay="120" className="rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]">
              <p className="text-base leading-8 text-text-secondary">{t.about.body}</p>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-orange-300">{t.about.years}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div data-reveal data-delay="240" className="rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-text-muted">Bio notes</p>
                <div className="space-y-4">
                  {t.about.bioPoints.map((point, idx) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.75)]" />
                      <p className="text-sm leading-7 text-text-secondary">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div data-reveal data-delay="360" className="rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-text-muted">{t.about.contactLabel}</p>
                <div className="space-y-3">
                  <a href={contactLinks.email} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-text-secondary transition hover:border-orange-400/30 hover:text-text-primary">
                    <span>{t.about.email}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.22em]">Mail</span>
                  </a>
                  <a href={contactLinks.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-text-secondary transition hover:border-orange-400/30 hover:text-text-primary">
                    <span>{t.about.instagram}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.22em]">Social</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {t.about.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-delay={String(480 + idx * 120)}
                  className="rounded-[1.8rem] border border-white/10 bg-bg-secondary p-6 opacity-0 [transition:all_.7s_ease]"
                >
                  <p className="text-4xl font-black tracking-[-0.08em] text-text-primary">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tools({ t }) {
  const revealRef = useReveal();
  const sectionRef = useRef(null);
  const [activeBars, setActiveBars] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBars(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={revealRef} className="px-6 py-20 md:px-8">
      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <SectionHeading
          label={t.tools.label}
          title={t.tools.title}
          description={t.tools.description}
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {toolsData.map((tool, idx) => (
            <div
              key={tool.name}
              data-reveal
              data-delay={String(idx * 90)}
              className="group rounded-[2rem] border border-white/10 bg-bg-secondary p-6 opacity-0 [transition:all_.7s_ease] hover:-translate-y-1 hover:border-orange-400/25"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${tool.accent} text-3xl text-black shadow-[0_16px_40px_rgba(249,115,22,0.15)]`}>
                  <i className={tool.iconClass} aria-hidden="true" />
                </div>
                <span className="rounded-full border border-white/8 bg-black/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted">
                  {tool.level}%
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-[-0.04em] text-text-primary">{tool.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.24em] text-text-muted">{t.tools.proficiency}</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#F97316,#FDBA74)] transition-all duration-1000 ease-out"
                  style={{ width: activeBars ? `${tool.level}%` : "0%", transitionDelay: `${idx * 90}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ t }) {
  const revealRef = useReveal();

  return (
    <section id="projects" ref={revealRef} className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {t.projects.items.map((project, idx) => (
            <article
              key={project.title}
              data-reveal
              data-delay={String(idx * 140)}
              className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.8s_ease]"
            >
              <div className={`absolute inset-0 ${project.accent === "forge" ? "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_40%)]" : "bg-[radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.12),transparent_40%)]"}`} />
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.34em] text-orange-300">
                      {t.projects.featured}
                    </p>
                    <h3 className="text-3xl font-black tracking-[-0.06em] text-text-primary">{project.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-text-muted">
                    0{idx + 1}
                  </div>
                </div>

                <div className="mb-8 rounded-[1.8rem] border border-white/8 bg-black/25 p-6">
                  <p className="text-base leading-8 text-text-secondary">{project.summary}</p>
                  <p className="mt-4 text-sm leading-7 text-text-muted">{project.details}</p>
                </div>

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target={project.demo.startsWith("http") ? "_blank" : undefined}
                  rel={project.demo.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-orange-400"
                >
                  <span>{t.projects.demo}</span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  const revealRef = useReveal();

  return (
    <section id="experience" ref={revealRef} className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={t.experience.label}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-orange-400/60 via-white/10 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {t.experience.items.map((item, idx) => (
              <div
                key={`${item.year}-${item.title}`}
                data-reveal
                data-delay={String(idx * 140)}
                className={`relative grid gap-4 opacity-0 [transition:all_.8s_ease] md:grid-cols-2 ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`md:px-10 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="rounded-[2rem] border border-white/10 bg-bg-secondary p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-orange-300">{item.year}</p>
                    <h3 className="text-2xl font-bold tracking-[-0.05em] text-text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-orange-200/40 bg-orange-400 shadow-[0_0_16px_rgba(249,115,22,0.8)] md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, language }) {
  const revealRef = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      setStatus({ type: "error", message: t.contact.form.errorName });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus({ type: "error", message: t.contact.form.errorEmail });
      return;
    }

    if (!form.message.trim()) {
      setStatus({ type: "error", message: t.contact.form.errorMessage });
      return;
    }

    setSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("email", form.email.trim());
      formData.append("message", form.message.trim());
      formData.append("access_key", "3f207861-16bd-4a01-8c1a-48758b633747");
      formData.append("subject", `Portfolio Contact: ${form.name.trim()}`);
      formData.append("from_name", "Portfolio Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || t.contact.form.errorSubmit);
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({ type: "success", message: t.contact.form.success });
    } catch (error) {
      setStatus({ type: "error", message: error.message || t.contact.form.errorSubmit });
    } finally {
      setSending(false);
    }
  };

  const cards = [
    {
      title: t.contact.cards.email,
      value: "anantanaufalwork@gmail.com",
      href: contactLinks.email,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
    {
      title: t.contact.cards.instagram,
      value: "@zuu.sudo",
      href: contactLinks.instagram,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      title: t.contact.cards.github,
      value: "github.com/Zuu-sudo",
      href: contactLinks.github,
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={revealRef} className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {cards.map((card, idx) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                data-reveal
                data-delay={String(idx * 100)}
                className="group rounded-[2rem] border border-white/10 bg-bg-secondary p-6 opacity-0 [transition:all_.7s_ease] hover:border-orange-400/25"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/8 bg-black/20 text-orange-300">
                    {card.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-text-muted">{card.title}</p>
                    <p className="mt-2 text-sm text-text-primary">{card.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div data-reveal data-delay="180" className="rounded-[2.2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.8s_ease]">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-[-0.05em] text-text-primary">{t.contact.form.title}</h3>
              <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-orange-300">
                {language.toUpperCase()}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-text-muted">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/20 px-5 py-4 text-text-primary outline-none transition placeholder:text-text-muted focus:border-orange-400/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-text-muted">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/20 px-5 py-4 text-text-primary outline-none transition placeholder:text-text-muted focus:border-orange-400/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.24em] text-text-muted">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t.contact.form.messagePlaceholder}
                  rows="6"
                  className="w-full rounded-[1.3rem] border border-white/10 bg-black/20 px-5 py-4 text-text-primary outline-none transition placeholder:text-text-muted focus:border-orange-400/40"
                />
              </div>

              {status.message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-200"
                      : "border-red-400/25 bg-red-500/10 text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.02] hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="border-t border-white/8 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-text-muted">{t.footer.copyright}</p>
        <a
          href="#hero"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-text-secondary transition hover:text-orange-300"
        >
          <span>{t.footer.backToTop}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 19 0-14" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    return navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progress = useScrollProgress();
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = language === "id" ? "Ananta Naufal — Portfolio" : "Ananta Naufal — Portfolio";
    return () => {
      document.title = previousTitle;
    };
  }, [language]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [language]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLanguage = () => setLanguage((prev) => (prev === "id" ? "en" : "id"));

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div
        className="fixed left-0 top-0 z-[60] h-[3px] bg-[linear-gradient(90deg,#F97316,#FDBA74)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.8)_1px,transparent_0)] [background-size:28px_28px]" />

      <Navbar
        t={t}
        theme={theme}
        language={language}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
      />

      <main className="relative z-10">
        <Hero t={t} />
        <About t={t} />
        <Tools t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Contact t={t} language={language} />
      </main>

      <Footer t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
