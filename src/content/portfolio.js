/**
 * portfolio.js
 * Single source of truth for all content, text strings, and metadata across the portfolio.
 * Placeholders marked [TODO: ...] for easy user customization.
 */
export const portfolio = {
  /* ─── Identity ─────────────────────────────────────────── */
  identity: {
    // [TODO: your first name, lowercase, e.g., 'ahmed']
    brandTag: 'haythem',
    // [TODO: Your full legal or professional name]
    name: 'Haythem Chabbeh',
    // [TODO: Path to profile photo in public folder]
    photo: '/photo.jpg',
    // [TODO: Meaningful alt text for profile photo]
    photoAlt: 'Portrait of Haythem Chabbeh',
    // [TODO: Your primary professional title / academic focus]
    title: 'Computer Science & IoT Student',
    // [TODO: Single sentence positioning statement]
    positioning: 'Building practical web, IoT, and software solutions',
    // [TODO: Short biographical summary (1-2 sentences)]
    bio: 'I am a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse, Tunisia, passionate about software development, modern web technologies, and connected systems. I enjoy turning ideas into practical, user-friendly digital solutions while continuously improving my technical skills.',
    // [TODO: Your city and country]
    location: 'Sousse, Tunisia',
    // [TODO: Your local timezone (e.g. Africa/Tunis, GMT+1)]
    timezone: 'GMT+1',
    // [TODO: Your primary contact email address - never rendered as raw page text]
    email: 'chabbeh.haythem@gmail.com',
    // [TODO: Your current professional availability status]
    status: 'Open to internships and collaboration',
    // [TODO: Optional expiration date for availability status (ISO 8601 string, e.g. '2026-12-31')]
    availableUntil: '',
  },

  /* ─── Social Links ─────────────────────────────────────── */
  socialLinks: {
    github: 'https://github.com/Hi-THEM',
    linkedin: 'https://linkedin.com/in/haythem-chabbeh',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    other: {
      label: 'Portfolio',
      url: '',
    },
  },

  /* ─── Education ────────────────────────────────────────── */
  education: {
    sectionLabel: '02 \u2014 Education',
    sectionTitle: 'Academic Background',
    present: {
      tag: 'Higher Education',
      status: 'Current Studies (In Progress)',
      degree: 'Computer Science & IoT',
      institution:
        'Higher Institute of Computer Science and Communication Technologies of Sousse (ISSAT)',
      period: '2024 – Present',
      location: 'Sousse, Tunisia',
      courseworkLabel: 'Core Coursework',
      coursework: [
        'Internet of Things (IoT)',
        'Web Development',
        'Programming',
        'Database Systems',
        'Computer Networks',
        'Software Engineering',
      ],
    },
    bac: {
      tag: 'Secondary Education',
      status: 'Graduated / Completed',
      degree: 'Baccalaureate in Mathematics',
      institution: 'Tunisian Ministry of Education',
      period: '2024',
      location: 'Tunisia',
      focusLabel: 'Academic Foundation',
      focus:
        'Rigorous mathematical analysis, algorithmic thinking, physics, and scientific problem-solving.',
    },
    // Backwards compatibility aliases
    degree: 'Computer Science & IoT',
    university:
      'Higher Institute of Computer Science and Communication Technologies of Sousse',
    period: '2024 – Present',
    courseworkLabel: 'Relevant Coursework',
    coursework: [
      'Internet of Things (IoT)',
      'Web Development',
      'Programming',
      'Database Systems',
      'Computer Networks',
      'Software Engineering',
    ],
    previousEducationLabel: 'Secondary Education',
    previousEducation: [
      {
        degree: 'Baccalaureate in Mathematics',
        institution: 'Tunisia',
        period: '2024',
      },
    ],
  },

  /* ─── Hero Section ─────────────────────────────────────── */
  hero: {
    // [TODO: Hero headline prefix]
    headline: 'Building',
    // [TODO: Hero highlighted accent word / phrase]
    headlineAccent: 'Digital Solutions',
    // [TODO: Hero headline conclusion]
    headlineEnd: 'with Code & Technology',
    // [TODO: Cycling phrases for animated hero badge]
    cyclingPhrases: [
      'Digital Solutions',
      'Modern Web Apps',
      'Connected IoT Systems',
      'Practical Software',
    ],
    // [TODO: Subheadline elevator pitch]
    subheadline:
      'Computer Science and IoT student passionate about building modern web applications, connected systems, and practical software solutions.',
    // [TODO: Primary CTA button text]
    primaryCta: 'See My Projects',
    // [TODO: Secondary CTA button text]
    secondaryCta: 'Contact Me',
    // [TODO: High-level metric highlights]
    metrics: [
      { value: 3, suffix: '+', label: 'Shipped Projects' },
      { value: 6, suffix: '+', label: 'Core Technologies' },
      { value: 100, suffix: '%', label: 'Commitment to Quality' },
    ],
  },

  /* ─── About Section ────────────────────────────────────── */
  about: {
    sectionLabel: '01 \u2014 About',
    sectionTitle: 'Who I Am',
    // [TODO: Exactly 3 paragraphs highlighting background, engineering approach, and goals]
    paragraphs: [
      'I am Haythem Chabbeh, a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse. My interest in technology started with programming and gradually grew into a passion for software development, IoT, networking, and modern digital solutions.',
      'I enjoy learning by building real projects. My approach is focused on writing clean and understandable code, creating practical user experiences, and continuously improving both my technical and problem-solving skills.',
      'I am currently looking for opportunities to gain professional experience, particularly in software development, IoT, embedded systems, and related technology fields. I am also interested in collaborating on projects that allow me to learn and contribute.',
    ],
    currentlyLabel: 'Currently Learning:',
    // [TODO: One-line summary of skills actively being developed]
    currently:
      'Developing skills in React, TypeScript, PHP, databases, Git, Linux, IoT, and software development.',
  },

  /* ─── Skills Section ───────────────────────────────────── */
  skills: {
    sectionLabel: '03 \u2014 Skills',
    sectionTitle: 'My Toolbox',
    coreTitle: 'Core Stack',
    coreIcon: 'code',
    // [TODO: Technical skills you work with comfortably]
    core: [
      'JavaScript',
      'React',
      'HTML & CSS',
      'PHP',
      'Python',
      'C',
      'SQL',
      'Git & GitHub',
    ],
    learningTitle: 'Currently Learning',
    learningIcon: 'cpu',
    // [TODO: Emerging frameworks / technologies you are mastering]
    learning: [
      'TypeScript',
      'Next.js',
      'IoT Development',
      'Embedded Systems',
      'REST APIs',
      'MySQL',
    ],
    toolsTitle: 'Tools & Platforms',
    toolsIcon: 'wrench',
    // [TODO: Developer tools, platforms, and operating systems]
    tools: [
      'VS Code',
      'GitHub',
      'Linux',
      'XAMPP',
      'Cisco Networking',
      'Figma',
    ],
  },

  /* ─── Soft Skills Section (Task 2 & Task 3: Exactly 6, Lucide icons, NO emoji) ─ */
  softSkills: {
    sectionLabel: '04 \u2014 Work Ethic',
    sectionTitle: 'How I Work',
    sectionSubtitle:
      'Interpersonal skills and professional habits developed through team projects, academic labs, and hands-on software development.',
    // [TODO: Exactly 6 soft skills with name + one-line evidence/description + Lucide icon string]
    items: [
      {
        name: 'Technical Communication',
        evidence:
          'Clearly presented IoT system architectures and database schemas to multidisciplinary peers and faculty during project milestones.',
        icon: 'message-square',
      },
      {
        name: 'Collaborative Problem-Solving',
        evidence:
          'Actively participated in peer code reviews and collaborative debugging sessions to resolve complex relational queries and UI states.',
        icon: 'users',
      },
      {
        name: 'Autonomous Learning',
        evidence:
          'Independently researched and mastered React component lifecycle patterns, modern CSS layouts, and REST integration beyond coursework.',
        icon: 'rocket',
      },
      {
        name: 'Code Quality & Discipline',
        evidence:
          'Maintained zero-warning lint standards, consistent naming conventions, and modular component structures across every repository.',
        icon: 'target',
      },
      {
        name: 'Milestone & Time Management',
        evidence:
          'Shipped multi-stage student project deadlines punctually while balancing rigorous Computer Science and IoT coursework.',
        icon: 'clock',
      },
      {
        name: 'Curiosity & Adaptability',
        evidence:
          'Comfortably transitioned between foundational C/Python algorithm programming and modern full-stack web and embedded ecosystems.',
        icon: 'lightbulb',
      },
    ],
  },

  /* ─── Projects Section ─────────────────────────────────── */
  projects: {
    sectionLabel: '05 \u2014 Projects',
    sectionTitle: "Things I've Built",
    learnedLabel: 'What I learned:',
    liveDemoLabel: 'Live Demo',
    githubLabel: 'GitHub',
    // [TODO: Array of exactly 3 featured projects]
    items: [
      {
        // [TODO: Project 1 Name]
        name: 'FitTrack',
        // [TODO: One-line hook]
        hook: 'A web platform for personalized fitness and wellness tracking',
        // [TODO: Problem and technical solution description]
        problem:
          'FitTrack is a fitness and wellness web project designed to provide users with personalized recommendations based on metrics such as weight, height, age, activity level, and targets. It organizes exercise and meal plans, progress tracking, and personal metrics via an intuitive dashboard.',
        // [TODO: Tech tags]
        builtWith: ['React', 'JavaScript', 'HTML & CSS', 'Database', 'Git'],
        // [TODO: What you learned on this project]
        learned:
          'Mastered user state management, personalized recommendation calculations, responsive dashboard visualizations, and building accessible UI workflows.',
        // [TODO: Live URL (leave empty if not deployed yet - link will automatically hide)]
        liveUrl: '',
        // GitHub repository URL — opens directly on project click
        githubUrl: 'https://github.com/Hi-THEM/my_work/tree/main/pfa-projet',
      },
      {
        // [TODO: Project 2 Name]
        name: 'Inventory Pro',
        // [TODO: One-line hook]
        hook: 'A modern web-based inventory management system',
        // [TODO: Problem and technical solution description]
        problem:
          'Inventory Pro is a stock management project designed to streamline product tracking and stock operations through a clean interface. The system combines a responsive frontend with PHP, MySQL, session authentication, and backend API endpoints.',
        // [TODO: Tech tags]
        builtWith: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
        // [TODO: What you learned on this project]
        learned:
          'Architected secure CRUD operations, session authentication, relational schema normalization, and frontend-to-backend API communication.',
        // [TODO: Live URL]
        liveUrl: '',
        // GitHub repository URL — opens directly on project click
        githubUrl: 'https://github.com/Hi-THEM/my_work',
      },
      {
        // [TODO: Project 3 Name]
        name: 'Amusement Park Workforce Scheduler',
        // [TODO: One-line hook]
        hook: 'A weekly employee scheduling and attendance management system',
        // [TODO: Problem and technical solution description]
        problem:
          'A web-based system designed to help an amusement park coordinate weekly employee shifts, role-based workplace assignments, supervisor verification, and attendance status tracking across multiple park zones.',
        // [TODO: Tech tags]
        builtWith: ['React', 'JavaScript', 'HTML & CSS', 'Database', 'Git'],
        // [TODO: What you learned on this project]
        learned:
          'Explored role-based permission boundaries, scheduling conflict detection algorithms, modular component architecture, and operational business workflows.',
        // [TODO: Live URL]
        liveUrl: '',
        // GitHub repository URL — opens directly on project click
        githubUrl: 'https://github.com/Hi-THEM/my_work',
      },
    ],
  },

  /* ─── Contact Section (Executive-Grade & Direct) ───────── */
  contact: {
    sectionLabel: '06 \u2014 Contact',
    heading: "Let's Connect",
    subtitle:
      "I'm always interested in new opportunities, internships, collaborations, and interesting technology projects. Connect with me directly on any of the platforms below.",
    responseTimePromise: 'Replies within 24 hours',

    methods: [
      {
        id: 'github',
        label: 'GitHub',
        value: 'github.com/Hi-THEM',
        url: 'https://github.com/Hi-THEM',
        icon: 'github',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/haythem-chabbeh',
        url: 'https://linkedin.com/in/haythem-chabbeh',
        icon: 'linkedin',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        value: 'facebook.com',
        url: 'https://facebook.com',
        icon: 'facebook',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        value: 'instagram.com',
        url: 'https://instagram.com',
        icon: 'instagram',
      },
      {
        id: 'email',
        label: 'Direct Email',
        value: 'chabbeh.haythem@gmail.com',
        url: 'mailto:chabbeh.haythem@gmail.com',
        icon: 'mail',
      },
    ],

    // [TODO: Form field configuration and validation labels]
    form: {
      heading: 'Send a message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      subjectMax: 120,
      messageLabel: 'Message',
      messagePlaceholder: 'Your message…',
      messageMax: 1000,
      submitLabel: 'Send Message',
      submittingLabel: 'Sending…',
      successMessage: 'Message sent successfully! I will get back to you soon.',
      errorMessage: 'Failed to send message. Please try again or reach out via direct email.',
      validation: {
        nameRequired: 'Name is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Please enter a valid email address.',
        subjectRequired: 'Subject is required.',
        subjectTooLong: 'Subject cannot exceed 120 characters.',
        messageRequired: 'Message is required.',
        messageTooLong: 'Message cannot exceed 1000 characters.',
      },
    },

    // UI Action labels
    copyEmailLabel: 'Copy email address',
    copiedEmailLabel: 'Email Copied!',
    openMailAppLabel: 'Open in mail app',
  },

  /* ─── Footer ───────────────────────────────────────────── */
  footer: {
    tagline: 'Built with React, curiosity, and a lot of coffee.',
    backToTopLabel: 'Back to top',
    rights: 'All rights reserved.',
  },

  /* ─── Navbar ───────────────────────────────────────────── */
  nav: {
    brand: 'HC',
    brandBadge: 'STUDENT',
    ctaLabel: "Let's talk",
    skipToContent: 'Skip to main content',
    sousseLocation: 'Sousse, TN',
    sousseTimeLabel: 'Local time in Sousse, Tunisia',
    toggleMenuAria: 'Toggle navigation menu',
    links: [
      { label: 'About', sectionId: 'about' },
      { label: 'Education', sectionId: 'education' },
      { label: 'Skills', sectionId: 'skills' },
      { label: 'Soft Skills', sectionId: 'soft-skills' },
      { label: 'Projects', sectionId: 'projects' },
      { label: 'Contact', sectionId: 'contact' },
    ],
  },

  /* ─── SEO & Meta ───────────────────────────────────────── */
  meta: {
    title: 'Haythem Chabbeh — Computer Science & IoT Student',
    description:
      'Portfolio of Haythem Chabbeh, a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse, Tunisia, showcasing projects, skills, and education in software development, web development, IoT, and embedded systems.',
    ogType: 'website',
    siteUrl: 'https://github.com/Hi-THEM',
  },
};