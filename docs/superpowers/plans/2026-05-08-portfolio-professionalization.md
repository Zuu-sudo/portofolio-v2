# Portfolio Professionalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform portfolio from generic AI slop aesthetic to professional, distinctive personal brand that doesn't feel generated.

**Architecture:** 
- Migrate from CDN-based React to proper build process (Vite)
- Replace generic AI visual patterns with subtle, refined design choices
- Remove animation overuse, add purposeful motion only
- Add professional assets (SVG favicon, real project images, proper icons)

**Tech Stack:** Vite + React + Tailwind CSS (built), Lucide Icons, proper build pipeline

---

## File Structure

```
PORTOV2/
├── docs/superpowers/plans/YYYY-MM-DD-portfolio-professionalization.md  (this file)
├── src/
│   ├── main.jsx              (migrated from main.js)
│   ├── App.jsx                (root component)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Tools.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useReveal.js
│   │   ├── useTypewriter.js
│   │   └── useScrollProgress.js
│   ├── data/
│   │   ├── translations.js
│   │   └── toolsData.js
│   └── index.css
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── style.css   (to be removed after migration)
```

---

## Task 1: Setup Vite + React + Tailwind Build Process

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/main.jsx`
- Create: `src/index.css`
- Modify: `index.html`
- Delete: `style.css` (after migration complete)

- [ ] **Step 1: Create package.json**

```json
{
  "name": "portfolio-v3",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

- [ ] **Step 2: Create vite.config.js**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
```

- [ ] **Step 3: Create tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
          elevated: '#222222',
        },
        accent: {
          primary: '#F97316',
          secondary: '#EA580C',
          tertiary: '#FDBA74',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Create postcss.config.js**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 5: Create src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-primary: #0A0A0A;
    --bg-secondary: #111111;
    --bg-tertiary: #1A1A1A;
    --bg-elevated: #222222;
    --accent-primary: #F97316;
    --accent-secondary: #EA580C;
    --accent-tertiary: #FDBA74;
    --text-primary: #FAFAFA;
    --text-secondary: #A1A1AA;
    --text-muted: #71717A;
  }

  [data-theme="light"] {
    --bg-primary: #FAFAFA;
    --bg-secondary: #F4F4F5;
    --bg-tertiary: #E4E4E7;
    --bg-elevated: #FFFFFF;
    --accent-primary: #EA580C;
    --accent-secondary: #F97316;
    --text-primary: #18181B;
    --text-secondary: #52525B;
    --text-muted: #A1A1AA;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.75;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--accent-primary);
    border-radius: 3px;
  }
}
```

- [ ] **Step 6: Create src/main.jsx**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 7: Update index.html for Vite**

```html
<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Ananta Naufal Imamul Hikam — AI Engineer & Mahasiswa Universitas Negeri Surabaya." />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <title>Ananta Naufal — AI Engineer Portfolio</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

- [ ] **Step 8: Create src/App.jsx (minimal shell)**

```jsx
import React, { useState } from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <p>Shell migration complete. Components will be added in subsequent tasks.</p>
    </div>
  )
}
```

- [ ] **Step 9: Run build test**

Run: `npm install && npm run build`
Expected: SUCCESS, dist/ folder created with built assets

---

## Task 2: Professional SVG Favicon

**Files:**
- Create: `public/favicon.svg`
- Modify: `index.html` (update favicon reference)

- [ ] **Step 1: Create public/favicon.svg**

Create a minimal, professional SVG favicon. Options:
- Lettermark "A" with orange accent
- Geometric icon representing code/AI
- Abstract monogram

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0A0A0A"/>
  <text x="16" y="23" font-family="Inter, sans-serif" font-weight="800" font-size="20" fill="#F97316" text-anchor="middle">A</text>
</svg>
```

Alternative (more distinctive - angular "A" mark):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <polygon points="16,4 28,28 22,28 16,18 10,28 4,28" fill="none" stroke="#F97316" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="10" y1="22" x2="22" y2="22" stroke="#F97316" stroke-width="2.5"/>
</svg>
```

---

## Task 3: Replace Devicon with Lucide Icons

**Files:**
- Modify: `src/components/Tools.jsx` (migrate from devicon)

- [ ] **Step 1: Replace devicon imports with Lucide**

Devicon uses emoji/CSS-based icons that look generic. Lucide is cleaner, consistent stroke-based icons.

```jsx
// BEFORE (devicon)
<span className="devicon-react-original text-3xl" />

// AFTER (Lucide)
import { Atom, Code2, FileCode, FileText, GitBranch, Layers } from 'lucide-react'

// Map tools to Lucide icons
const toolIcons = {
  'Next.js': <Layers className="w-6 h-6" />,
  'React': <Atom className="w-6 h-6" />,
  'Python': <FileCode className="w-6 h-6" />,
  'TypeScript': <FileText className="w-6 h-6" />,
  'Tailwind CSS': <Layers className="w-6 h-6" />,
  'Git': <GitBranch className="w-6 h-6" />,
  'JavaScript': <FileCode className="w-6 h-6" />,
  'Lua': <FileText className="w-6 h-6" />,
}
```

---

## Task 4: Component Migration (Hero + Navbar)

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Hero.jsx`
- Create: `src/hooks/useReveal.js`
- Create: `src/hooks/useTypewriter.js`
- Create: `src/hooks/useScrollProgress.js`
- Create: `src/data/translations.js`
- Create: `src/data/toolsData.js`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create src/data/translations.js**

Migrate translations object from main.js to proper module.

- [ ] **Step 2: Create src/data/toolsData.js**

Migrate toolsData array from main.js.

- [ ] **Step 3: Create src/hooks/useReveal.js**

```jsx
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const nodes = ref.current.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const delay = Number(entry.target.dataset.delay || 0)
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, delay)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return ref
}
```

- [ ] **Step 4: Create src/hooks/useTypewriter.js**

```jsx
import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 90, pause = 1700) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!words.length) return
    const currentWord = words[index % words.length]
    let timeoutId

    if (displayed.length < currentWord.length) {
      timeoutId = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1))
      }, speed)
    } else {
      timeoutId = setTimeout(() => {
        setDisplayed('')
        setIndex((prev) => (prev + 1) % words.length)
      }, pause)
    }

    return () => clearTimeout(timeoutId)
  }, [displayed, index, pause, speed, words])

  return displayed
}
```

- [ ] **Step 5: Create src/hooks/useScrollProgress.js**

```jsx
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const next = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(next)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}
```

- [ ] **Step 6: Create src/components/Navbar.jsx**

Migrate Navbar component. Key changes:
- Remove custom cursor code (no #cursor element)
- Use Lucide icons for menu toggle
- Keep bilingual support

- [ ] **Step 7: Create src/components/Hero.jsx**

Migrate Hero component. Key changes:
- **REMOVE**: Floating orbs with blur animations
- **REMOVE**: Excessive gradient mesh background
- **KEEP**: Subtle gradient background (simplified)
- **KEEP**: Typewriter effect but reduce words/pause
- **ADD**: More restrained entrance animation (single fade-in, no staggered reveals on every element)
- **ADD**: Actual profile photo usage

---

## Task 5: Remove Animation Overuse

**Files:**
- Modify: `src/index.css`
- Modify: Hero, About, Tools, Projects, Experience components

- [ ] **Step 1: Strip excessive CSS animations**

Remove from index.css:
```css
/* REMOVE THESE */
@keyframes floatOrb { ... }  /* Floating orbs - DELETE */
.orb { ... }                /* Orb elements - DELETE */
.orb-1, .orb-2, .orb-3 { }  /* Specific orbs - DELETE */
.meshMove { }               /* Gradient mesh - DELETE */
.borderRotate { }           /* Animated gradient border - DELETE */
@keyframes roleSlide { }   /* Role sliding animation - DELETE */
```

Keep only:
```css
/* KEEP THESE */
@keyframes fadeSlideUp { }  /* Single entrance animation */
.fade-up { }                /* Reveal on scroll */
.scrollPulse { }            /* Scroll indicator only */
```

- [ ] **Step 2: Simplify Hero background**

Replace complex hero-bg with simple solid or single subtle gradient:
```css
.hero-bg {
  background: var(--bg-primary);
  /* ONE subtle radial gradient only */
  background-image: radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.06), transparent 50%);
}
```

- [ ] **Step 3: Reduce reveal stagger delays**

In components, change:
```jsx
// BEFORE
data-delay="0" data-delay="120" data-delay="240" data-delay="360" data-delay="480" data-delay="600"

// AFTER
data-delay="0" // Only first element has delay, rest flow naturally
```

---

## Task 6: Restyle About Section

**Files:**
- Create: `src/components/About.jsx`

- [ ] **Step 1: Create About component**

Key changes:
- **REMOVE**: Animated gradient border on profile photo (very AI-slop)
- **KEEP**: Clean static border or no border
- **KEEP**: Stats counters but make them look more natural
- **UPDATE**: Bio points to sound more human (less "I like turning raw ideas")

---

## Task 7: Restyle Tools Section

**Files:**
- Create: `src/components/Tools.jsx`

- [ ] **Step 1: Create Tools component with Lucide icons**

```jsx
import { Layers, Atom, FileCode, FileText, GitBranch, Code2 } from 'lucide-react'

const toolIcons = {
  'Next.js': <Layers className="w-8 h-8" />,
  'React': <Atom className="w-8 h-8" />,
  'Python': <FileCode className="w-8 h-8" />,
  'Lua': <FileText className="w-8 h-8" />,
  'TypeScript': <FileCode className="w-8 h-8" />,
  'Tailwind CSS': <Layers className="w-8 h-8" />,
  'Git': <GitBranch className="w-8 h-8" />,
  'JavaScript': <Code2 className="w-8 h-8" />,
}
```

Key changes:
- Skill cards: Remove hover scale transform (causes layout shift)
- Skill bars: Keep but make them subtle
- Remove skill-icon emoji/text - use Lucide consistently

---

## Task 8: Projects Section with Real Images

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Create Projects component**

Requirements:
- Each project MUST have a real screenshot or placeholder image
- NO generic gradient backgrounds as project "images"
- Use actual image files stored in `/public/projects/`
- Tech tags: Use small pill badges with monospace font

```jsx
// Project image structure
<div className="relative h-48 overflow-hidden rounded-t-xl">
  <img 
    src="/projects/kureksari.png" 
    alt="Kureksari Blacksmith website screenshot"
    className="w-full h-full object-cover"
  />
</div>
```

- [ ] **Step 2: Add placeholder images**

For now, create solid color placeholders with project initial:
```jsx
<div className="h-48 bg-gradient-to-br from-bg-elevated to-bg-tertiary flex items-center justify-center">
  <span className="text-4xl font-bold text-accent-primary">K</span>
</div>
```

Later can replace with real screenshots.

---

## Task 9: Experience Timeline - Add Specificity

**Files:**
- Create: `src/components/Experience.jsx`

- [ ] **Step 1: Create Experience component**

Timeline entries need MORE detail:
```jsx
// BEFORE (generic)
{
  year: "2024",
  title: "Memulai perjalanan kampus",
  description: "Masuk Universitas Negeri Surabaya..."
}

// AFTER (specific)
{
  year: "2024",
  title: "Informatics UNESA",
  description: "Semester 1: Belajar dasar pemrograman, algoritma, dan struktur data. Mulai eksplorasi web development secara otodidak."
}
```

---

## Task 10: Contact Section - Functional Form

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Create Contact component**

Form handling options:
1. **Formspree / EmailJS** (free tier, no backend needed)
2. **Netlify Forms** (if deploying to Netlify)

```jsx
// Example with Formspree
<form action="https://formspree.io/f/your-form-id" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required />
  <button type="submit">Kirim Pesan</button>
</form>
```

---

## Task 11: Light Mode Consistency

**Files:**
- Modify: `tailwind.config.js` (light mode colors)
- Modify: All components (test both modes)

- [ ] **Step 1: Verify light mode color contrast**

Light mode checklist:
- [ ] Text: Use `text-zinc-900` not `text-zinc-800` for body
- [ ] Background: Use pure white `#FFFFFF` for cards
- [ ] Borders: Use `border-zinc-200` not `border-white/10`
- [ ] Buttons: Orange accent works on white background
- [ ] Icons: All icons visible on light background

---

## Task 12: Footer + Final Polish

**Files:**
- Create: `src/components/Footer.jsx`
- Modify: `src/index.css` (final cleanup)

- [ ] **Step 1: Create Footer component**

```jsx
export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 py-8 text-center">
      <p className="text-sm text-text-muted">
        Dibuat oleh Ananta Naufal Imamul Hikam
      </p>
    </footer>
  )
}
```

- [ ] **Step 2: Final CSS cleanup**

Remove any:
- Unused CSS variables
- Dead CSS rules
- Comments with "AI slop" indicators
- Debug styles

---

## Dependency Graph

```
Task 1 (Build Setup)
    └── ALL other tasks depend on this

Task 2 (Favicon)
    └── Can happen anytime after Task 1

Task 3 (Lucide Icons)
    └── Can happen anytime after Task 1

Task 4 (Core Components)
    ├── Task 5 (Animation cleanup during migration)
    ├── Task 6 (About)
    ├── Task 7 (Tools)
    ├── Task 8 (Projects)
    ├── Task 9 (Experience)
    ├── Task 10 (Contact)
    └── Task 11 (Light mode)
         └── Task 12 (Final polish)
```

---

## Self-Review Checklist

1. **Spec coverage:** Can you point to a task for each improvement?
   - [x] Favicon: Task 2
   - [x] Devicon → Lucide: Task 3
   - [x] Build process: Task 1
   - [x] Animation reduction: Task 5
   - [x] Real project images: Task 8
   - [x] Light mode: Task 11
   - [x] Timeline specificity: Task 9

2. **Placeholder scan:** No TBD/TODO placeholders in code steps

3. **Type consistency:** All imports use consistent paths (`src/` not `./src/`)

---

**Plan complete.**

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?