const portfolioData = {
  en: {
    name: "Walid Nabil",
    title: "Software Developer",
    loginGreeting: "Click to log in",
    bio: "Passionate software developer with a focus on building clean, efficient, and user-friendly applications. Based in Egypt, I specialize in crafting modern web experiences and solving real-world problems through code.",
    location: "Egypt",
    email: "walid@example.com",
    github: "github.com/walid-nabil",
    stats: [
      { label: "Projects Delivered", value: 12 },
      { label: "Years Experience", value: 3 },
      { label: "Technologies", value: 15 },
      { label: "Happy Clients", value: 8 }
    ],
    services: [
      {
        icon: "🌐",
        title: "Web Development",
        desc: "Full-stack web applications with modern frameworks, responsive design, and robust backend architecture."
      },
      {
        icon: "📱",
        title: "Mobile Development",
        desc: "Cross-platform mobile apps with smooth performance and native-quality user experience."
      },
      {
        icon: "⚙️",
        title: "API Development",
        desc: "RESTful APIs, third-party integrations, payment gateways, and microservices architecture."
      },
      {
        icon: "🤖",
        title: "Automation & Bots",
        desc: "Intelligent bots and automation scripts to streamline workflows and boost productivity."
      },
      {
        icon: "🗄️",
        title: "Database Design",
        desc: "Efficient database schemas, query optimization, and data modeling for scalable applications."
      },
      {
        icon: "☁️",
        title: "DevOps & Deployment",
        desc: "CI/CD pipelines, containerization, cloud infrastructure, and server management."
      }
    ],
    skills: {
      os: "Ubuntu 24.04 LTS",
      host: "Walid Nabil",
      kernel: "Full-Stack Developer",
      uptime: "3 years",
      packages: "15 technologies",
      shell: "bash 5.2",
      languages: ["JavaScript", "TypeScript", "Python", "PHP", "HTML/CSS"],
      frameworks: ["React", "Node.js", "Express", "Next.js", "Laravel"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git", "Docker", "VS Code", "Linux", "Nginx", "Postman"],
      cloud: ["DigitalOcean", "AWS", "Firebase", "Vercel"]
    },
    experience: [
      {
        role: "Full-Stack Developer",
        company: "Freelance",
        period: "2023 — Present",
        details: [
          "Built and delivered multiple production-ready web applications for clients across the MENA region",
          "Developed RESTful APIs, admin dashboards, and real-time features using Node.js and React",
          "Managed full project lifecycle from requirements gathering to deployment and post-launch support"
        ],
        tags: ["Node.js", "React", "MongoDB", "Express"]
      },
      {
        role: "Junior Developer",
        company: "Tech Startup",
        period: "2022 — 2023",
        details: [
          "Contributed to frontend and backend features for the company's SaaS platform",
          "Implemented responsive UI components and integrated third-party APIs",
          "Participated in code reviews and agile development processes"
        ],
        tags: ["JavaScript", "PHP", "MySQL", "Git"]
      }
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        school: "Faculty of Computers & Information",
        period: "2020 — 2024",
        details: "Studied algorithms, data structures, software engineering, databases, and networking."
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
        name: "E-Commerce Platform",
        desc: "Full-stack online store with product management, cart system, payment integration, and admin dashboard.",
        tags: ["Node.js", "React", "MongoDB", "Stripe"],
        status: "Delivered",
        icon: "🛒"
      },
      {
        name: "Task Management App",
        desc: "Real-time collaborative task board with drag-and-drop, assignments, and notifications.",
        tags: ["Next.js", "Socket.io", "PostgreSQL"],
        status: "Delivered",
        icon: "📋"
      },
      {
        name: "Portfolio OS",
        desc: "This very portfolio — an Ubuntu-themed interactive desktop experience built with vanilla JS.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "Live",
        icon: "💻"
      },
      {
        name: "Chat Application",
        desc: "Real-time messaging app with rooms, file sharing, and read receipts.",
        tags: ["Node.js", "Socket.io", "React", "Redis"],
        status: "Delivered",
        icon: "💬"
      },
      {
        name: "Blog CMS",
        desc: "Content management system with markdown editor, categories, SEO optimization, and analytics.",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        status: "Delivered",
        icon: "📝"
      },
      {
        name: "Weather Dashboard",
        desc: "Beautiful weather app with location detection, forecasts, and animated weather icons.",
        tags: ["React", "OpenWeather API", "CSS"],
        status: "Open Source",
        icon: "🌤️"
      }
    ],
    reviews: [
      {
        text: "Walid delivered an exceptional e-commerce platform that exceeded our expectations. Clean code, great communication, and on-time delivery. Highly recommended!",
        name: "Ahmed Hassan",
        project: "E-Commerce Platform",
        initials: "AH"
      },
      {
        text: "Working with Walid was a pleasure. He understood our requirements perfectly and built a robust task management system. His attention to detail is outstanding.",
        name: "Sarah Ibrahim",
        project: "Task Management App",
        initials: "SI"
      },
      {
        text: "Professional, responsive, and talented. Walid built our blog CMS from scratch and it runs flawlessly. We continue to work with him on new features.",
        name: "Omar Khalil",
        project: "Blog CMS",
        initials: "OK"
      }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/walid-nabil", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/walid-nabil", icon: "linkedin" },
      { label: "Twitter / X", url: "https://x.com/walid_nabil", icon: "twitter" },
      { label: "Email", url: "mailto:walid@example.com", icon: "email" }
    ],
    terminalCommands: {
      help: "Available commands: whoami, skills, tools, projects, contact, neofetch, clear",
      whoami: "Walid Nabil — Full-Stack Developer based in Egypt",
      contact: "Email: walid@example.com | GitHub: github.com/walid-nabil",
      unknown: "Command not found. Type 'help' for available commands."
    }
  },
  ar: {
    name: "وليد نبيل",
    title: "مطور برمجيات",
    loginGreeting: "اضغط لتسجيل الدخول",
    bio: "مطور برمجيات شغوف بالتركيز على بناء تطبيقات نظيفة وفعّالة وسهلة الاستخدام. مقيم في مصر، متخصص في تطوير تجارب ويب حديثة وحل المشاكل الحقيقية من خلال البرمجة.",
    location: "مصر",
    email: "walid@example.com",
    github: "github.com/walid-nabil",
    stats: [
      { label: "مشروع تم تسليمه", value: 12 },
      { label: "سنوات خبرة", value: 3 },
      { label: "تقنية", value: 15 },
      { label: "عملاء سعداء", value: 8 }
    ],
    services: [
      {
        icon: "🌐",
        title: "تطوير الويب",
        desc: "تطبيقات ويب متكاملة بأطر عمل حديثة وتصميم متجاوب وبنية خلفية قوية."
      },
      {
        icon: "📱",
        title: "تطوير الموبايل",
        desc: "تطبيقات موبايل متعددة المنصات بأداء سلس وتجربة مستخدم عالية الجودة."
      },
      {
        icon: "⚙️",
        title: "تطوير الـ APIs",
        desc: "واجهات RESTful، تكاملات طرف ثالث، بوابات دفع، وبنية خدمات مصغرة."
      },
      {
        icon: "🤖",
        title: "الأتمتة والبوتات",
        desc: "بوتات ذكية وسكريبتات أتمتة لتبسيط سير العمل وزيادة الإنتاجية."
      },
      {
        icon: "🗄️",
        title: "تصميم قواعد البيانات",
        desc: "مخططات قواعد بيانات فعّالة، تحسين الاستعلامات، ونمذجة البيانات لتطبيقات قابلة للتوسع."
      },
      {
        icon: "☁️",
        title: "DevOps والنشر",
        desc: "خطوط CI/CD، حاويات، بنية سحابية، وإدارة الخوادم."
      }
    ],
    skills: {
      os: "Ubuntu 24.04 LTS",
      host: "وليد نبيل",
      kernel: "مطور متكامل",
      uptime: "٣ سنوات",
      packages: "١٥ تقنية",
      shell: "bash 5.2",
      languages: ["JavaScript", "TypeScript", "Python", "PHP", "HTML/CSS"],
      frameworks: ["React", "Node.js", "Express", "Next.js", "Laravel"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      tools: ["Git", "Docker", "VS Code", "Linux", "Nginx", "Postman"],
      cloud: ["DigitalOcean", "AWS", "Firebase", "Vercel"]
    },
    experience: [
      {
        role: "مطور متكامل",
        company: "عمل حر",
        period: "٢٠٢٣ — الحالي",
        details: [
          "بناء وتسليم عدة تطبيقات ويب جاهزة للإنتاج لعملاء في منطقة الشرق الأوسط",
          "تطوير واجهات RESTful ولوحات تحكم وميزات لحظية باستخدام Node.js و React",
          "إدارة دورة حياة المشروع الكاملة من جمع المتطلبات إلى النشر والدعم"
        ],
        tags: ["Node.js", "React", "MongoDB", "Express"]
      },
      {
        role: "مطور مبتدئ",
        company: "شركة ناشئة",
        period: "٢٠٢٢ — ٢٠٢٣",
        details: [
          "المساهمة في ميزات الفرونت والباك لمنصة SaaS الخاصة بالشركة",
          "تنفيذ مكونات واجهة متجاوبة وتكامل APIs خارجية",
          "المشاركة في مراجعات الكود وعمليات التطوير المرنة"
        ],
        tags: ["JavaScript", "PHP", "MySQL", "Git"]
      }
    ],
    education: [
      {
        degree: "بكالوريوس علوم الحاسب",
        school: "كلية الحاسبات والمعلومات",
        period: "٢٠٢٠ — ٢٠٢٤",
        details: "دراسة الخوارزميات وهياكل البيانات وهندسة البرمجيات وقواعد البيانات والشبكات."
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
        name: "منصة تجارة إلكترونية",
        desc: "متجر إلكتروني متكامل مع إدارة المنتجات وسلة المشتريات وتكامل الدفع ولوحة تحكم.",
        tags: ["Node.js", "React", "MongoDB", "Stripe"],
        status: "تم التسليم",
        icon: "🛒"
      },
      {
        name: "تطبيق إدارة المهام",
        desc: "لوحة مهام تعاونية لحظية مع السحب والإفلات والتعيينات والإشعارات.",
        tags: ["Next.js", "Socket.io", "PostgreSQL"],
        status: "تم التسليم",
        icon: "📋"
      },
      {
        name: "Portfolio OS",
        desc: "هذا البورتفوليو — تجربة سطح مكتب أوبونتو تفاعلية مبنية بـ JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        status: "مباشر",
        icon: "💻"
      },
      {
        name: "تطبيق محادثة",
        desc: "تطبيق مراسلة لحظي مع غرف ومشاركة ملفات وتأكيد القراءة.",
        tags: ["Node.js", "Socket.io", "React", "Redis"],
        status: "تم التسليم",
        icon: "💬"
      },
      {
        name: "نظام إدارة محتوى",
        desc: "نظام إدارة محتوى مع محرر ماركداون وتصنيفات وتحسين SEO وتحليلات.",
        tags: ["Laravel", "MySQL", "Tailwind CSS"],
        status: "تم التسليم",
        icon: "📝"
      },
      {
        name: "لوحة الطقس",
        desc: "تطبيق طقس جميل مع كشف الموقع والتوقعات وأيقونات طقس متحركة.",
        tags: ["React", "OpenWeather API", "CSS"],
        status: "مفتوح المصدر",
        icon: "🌤️"
      }
    ],
    reviews: [
      {
        text: "وليد سلّم منصة تجارة إلكترونية استثنائية فاقت توقعاتنا. كود نظيف وتواصل ممتاز وتسليم في الوقت المحدد. أنصح به بشدة!",
        name: "أحمد حسن",
        project: "منصة تجارة إلكترونية",
        initials: "أح"
      },
      {
        text: "العمل مع وليد كان ممتع. فهم متطلباتنا بشكل مثالي وبنى نظام إدارة مهام متين. اهتمامه بالتفاصيل مميز.",
        name: "سارة إبراهيم",
        project: "تطبيق إدارة المهام",
        initials: "سإ"
      },
      {
        text: "محترف وسريع الاستجابة وموهوب. وليد بنى نظام إدارة المحتوى من الصفر وهو يعمل بشكل ممتاز. نستمر في العمل معه على ميزات جديدة.",
        name: "عمر خليل",
        project: "نظام إدارة محتوى",
        initials: "عخ"
      }
    ],
    links: [
      { label: "GitHub", url: "https://github.com/walid-nabil", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/walid-nabil", icon: "linkedin" },
      { label: "Twitter / X", url: "https://x.com/walid_nabil", icon: "twitter" },
      { label: "البريد الإلكتروني", url: "mailto:walid@example.com", icon: "email" }
    ],
    terminalCommands: {
      help: "الأوامر المتاحة: whoami, skills, tools, projects, contact, neofetch, clear",
      whoami: "وليد نبيل — مطور متكامل مقيم في مصر",
      contact: "البريد: walid@example.com | GitHub: github.com/walid-nabil",
      unknown: "الأمر غير موجود. اكتب 'help' للأوامر المتاحة."
    }
  }
};
