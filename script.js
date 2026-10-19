// Dilochini Senanayake - Portfolio Script

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      const isOpen = sidebar.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen);
      menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when clicking outside on mobile
    document.addEventListener("click", (e) => {
      if (
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        sidebar.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });

    // Close menu on nav item click
    sidebar.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (sidebar.classList.contains("open")) {
          sidebar.classList.remove("open");
          menuBtn.setAttribute("aria-expanded", "false");
          menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
      });
    });
  }

  // 3. Typing Animation in Hero
  const typedEl = document.getElementById("typed");
  if (typedEl) {
    const words = [
      "robust web apps.",
      "scalable software.",
      "IoT disaster solutions.",
      "clean, reliable code.",
      "smart user experiences."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const backSpeed = 50;
    const delayBetweenWords = 1800;

    function type() {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        typedEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeout = isDeleting ? backSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        timeout = delayBetweenWords;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeout = 400;
      }

      setTimeout(type, timeout);
    }
    type();
  }

  // 4. Sidebar Circular Rings
  const ringsEl = document.getElementById("rings");
  if (ringsEl) {
    const ringData = [
      { label: "Software", pct: 90 },
      { label: "Frontend", pct: 85 },
      { label: "English", pct: 95 }
    ];
    const r = 26;
    const circ = 2 * Math.PI * r;

    ringsEl.innerHTML = ringData
      .map((item) => {
        const offset = circ - (item.pct / 100) * circ;
        return `
        <div class="ring">
          <div class="wrap">
            <svg viewBox="0 0 62 62">
              <circle class="bg" cx="31" cy="31" r="${r}"></circle>
              <circle class="fg" cx="31" cy="31" r="${r}" style="stroke-dasharray: ${circ}; stroke-dashoffset: ${offset};"></circle>
            </svg>
            <div class="pct">${item.pct}%</div>
          </div>
          <div>${item.label}</div>
        </div>
      `;
      })
      .join("");
  }

  // 5. Sidebar Skill Bars
  const sideBarsEl = document.getElementById("sideBars");
  if (sideBarsEl) {
    const barData = [
      { name: "Java & OOP", pct: 88 },
      { name: "Python", pct: 82 },
      { name: "JavaScript / Web", pct: 85 },
      { name: "SQL & Databases", pct: 80 }
    ];

    sideBarsEl.innerHTML = barData
      .map(
        (b) => `
      <div class="bar">
        <div><span>${b.name}</span><span>${b.pct}%</span></div>
        <div class="track"><div class="fill" style="width: ${b.pct}%"></div></div>
      </div>
    `
      )
      .join("");
  }

  // 6. Highlight Active Nav Item on Scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".sidebar .nav a");

  function updateNav() {
    const scrollY = window.pageYOffset;
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      }
    });
  }
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();

  // 7. Stats Section
  const statsEl = document.getElementById("stats");
  if (statsEl) {
    const statsData = [
      { val: "3+", label: "Years Undergrad" },
      { val: "3+", label: "Academic Projects" },
      { val: "10+", label: "Technologies" },
      { val: "100%", label: "Dedication" }
    ];
    statsEl.innerHTML = statsData
      .map(
        (s) => `
      <div class="stat">
        <b>${s.val}</b>
        <span>${s.label}</span>
      </div>
    `
      )
      .join("");
  }

  // 8. Education Timeline
  const timelineEl = document.getElementById("timeline");
  if (timelineEl) {
    const educationData = [
      {
        title: "BSc (Hons) in IT (Software Engineering)",
        org: "Sri Lanka Technology Campus (SLTC)",
        when: "2023 – Present",
        desc: "Core modules in Software Architecture, Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Web Engineering, and IoT Systems."
      },
      {
        title: "Diploma in Law",
        org: "SW Law Education",
        when: "2026",
        desc: "Foundations in legal principles, ethics, intellectual property, and analytical reasoning."
      },
      {
        title: "Diploma in Psychology & Counselling",
        org: "LPEC Campus",
        when: "2025",
        desc: "Human behavior insights, empathetic communication, active listening, and mental health awareness."
      },
      {
        title: "Diploma in Advanced English",
        org: "National Institute of Business Management (NIBM)",
        when: "2023",
        desc: "Advanced professional writing, business communication, presentation skills, and public speaking."
      }
    ];

    timelineEl.innerHTML = educationData
      .map(
        (item) => `
      <li>
        <div class="when">${item.when}</div>
        <h3>${item.title}</h3>
        <p class="muted">${item.org}</p>
        <p>${item.desc}</p>
      </li>
    `
      )
      .join("");
  }

  // 9. Academic Projects Grid
  const projectGrid = document.getElementById("projectGrid");
  if (projectGrid) {
    const projects = [
      {
        title: "LoRa Mesh Network Disaster Monitoring System",
        role: "Research Project / System Developer",
        desc: "Engineered a resilient mesh network communication system for real-time sensor data transmission and hazard alerts in remote, disaster-prone areas without cellular infrastructure.",
        tags: ["LoRa", "IoT", "Python", "C++", "Sensors", "Mesh Networks"]
      },
      {
        title: "AI Resume Analyzer",
        role: "Frontend Developer",
        desc: "Developed an interactive web tool that extracts and parses resume content, matches skills against job requisitions, and generates intelligent feedback for job seekers.",
        tags: ["JavaScript", "HTML5", "CSS3", "AI API", "UI/UX"]
      },
      {
        title: "Online Shop Management System",
        role: "Full-Stack Developer",
        desc: "Built a structured e-commerce application implementing MVC architecture with user authentication, catalog browsing, shopping cart workflow, and inventory management.",
        tags: ["Java", "OOP", "MySQL", "JDBC", "Desktop UI"]
      }
    ];

    projectGrid.innerHTML = projects
      .map(
        (p) => `
      <div class="card project">
        <h3>${p.title}</h3>
        <div class="role">${p.role}</div>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // 10. Technical Skills Grid
  const skillGrid = document.getElementById("skillGrid");
  if (skillGrid) {
    const skillCategories = [
      {
        category: "Programming Languages",
        skills: ["Java", "Python", "JavaScript", "SQL"]
      },
      {
        category: "Frontend & Web",
        skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"]
      },
      {
        category: "Databases",
        skills: ["MySQL", "MongoDB", "Database Design", "Relational Modeling"]
      },
      {
        category: "Tools, Version Control & IDEs",
        skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "NetBeans", "Android Studio"]
      }
    ];

    skillGrid.innerHTML = skillCategories
      .map(
        (cat) => `
      <div class="card skillcat">
        <h3>${cat.category}</h3>
        <div class="chips">
          ${cat.skills.map((s) => `<span>${s}</span>`).join("")}
        </div>
      </div>
    `
      )
      .join("");
  }

  // 11. Soft Skills Chips
  const softSkillsEl = document.getElementById("softSkills");
  if (softSkillsEl) {
    const softSkills = [
      "Communication Skills",
      "Critical Thinking",
      "Team Collaboration",
      "Research & Analytical Skills",
      "Time Management",
      "Attention to Detail",
      "Quick Learning",
      "Problem Solving",
      "Adaptability"
    ];
    softSkillsEl.innerHTML = softSkills
      .map((s) => `<span>${s}</span>`)
      .join("");
  }

  // 12. Contact Form Handler (mailto fallback)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // If action is configured for Formspree, let it submit normally
      if (contactForm.getAttribute("action")) return;

      e.preventDefault();
      const name = document.getElementById("name")?.value || "";
      const email = document.getElementById("email")?.value || "";
      const msg = document.getElementById("msg")?.value || "";

      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hi Dilochini,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`
      );

      window.location.href = `mailto:shanunadee.sd@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // 13. Scroll Reveal Animations
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    reveals.forEach((el) => el.classList.add("show"));
  }
});
