/* ===== PROJECT SHOWCASE: Interactive Image Accordion ===== */
const projects = [
  {
    name: "Chevrolet Interactive Hoarding",
    label: "Chevrolet",
    tech: "Unity / LiDAR Sensor / C# / Data Analytics / Watchdog Monitoring System",
    desc: "Interactive Chevrolet hoarding using LiDAR tracking where particles reacted to audience movement to reveal visuals. Included engagement analytics, footfall tracking, and watchdog system with crash alerts. Installed at Mirdif City Centre, Dubai.",
    src: "Assets/casestudies/1.png",
  },
  {
    name: "Schneider Electric Company Presentation",
    label: "Schneider Electric",
    tech: "Unity / C# / Dual Screen Control System",
    desc: "Permanent interactive presentation system for Schneider Electric installed at their Nest office DSO. Featured dual-screen control for LED and 55-inch displays, interactive company presentations, infographic animations, video playback controls, slide complete indicators, and animated UI transitions.",
    src: "Assets/casestudies/2.png",
  },
  {
    name: "ADNOC Proximity Trigger Display",
    label: "ADNOC",
    tech: "Unity / C# / Arduino / Ardity / Ultrasonic Sensor",
    desc: "Interactive proximity-based display for ADNOC where content automatically triggered when visitors approached the screen. Used Arduino with ultrasonic sensors and Ardity for distance detection, with the system returning to a default holding screen after video playback.",
    src: "Assets/casestudies/3.png",
  },
  {
    name: "Suzuki Jimny Personality Match",
    label: "Suzuki Jimny",
    tech: "Unity / C# / SMTP Email System / Excel Data Logging",
    desc: "Interactive personality quiz for the Suzuki Jimny where visitors answered 5 questions to receive a personalized Jimny artwork. Included user registration with Excel data capture, branded photo capture experience, and instant email sharing through an SMTP system.",
    src: "Assets/casestudies/4.png",
  },
  {
    name: "TII Smart Proximity Activation System",
    label: "TII",
    tech: "Unity / C# / LiDAR Sensor",
    desc: "A spatial interaction system for Technology Innovation Institute using LiDAR tracking with three trigger zones. Content activated and transitioned based on visitor position, enabling real-time, location-based digital interaction within the space.",
    src: "Assets/casestudies/5.png",
  },
  {
    name: "GESS Projection Mapping",
    label: "GESS",
    tech: "Resolume Arena / Projection Mapping",
    desc: "Projection mapping installation for GESS using hexagonal surface layouts. Videos were precisely mapped and sequenced in Resolume Arena, enabling smooth playback transitions across multiple mapped segments in a continuous visual flow.",
    src: "Assets/casestudies/6.png",
  },
  {
    name: "Medical Touchless Interaction System",
    label: "Medical Touchless",
    tech: "Unity / C# / LiDAR",
    desc: "A touchless interaction system for medical environments using LiDAR-based gesture tracking. Users could control the application without physical contact, interacting in X-Y space, including zoom, scale, and navigation through distance-based hand movements for a fully contactless experience.",
    src: "Assets/casestudies/7.png",
  },
  {
    name: "Qatar Quest Game",
    label: "Qatar Quest",
    tech: "Unity / C#",
    desc: "A gamified tourist experience in Qatar where users select a map, register, and guide a ball from start to finish without hitting borders or obstacles. Players have 3 lives, and completing the level unlocks a giveaway reward while capturing user data through registration.",
    src: "Assets/casestudies/8.jpeg",
  },
  {
    name: "Rio Mare Spin the Wheel",
    label: "Rio Mare",
    tech: "Unity / C#",
    desc: "A kiosk-based reward activation for Rio Mare where customers who purchased a product could spin a digital wheel to win prizes. Rewards included daily giveaways such as staycations and other gifts, with a randomly selected grand winner each day.",
    src: "Assets/casestudies/9.png",
  },
  {
    name: "Interactive Perfume Dispenser",
    label: "Perfume Dispenser",
    tech: "Unity / C# / Arduino / Sensors / Resolume API",
    desc: "An interactive fragrance experience using a transparent OLED display showcasing perfume details, notes, and story. Users could select a perfume to trigger dynamic LED lighting effects controlled via Resolume Arena. On request, a timed mechanism dispensed the fragrance through a motorized system, blending digital interaction with physical product sampling.",
    src: "Assets/casestudies/10.png",
  },
  {
    name: "Row Boat Simulator",
    label: "Row Boat Simulator",
    tech: "Unity / C# / Arduino / Simulator",
    desc: "An immersive rowing simulator built in Unity where users physically row to navigate a virtual boat environment. The system tracks rowing speed, distance covered, and estimated calories burned in real time. Users can also select different environments for varied simulation experiences and performance tracking.",
    src: "Assets/casestudies/11.png",
  },
  {
    name: "Indein Proximity-Based Trigger",
    label: "Indein Content Trigger",
    tech: "Unity / C# / LiDAR",
    desc: "A circular LED-based interactive installation where content is triggered based on visitor position within defined zones. Using LiDAR tracking, the system detects user placement in real time and activates one of three environment-based videos, creating a dynamic spatial storytelling experience that responds to audience movement.",
    src: "Assets/casestudies/12.png",
  },
  {
    name: "Cafe Menu & Ordering App",
    label: "Cafe App",
    tech: "Unity / C#",
    desc: "A digital restaurant menu application built for browsing dishes and placing orders seamlessly. Users can explore menu categories, view item details, and submit orders through an intuitive interactive interface.",
    src: "Assets/casestudies/13.jpeg",
  },
  {
    name: "Solution Decode Game",
    label: "Solution Decode Game",
    tech: "Unity / C#",
    desc: "A timed memory challenge game where a random phrase is displayed for a short duration for users to memorize. After it disappears, players must reconstruct the phrase using a jumbled on-screen keyboard within a limited time. Successful completion rewards the user, testing memory, focus, and speed.",
    src: "Assets/casestudies/14.jpeg",
  },
  {
    name: "MBZUAI Energy Interaction",
    label: "MBZUAI",
    tech: "Unity / C# / LiDAR",
    desc: "An interactive installation for Mohamed bin Zayed University of Artificial Intelligence where user presence at a designated point triggers real-time feedback on a large LED display. The system randomly generates and displays “energy output” based on user engagement, presenting dynamic messages that respond to visitor presence and interaction.",
    src: "Assets/casestudies/15.png",
  },
  {
    name: "DFS Finance Timeline Wall",
    label: "DFS Timeline",
    tech: "Unity / C# / LiDAR",
    desc: "An interactive LED timeline installation for DFS showcasing the evolution of finance from traditional systems to modern cryptocurrency. Users could explore key milestones through a large-scale visual narrative, with structured transitions and storytelling across historical financial eras.",
    src: "Assets/casestudies/16.png",
  },
];

function initShowcase() {
  const container = document.getElementById('imageAccordion');
  const nameEl = document.getElementById('showcaseName');
  const techEl = document.getElementById('showcaseTech');
  const descEl = document.getElementById('showcaseDesc');
  const prevBtn = document.getElementById('accPrev');
  const nextBtn = document.getElementById('accNext');
  const counterEl = document.getElementById('accCounter');
  if (!container) return;

  const VISIBLE = 5;
  const maxStart = projects.length - VISIBLE;
  let windowStart = 0;
  let activeIndex = 0;
  const items = [];

  function updateText(i) {
    nameEl.textContent = projects[i].name;
    techEl.textContent = projects[i].tech;
    descEl.textContent = projects[i].desc;
  }

  function updateCounter() {
    counterEl.innerHTML = `<span class="current">${activeIndex + 1}</span> / ${projects.length}`;
  }

  function updateVisibility() {
    items.forEach((item, i) => {
      const inWindow = i >= windowStart && i < windowStart + VISIBLE;
      item.classList.toggle('hidden', !inWindow);
    });
  }

  function centerWindowOn(i) {
    // Center the window so active image has 2 on each side
    let newStart = i - 2;
    newStart = Math.max(0, Math.min(maxStart, newStart));
    if (newStart !== windowStart) {
      windowStart = newStart;
      updateVisibility();
    }
  }

  function setActive(i) {
    items.forEach(el => el.classList.remove('active'));
    items[i].classList.add('active');
    activeIndex = i;
    updateText(i);
    updateCounter();
    centerWindowOn(i);
  }

  // Build all items once — only first VISIBLE are shown
  projects.forEach((project, i) => {
    const item = document.createElement('div');
    item.className = 'accordion__item' + (i >= VISIBLE ? ' hidden' : '') + (i === 0 ? ' active' : '');
    item.innerHTML = `
      <img class="accordion__img" src="${project.src}" alt="${project.name}" />
      <div class="accordion__overlay"></div>
      <span class="accordion__title">${project.label}</span>
    `;

    item.addEventListener('mouseenter', () => {
      setActive(i);
    });

    container.appendChild(item);
    items.push(item);
  });

  prevBtn.addEventListener('click', () => {
    const newActive = Math.max(0, activeIndex - 1);
    setActive(newActive);
  });
  nextBtn.addEventListener('click', () => {
    const newActive = Math.min(projects.length - 1, activeIndex + 1);
    setActive(newActive);
  });

  updateText(0);
  updateCounter();
}

/* ===== EXPERIENCE VARIANT 1: Self-Drawing Timeline ===== */
function initExpTimeline() {
  const section = document.getElementById('exp-timeline');
  if (!section) return;

  const lineFill = section.querySelector('.exp-timeline__line-fill');
  const items = section.querySelectorAll('.exp-timeline__item');

  // Scroll-driven line draw
  function updateLine() {
    const sectionRect = section.getBoundingClientRect();
    const viewH = window.innerHeight;

    // Progress: 0 when section top is at bottom of viewport, 1 when section bottom is at top
    const totalHeight = sectionRect.height;
    const scrolledInto = viewH - sectionRect.top;
    const progress = Math.max(0, Math.min(1, scrolledInto / (totalHeight + viewH * 0.3)));

    lineFill.style.height = `${progress * 100}%`;

    // Reveal items based on their position
    items.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < viewH * 0.8) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });

    requestAnimationFrame(updateLine);
  }

  requestAnimationFrame(updateLine);
}

/* ===== SCROLL REVEAL: Credentials section (gradient skew cards) ===== */
function initDetailsSections() {
  const credCards = document.querySelectorAll('.credentials__card-wrap');
  let credRevealed = false;

  function check() {
    const vh = window.innerHeight;

    if (!credRevealed && credCards.length > 0) {
      const section = document.querySelector('.credentials');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < vh * 0.85) {
          credRevealed = true;
          credCards.forEach((card, i) => {
            setTimeout(() => card.classList.add('revealed'), i * 150);
          });
        }
      }
    }

    requestAnimationFrame(check);
  }

  requestAnimationFrame(check);
}

/* ===== FOOTER: Fit name edge-to-edge ===== */
function initFooterNameReveal() {
  const line = document.querySelector('.footer-name__line');
  const subtitle = document.querySelector('.footer-name__subtitle');
  const icons = document.querySelector('.footer-name__icons');
  if (!line) return;

  function fitText() {
    const containerWidth = window.innerWidth;
    // Use canvas to measure text width accurately without DOM interference
    const text = line.textContent;
    const style = getComputedStyle(line);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = '103px ' + style.fontFamily;
    const textWidth = ctx.measureText(text).width;
    const size = Math.floor((containerWidth / textWidth) * 100);
    line.style.fontSize = size + 'px';

    // Match icons row width to subtitle text width
    if (subtitle && icons) {
      icons.style.width = subtitle.offsetWidth + 'px';
    }
  }

  fitText();
  window.addEventListener('resize', fitText);

  // Reveal animation when footer scrolls into view
  const footer = document.querySelector('.footer-name');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('revealed');
        observer.unobserve(footer);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(footer);
}

/* ===== Init ===== */
/* ===== BlurText letter-by-letter reveal ===== */
function initBlurText() {
  const elements = document.querySelectorAll('.blur-text');
  elements.forEach(el => {
    const animateBy = el.dataset.animate || 'letters'; // 'letters' or 'words'
    const delay = parseInt(el.dataset.delay, 10) || 80;

    // Capture innerHTML to preserve <br> tags, then extract text lines
    const html = el.innerHTML;
    const lines = html.split(/<br\s*\/?>/i);

    el.innerHTML = '';
    let spanIndex = 0;

    lines.forEach((lineText, lineIdx) => {
      const text = lineText.trim();
      const segments = animateBy === 'words' ? text.split(' ') : text.split('');

      segments.forEach((seg, i) => {
        const span = document.createElement('span');
        span.className = 'blur-letter';
        span.textContent = seg;
        span.style.transitionDelay = `${spanIndex * delay}ms`;
        el.appendChild(span);
        spanIndex++;
        // Add space between words
        if (animateBy === 'words' && i < segments.length - 1) {
          el.appendChild(document.createTextNode('\u00A0'));
        }
      });

      // Re-insert <br> between lines
      if (lineIdx < lines.length - 1) {
        el.appendChild(document.createElement('br'));
      }
    });
  });

  // Use IntersectionObserver to trigger the reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll('.blur-letter');
        letters.forEach(l => l.classList.add('revealed'));
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // Also reveal .hero-reveal elements (name lines with gradient — not split into spans)
  const heroReveals = document.querySelectorAll('.hero-reveal');
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  heroReveals.forEach(el => heroObserver.observe(el));
}

/* ===== Hero Matrix Grid Background ===== */
function initHeroGrid() {
  const grid = document.getElementById('hero-grid');
  if (!grid) return;

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>{}[]';
  const GLOW_RADIUS = 150; // px radius for mouse proximity glow
  let tiles = [];
  let cols = 0;
  let rows = 0;
  let mouseX = -9999;
  let mouseY = -9999;
  let rafId = null;

  function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  function buildGrid() {
    const rect = grid.getBoundingClientRect();
    const tileSize = Math.max(28, Math.min(40, rect.width / 35));
    cols = Math.floor(rect.width / tileSize);
    rows = Math.floor(rect.height / tileSize);
    if (cols < 1 || rows < 1) return;

    grid.style.setProperty('--grid-cols', cols);
    grid.style.setProperty('--grid-rows', rows);
    grid.innerHTML = '';
    tiles = [];

    for (let i = 0; i < cols * rows; i++) {
      const tile = document.createElement('span');
      tile.className = 'hero-grid__tile';
      tile.textContent = randomChar();
      tile.addEventListener('click', () => {
        tile.textContent = randomChar();
        tile.classList.remove('glitch');
        void tile.offsetWidth; // force reflow
        tile.classList.add('glitch');
        setTimeout(() => tile.classList.remove('glitch'), 300);
      });
      grid.appendChild(tile);
      tiles.push(tile);
    }
  }

  // Color lerp: #150037 → #c6ff33
  const BASE = [21, 0, 55];
  const GLOW = [198, 255, 51];

  function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

  function updateGlow() {
    const gridRect = grid.getBoundingClientRect();
    for (let i = 0; i < tiles.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const tileCenterX = gridRect.left + (col + 0.5) * (gridRect.width / cols);
      const tileCenterY = gridRect.top + (row + 0.5) * (gridRect.height / rows);

      const dx = mouseX - tileCenterX;
      const dy = mouseY - tileCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const intensity = Math.max(0, 1 - dist / GLOW_RADIUS);

      tiles[i].style.setProperty('--intensity', intensity.toFixed(3));
      const r = lerp(BASE[0], GLOW[0], intensity);
      const g = lerp(BASE[1], GLOW[1], intensity);
      const b = lerp(BASE[2], GLOW[2], intensity);
      tiles[i].style.color = `rgb(${r},${g},${b})`;
    }
    rafId = requestAnimationFrame(updateGlow);
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function onMouseLeave() {
    mouseX = -9999;
    mouseY = -9999;
  }

  buildGrid();
  updateGlow();

  const landing = document.querySelector('.landing');
  if (landing) {
    landing.addEventListener('mousemove', onMouseMove);
    landing.addEventListener('mouseleave', onMouseLeave);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(rafId);
      buildGrid();
      updateGlow();
    }, 200);
  });
}

/* ===== Hide Spline watermark badge ===== */
function hideSplineBadge() {
  const viewer = document.querySelector('spline-viewer');
  if (!viewer) return;

  function tryHide() {
    const sr = viewer.shadowRoot;
    if (!sr) return;

    // Target #logo (common in older versions)
    const logo = sr.querySelector('#logo');
    if (logo) logo.remove();

    // Target any anchor linking to spline.design
    sr.querySelectorAll('a').forEach(a => {
      if (a.href && a.href.includes('spline')) a.remove();
    });

    // Target by common watermark class/attribute patterns
    sr.querySelectorAll('[class*="logo"], [class*="watermark"], [class*="badge"], [id*="logo"], [id*="watermark"]').forEach(el => {
      el.remove();
    });

    // Target images/svgs that might be the badge
    sr.querySelectorAll('img[src*="spline"], svg').forEach(el => {
      const parent = el.closest('a') || el.parentElement;
      if (parent && parent !== sr.host) {
        const rect = el.getBoundingClientRect();
        if (rect.width < 200 && rect.height < 60) parent.remove();
      }
    });

    // Target "Built with Spline" button/div at bottom
    sr.querySelectorAll('div, button, span').forEach(el => {
      if (el.textContent && el.textContent.includes('Built with') || el.textContent.includes('Spline')) {
        if (el.offsetHeight < 80 && el.offsetWidth < 250) el.remove();
      }
    });

    // Inject CSS to hide anything remaining at bottom-right
    if (!sr.querySelector('#spline-hide-style')) {
      const style = document.createElement('style');
      style.id = 'spline-hide-style';
      style.textContent = `
        #logo, a[href*="spline"], [class*="logo"], [class*="watermark"], [class*="badge"] {
          display: none !important;
        }
      `;
      sr.appendChild(style);
    }
  }

  // Retry aggressively — viewer takes time to fully render
  let attempts = 0;
  const interval = setInterval(() => {
    tryHide();
    if (++attempts > 60) clearInterval(interval);
  }, 250);

  // Also observe shadow root for dynamically added elements
  const checkShadow = setInterval(() => {
    const sr = viewer.shadowRoot;
    if (sr) {
      clearInterval(checkShadow);
      const observer = new MutationObserver(() => tryHide());
      observer.observe(sr, { childList: true, subtree: true });
    }
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  initBlurText();
  initHeroGrid();
  initShowcase();
  initExpTimeline();
  initFooterNameReveal();
  hideSplineBadge();
});
