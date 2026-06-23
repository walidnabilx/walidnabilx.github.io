const portfolioData = {
  en: {
    name: "Walid Nabil",
    title: "Software Engineer",
    loginGreeting: "Click to log in",
    bio: "Just a human who loves software engineering ♥️ — 11+ years building browser extensions, web apps, automation, and computer-vision tools. Based in Egypt, shipping small, sharp, honest software.",
    location: "Egypt",
    email: "wnmaghraby@gmail.com",
    github: "github.com/walidnabilx",
    stats: [
      { label: "Years Experience", value: 11 },
      { label: "Open-Source Projects", value: 3 },
      { label: "Technologies", value: 15 },
      { label: "Languages", value: 6 }
    ],
    services: [
      {
        icon: "🌐",
        title: "Web Development",
        desc: "Full-stack web applications with PHP/Laravel and Node.js — responsive front-ends and robust back-end architecture."
      },
      {
        icon: "🧩",
        title: "Browser Extensions",
        desc: "Cross-browser MV3 extensions (Chrome, Firefox) — network-first data capture, packaging, and store publishing."
      },
      {
        icon: "⚙️",
        title: "API Development",
        desc: "RESTful APIs, third-party integrations, payment gateways, and clean service architecture."
      },
      {
        icon: "🤖",
        title: "Automation & Bots",
        desc: "Telegram bots, scripts, and automation that streamline real workflows and remove busywork."
      },
      {
        icon: "👁️",
        title: "Computer Vision",
        desc: "Classical CV pipelines with OpenCV — detection, tracking, and evidence capture from video. No GPU required."
      },
      {
        icon: "🗄️",
        title: "Databases & DevOps",
        desc: "Schema design and query tuning (MySQL, PostgreSQL) plus deployment, servers, and CI."
      }
    ],
    skills: {
      os: "Ubuntu 24.04 LTS",
      host: "walidnabilx",
      kernel: "Software Engineer",
      uptime: "11 years",
      packages: "20 technologies",
      shell: "bash 5.2",
      languages: ["JavaScript", "TypeScript", "Python", "PHP", "Bash", "HTML/CSS"],
      frameworks: ["Node.js", "Express", "Laravel", "React", "Next.js"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      tools: ["Git", "Docker", "Linux", "Nginx", "OpenCV", "VS Code"],
      cloud: ["Vercel", "Firebase", "DigitalOcean", "AWS"]
    },
    experience: [
      {
        role: "Software Engineer",
        company: "Independent · Maghraby Systems",
        period: "2014 — Present",
        details: [
          "11+ years building production software — web apps, browser extensions, automation, and computer-vision tools",
          "Shipped ai2md to Firefox Add-ons and maintain open-source developer tooling on GitHub",
          "Deliver full-lifecycle client systems: back-end APIs, admin dashboards, and control panels (PHP/Laravel, Node.js)"
        ],
        tags: ["JavaScript", "Node.js", "PHP/Laravel", "Python"]
      }
    ],
    education: [
      {
        degree: "Computer Science & Self-Driven Learning",
        school: "Continuous, hands-on",
        period: "2014 — Present",
        details: "Eleven years of learning by shipping — across the full stack, from back-end systems and APIs to browser extensions and classical computer vision."
      }
    ],
    projects: [
      {
        name: "ai2md",
        desc: "Cross-browser extension that exports AI chats (ChatGPT) to Markdown, PDF, HTML & more — network-first, with full-context image/attachment embedding. Approved on Firefox Add-ons. github.com/walidnabilx/ai2md",
        tags: ["JavaScript", "Browser Extension", "MV3", "Node.js"],
        status: "Firefox Add-ons",
        icon: "🧩"
      },
      {
        name: "SmartVision",
        desc: "Classical computer-vision PoC detecting trash drops, wrong-way vehicles and pedestrian density from video, with annotated evidence clips. OpenCV, no GPU. github.com/walidnabilx/smartvision",
        tags: ["Python", "OpenCV", "Computer Vision"],
        status: "Open Source",
        icon: "👁️"
      },
      {
        name: "claude-statusline",
        desc: "Adaptive status line for Claude Code — model, context-window usage and rate-limit bars in one dependency-light Bash script. github.com/walidnabilx/claude-statusline",
        tags: ["Bash", "CLI", "Claude Code"],
        status: "Open Source",
        icon: "🖥️"
      },
      {
        name: "Portfolio OS",
        desc: "This very portfolio — an Ubuntu-themed interactive desktop, built with vanilla HTML/CSS/JS, bilingual EN/AR with full RTL. No build step.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "Live",
        icon: "💻"
      },
      {
        name: "Client Systems & Panels",
        desc: "Production web panels, dashboards, and back-office systems delivered for clients (private). Built with PHP/Laravel and Node.js.",
        tags: ["PHP/Laravel", "Node.js", "MySQL"],
        status: "Private",
        icon: "🗄️"
      }
    ],
    notes: [
      {
        title: "Honest tools",
        tag: "principle",
        text: "I build software that respects people's time and data — no dark patterns, no bloat. ai2md, for example, processes everything locally and collects nothing.",
        badge: "♥"
      },
      {
        title: "Small & sharp",
        tag: "principle",
        text: "I prefer small, well-tested tools that do one thing well over large, fragile ones. Tests and clear boundaries over cleverness.",
        badge: "✦"
      },
      {
        title: "Open by default",
        tag: "principle",
        text: "After 11+ years, I'm bringing my work into the open one project at a time — and helping the community where I can.",
        badge: "↗"
      }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/walidnabilx", icon: "github" },
      { label: "Twitter / X", url: "https://x.com/walidnabilx", icon: "twitter" },
      { label: "ai2md", url: "https://github.com/walidnabilx/ai2md", icon: "extension" },
      { label: "Email", url: "mailto:wnmaghraby@gmail.com", icon: "email" }
    ],
    terminalCommands: {
      help: "Available commands: whoami, skills, tools, projects, contact, neofetch, clear",
      whoami: "Walid Nabil — Software Engineer based in Egypt, 11+ years building software ♥️",
      contact: "Email: wnmaghraby@gmail.com | GitHub: github.com/walidnabilx | X: @walidnabilx",
      unknown: "Command not found. Type 'help' for available commands."
    }
  },
  ar: {
    name: "وليد نبيل",
    title: "مهندس برمجيات",
    loginGreeting: "اضغط لتسجيل الدخول",
    bio: "إنسان يحب هندسة البرمجيات ♥️ — أكثر من ١١ عامًا في بناء إضافات المتصفّح وتطبيقات الويب والأتمتة وأدوات الرؤية الحاسوبية. مقيم في مصر، أبني أدوات صغيرة ودقيقة وصادقة.",
    location: "مصر",
    email: "wnmaghraby@gmail.com",
    github: "github.com/walidnabilx",
    stats: [
      { label: "سنوات الخبرة", value: 11 },
      { label: "مشاريع مفتوحة المصدر", value: 3 },
      { label: "تقنية", value: 15 },
      { label: "لغات برمجة", value: 6 }
    ],
    services: [
      {
        icon: "🌐",
        title: "تطوير الويب",
        desc: "تطبيقات ويب متكاملة بـ PHP/Laravel و Node.js — واجهات متجاوبة وبنية خلفية قوية."
      },
      {
        icon: "🧩",
        title: "إضافات المتصفّح",
        desc: "إضافات MV3 متعددة المتصفّحات (Chrome وFirefox) — التقاط بيانات يعتمد على الشبكة، تغليف، ونشر في المتاجر."
      },
      {
        icon: "⚙️",
        title: "تطوير الـ APIs",
        desc: "واجهات RESTful، تكاملات طرف ثالث، بوابات دفع، وبنية خدمات نظيفة."
      },
      {
        icon: "🤖",
        title: "الأتمتة والبوتات",
        desc: "بوتات تيليجرام وسكريبتات وأتمتة تبسّط سير العمل الحقيقي وتزيل المهام المتكررة."
      },
      {
        icon: "👁️",
        title: "الرؤية الحاسوبية",
        desc: "مسارات رؤية حاسوبية تقليدية بـ OpenCV — كشف وتتبّع والتقاط أدلة من الفيديو. بدون GPU."
      },
      {
        icon: "🗄️",
        title: "قواعد البيانات و DevOps",
        desc: "تصميم المخططات وتحسين الاستعلامات (MySQL و PostgreSQL) إضافةً إلى النشر والخوادم والـ CI."
      }
    ],
    skills: {
      os: "Ubuntu 24.04 LTS",
      host: "walidnabilx",
      kernel: "مهندس برمجيات",
      uptime: "١١ سنة",
      packages: "٢٠ تقنية",
      shell: "bash 5.2",
      languages: ["JavaScript", "TypeScript", "Python", "PHP", "Bash", "HTML/CSS"],
      frameworks: ["Node.js", "Express", "Laravel", "React", "Next.js"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      tools: ["Git", "Docker", "Linux", "Nginx", "OpenCV", "VS Code"],
      cloud: ["Vercel", "Firebase", "DigitalOcean", "AWS"]
    },
    experience: [
      {
        role: "مهندس برمجيات",
        company: "مستقل · Maghraby Systems",
        period: "٢٠١٤ — الحالي",
        details: [
          "أكثر من ١١ عامًا في بناء برمجيات إنتاجية — تطبيقات ويب وإضافات متصفّح وأتمتة وأدوات رؤية حاسوبية",
          "نشرت ai2md على إضافات فايرفوكس وأطوّر أدوات مفتوحة المصدر على GitHub",
          "تسليم أنظمة عملاء كاملة: واجهات خلفية ولوحات تحكم ولوحات إدارة (PHP/Laravel و Node.js)"
        ],
        tags: ["JavaScript", "Node.js", "PHP/Laravel", "Python"]
      }
    ],
    education: [
      {
        degree: "علوم الحاسب وتعلّم ذاتي مستمر",
        school: "عملي ومستمر",
        period: "٢٠١٤ — الحالي",
        details: "أحد عشر عامًا من التعلّم عبر البناء — عبر الـ full stack، من الأنظمة الخلفية والـ APIs إلى إضافات المتصفّح والرؤية الحاسوبية التقليدية."
      }
    ],
    projects: [
      {
        name: "ai2md",
        desc: "إضافة متصفّح تصدّر محادثات الذكاء الاصطناعي (ChatGPT) إلى Markdown وPDF وHTML وغيرها — تعتمد على اعتراض الشبكة مع تضمين الصور والمرفقات كاملةً. معتمدة على إضافات فايرفوكس. github.com/walidnabilx/ai2md",
        tags: ["JavaScript", "إضافة متصفّح", "MV3", "Node.js"],
        status: "إضافات فايرفوكس",
        icon: "🧩"
      },
      {
        name: "SmartVision",
        desc: "نموذج رؤية حاسوبية تقليدية يكتشف إلقاء المخلّفات والمركبات المخالفة وكثافة المشاة من الفيديو، مع حفظ مقاطع دليلية. يعتمد على OpenCV بدون GPU. github.com/walidnabilx/smartvision",
        tags: ["Python", "OpenCV", "رؤية حاسوبية"],
        status: "مفتوح المصدر",
        icon: "👁️"
      },
      {
        name: "claude-statusline",
        desc: "شريط حالة تكيّفي لـ Claude Code — يعرض النموذج واستهلاك نافذة السياق وحدود الاستخدام في سكربت Bash خفيف. github.com/walidnabilx/claude-statusline",
        tags: ["Bash", "CLI", "Claude Code"],
        status: "مفتوح المصدر",
        icon: "🖥️"
      },
      {
        name: "Portfolio OS",
        desc: "هذا البورتفوليو — سطح مكتب أوبونتو تفاعلي مبني بـ HTML/CSS/JS خام، ثنائي اللغة EN/AR مع دعم RTL كامل. بدون خطوة بناء.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "مباشر",
        icon: "💻"
      },
      {
        name: "أنظمة ولوحات للعملاء",
        desc: "لوحات وأنظمة إدارة إنتاجية تم تسليمها لعملاء (خاصة). مبنية بـ PHP/Laravel و Node.js.",
        tags: ["PHP/Laravel", "Node.js", "MySQL"],
        status: "خاص",
        icon: "🗄️"
      }
    ],
    notes: [
      {
        title: "أدوات صادقة",
        tag: "مبدأ",
        text: "أبني برمجيات تحترم وقت الناس وبياناتهم — بلا أنماط خادعة ولا حشو. ai2md مثلًا يعالج كل شيء محليًا ولا يجمع أي بيانات.",
        badge: "♥"
      },
      {
        title: "صغيرة ودقيقة",
        tag: "مبدأ",
        text: "أفضّل الأدوات الصغيرة جيدة الاختبار التي تتقن مهمة واحدة على الأدوات الضخمة الهشّة. اختبارات وحدود واضحة قبل الاستعراض.",
        badge: "✦"
      },
      {
        title: "مفتوح بشكل افتراضي",
        tag: "مبدأ",
        text: "بعد أكثر من ١١ عامًا، أنقل عملي إلى العلن مشروعًا تلو الآخر — وأساعد المجتمع حيثما أستطيع.",
        badge: "↗"
      }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/walidnabilx", icon: "github" },
      { label: "Twitter / X", url: "https://x.com/walidnabilx", icon: "twitter" },
      { label: "ai2md", url: "https://github.com/walidnabilx/ai2md", icon: "extension" },
      { label: "البريد الإلكتروني", url: "mailto:wnmaghraby@gmail.com", icon: "email" }
    ],
    terminalCommands: {
      help: "الأوامر المتاحة: whoami, skills, tools, projects, contact, neofetch, clear",
      whoami: "وليد نبيل — مهندس برمجيات مقيم في مصر، أكثر من ١١ عامًا في بناء البرمجيات ♥️",
      contact: "البريد: wnmaghraby@gmail.com | GitHub: github.com/walidnabilx | X: @walidnabilx",
      unknown: "الأمر غير موجود. اكتب 'help' للأوامر المتاحة."
    }
  }
};
