/**
 * portfolio.js
 * Single source of truth for all content, text strings, and metadata across the portfolio.
 * Structured with bilingual { en: '...', fr: '...' } strings for high-fidelity internationalization.
 */
export const portfolio = {
  /* ─── Identity ─────────────────────────────────────────── */
  identity: {
    brandTag: 'haythem',
    name: 'Haythem Chabbeh',
    photo: '/photo.jpg',
    photoAlt: {
      en: 'Portrait of Haythem Chabbeh',
      fr: 'Portrait de Haythem Chabbeh',
    },
    title: {
      en: 'Computer Science & IoT Student',
      fr: 'Étudiant en Informatique & IoT',
    },
    positioning: {
      en: 'Building practical web, IoT, and software solutions',
      fr: 'Conception de solutions web, IoT et logicielles concrètes',
    },
    bio: {
      en: 'I am a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCom), Tunisia, passionate about software development, modern web technologies, and connected systems. I enjoy turning ideas into practical, user-friendly digital solutions while continuously improving my technical skills.',
      fr: "Étudiant en Informatique et Objets Connectés (IoT) à l'Institut Supérieur d'Informatique et des Technologies de Communication (ISITCom), je suis passionné par l'ingénierie logicielle, les technologies web modernes et les architectures connectées. Je conçois des solutions numériques fiables et intuitives tout en perfectionnant continuellement mes compétences techniques.",
    },
    location: {
      en: 'Sousse, Tunisia',
      fr: 'Sousse, Tunisie',
    },
    timezone: 'GMT+1',
    email: 'chabbeh.haythem@gmail.com',
    status: {
      en: 'Open to internships and collaboration',
      fr: 'Disponible pour stages et collaborations',
    },
    availableUntil: '',
    resumeUrl: '/cv.pdf',
  },

  /* ─── Social Links ─────────────────────────────────────── */
  socialLinks: {
    github: 'https://github.com/Hi-THEM1',
    linkedin: 'https://www.linkedin.com/in/haythemchabbeh/',
    facebook: 'https://www.facebook.com/heythem.chabbeh',
    instagram: 'https://www.instagram.com/chabbeh_heythem/',
    other: {
      label: {
        en: 'Portfolio',
        fr: 'Portfolio',
      },
      url: '',
    },
  },

  /* ─── Education ────────────────────────────────────────── */
  education: {
    sectionLabel: {
      en: '02 — Education',
      fr: '02 — Formation',
    },
    sectionTitle: {
      en: 'Academic Background',
      fr: 'Parcours Académique',
    },
    present: {
      tag: {
        en: 'Higher Education',
        fr: 'Enseignement Supérieur',
      },
      status: {
        en: 'Current Studies (In Progress)',
        fr: 'Études en cours',
      },
      degree: {
        en: 'Computer Science & IoT',
        fr: 'Informatique & Objets Connectés (IoT)',
      },
      institution: {
        en: 'Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCom)',
        fr: "Institut Supérieur d'Informatique et des Technologies de Communication (ISITCom)",
      },
      period: {
        en: '2024 – Present',
        fr: '2024 – Présent',
      },
      location: {
        en: 'Sousse, Tunisia',
        fr: 'Sousse, Tunisie',
      },
      courseworkLabel: {
        en: 'Core Coursework',
        fr: 'Enseignements Principaux',
      },
      coursework: [
        { en: 'Internet of Things (IoT)', fr: 'Internet des Objets (IoT)' },
        { en: 'Web Development', fr: 'Développement Web' },
        { en: 'Programming', fr: 'Programmation' },
        { en: 'Database Systems', fr: 'Systèmes de Bases de Données' },
        { en: 'Computer Networks', fr: 'Réseaux Informatiques' },
        { en: 'Software Engineering', fr: 'Génie Logiciel' },
      ],
    },
    bac: {
      tag: {
        en: 'Secondary Education',
        fr: 'Enseignement Secondaire',
      },
      status: {
        en: 'Graduated / Completed',
        fr: 'Diplômé / Obtenu',
      },
      degree: {
        en: 'Baccalaureate in Mathematics',
        fr: 'Baccalauréat Scientifique (Mathématiques)',
      },
      institution: {
        en: 'Tunisian Ministry of Education',
        fr: "Ministère de l'Éducation Tunisien",
      },
      period: '2024',
      location: {
        en: 'Tunisia',
        fr: 'Tunisie',
      },
      focusLabel: {
        en: 'Academic Foundation',
        fr: 'Fondements Académiques',
      },
      focus: {
        en: 'Rigorous mathematical analysis, algorithmic thinking, physics, and scientific problem-solving.',
        fr: 'Analyse mathématique rigoureuse, raisonnement algorithmique, physique et résolution de problèmes scientifiques.',
      },
    },
    // Backwards compatibility aliases
    degree: {
      en: 'Computer Science & IoT',
      fr: 'Informatique & Objets Connectés (IoT)',
    },
    university: {
      en: 'Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCom)',
      fr: "Institut Supérieur d'Informatique et des Technologies de Communication (ISITCom)",
    },
    period: {
      en: '2024 – Present',
      fr: '2024 – Présent',
    },
    courseworkLabel: {
      en: 'Relevant Coursework',
      fr: 'Enseignements Pertinents',
    },
    coursework: [
      { en: 'Internet of Things (IoT)', fr: 'Internet des Objets (IoT)' },
      { en: 'Web Development', fr: 'Développement Web' },
      { en: 'Programming', fr: 'Programmation' },
      { en: 'Database Systems', fr: 'Systèmes de Bases de Données' },
      { en: 'Computer Networks', fr: 'Réseaux Informatiques' },
      { en: 'Software Engineering', fr: 'Génie Logiciel' },
    ],
    previousEducationLabel: {
      en: 'Secondary Education',
      fr: 'Enseignement Secondaire',
    },
    previousEducation: [
      {
        degree: {
          en: 'Baccalaureate in Mathematics',
          fr: 'Baccalauréat Scientifique (Mathématiques)',
        },
        institution: {
          en: 'Tunisia',
          fr: 'Tunisie',
        },
        period: '2024',
      },
    ],
  },

  /* ─── Hero Section ─────────────────────────────────────── */
  hero: {
    headline: {
      en: 'Building',
      fr: 'Création de',
    },
    headlineAccent: {
      en: 'Digital Solutions',
      fr: 'Solutions Numériques',
    },
    headlineEnd: {
      en: 'with Code & Technology',
      fr: 'par le Code & la Technologie',
    },
    cyclingPhrases: [
      { en: 'Digital Solutions', fr: 'Solutions Numériques' },
      { en: 'Modern Web Apps', fr: 'Applications Web Modernes' },
      { en: 'Connected IoT Systems', fr: 'Systèmes IoT Connectés' },
      { en: 'Practical Software', fr: 'Logiciels Métier Pratiques' },
    ],
    subheadline: {
      en: 'Computer Science and IoT student passionate about building modern web applications, connected systems, and practical software solutions.',
      fr: "Étudiant en Informatique et IoT, passionné par le développement d'applications web modernes, de systèmes connectés et de solutions logicielles concrètes.",
    },
    primaryCta: {
      en: 'See My Projects',
      fr: 'Voir mes projets',
    },
    secondaryCta: {
      en: 'Contact Me',
      fr: 'Me contacter',
    },
    resumeCta: {
      en: 'Download CV',
      fr: 'Télécharger le CV',
    },
    metrics: [
      {
        value: 3,
        suffix: '+',
        label: {
          en: 'Shipped Projects',
          fr: 'Projets Réalisés',
        },
      },
      {
        value: 6,
        suffix: '+',
        label: {
          en: 'Core Technologies',
          fr: 'Technologies Clés',
        },
      },
      {
        value: 100,
        suffix: '%',
        label: {
          en: 'Commitment to Quality',
          fr: 'Exigence Qualité',
        },
      },
    ],
  },

  /* ─── About Section ────────────────────────────────────── */
  about: {
    sectionLabel: {
      en: '01 — About',
      fr: '01 — À Propos',
    },
    sectionTitle: {
      en: 'Who I Am',
      fr: 'Qui Suis-Je',
    },
    paragraphs: [
      {
        en: 'I am Haythem Chabbeh, a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCom). My interest in technology started with programming and gradually grew into a passion for software development, IoT, networking, and modern digital solutions.',
        fr: "Je m'appelle Haythem Chabbeh, étudiant en Informatique et Objets Connectés à l'Institut Supérieur d'Informatique et des Technologies de Communication (ISITCom). Mon parcours dans les technologies a débuté par l'apprentissage de la programmation, avant d'évoluer vers une passion approfondie pour l'ingénierie logicielle, les architectures IoT, les réseaux et le développement web.",
      },
      {
        en: 'I enjoy learning by building real projects. My approach is focused on writing clean and understandable code, creating practical user experiences, and continuously improving both my technical and problem-solving skills.',
        fr: "Privilégiant la pratique, j'apprends en concevant des projets concrets. Ma méthode s'appuie sur la rédaction d'un code propre, modulaire et maintenable, l'ergonomie des interfaces utilisateur et le perfectionnement constant de mes aptitudes analytiques.",
      },
      {
        en: 'I am currently looking for opportunities to gain professional experience, particularly in software development, IoT, embedded systems, and related technology fields. I am also interested in collaborating on projects that allow me to learn and contribute.',
        fr: "Je suis actuellement à la recherche d'opportunités professionnelles (stages et collaborations techniques), particulièrement en génie logiciel, développement web, architectures IoT et systèmes embarqués, afin d'apporter ma contribution à des projets innovants.",
      },
    ],
    currentlyLabel: {
      en: 'Currently Learning:',
      fr: "En cours d'apprentissage :",
    },
    currently: {
      en: 'Developing skills in React, TypeScript, PHP, databases, Git, Linux, IoT, and software development.',
      fr: 'Perfectionnement sur React, TypeScript, PHP, bases de données relationnelles, Git, Linux, IoT et génie logiciel.',
    },
  },

  /* ─── Skills Section ───────────────────────────────────── */
  skills: {
    sectionLabel: {
      en: '03 — Skills',
      fr: '03 — Compétences',
    },
    sectionTitle: {
      en: 'My Toolbox',
      fr: 'Boîte à Outils',
    },
    coreTitle: {
      en: 'Core Stack',
      fr: 'Socle Technique',
    },
    coreIcon: 'code-2',
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
    learningTitle: {
      en: 'Currently Learning',
      fr: "En Cours d'Acquisition",
    },
    learningIcon: 'cpu',
    learning: [
      'TypeScript',
      'Next.js',
      'IoT Development',
      'Embedded Systems',
      'REST APIs',
      'MySQL',
    ],
    toolsTitle: {
      en: 'Tools & Platforms',
      fr: 'Outils & Plateformes',
    },
    toolsIcon: 'wrench',
    tools: [
      'VS Code',
      'GitHub',
      'Linux',
      'XAMPP',
      'Cisco Networking',
      'Figma',
    ],
  },

  /* ─── Soft Skills Section (Lucide icons, approved set) ─── */
  softSkills: {
    sectionLabel: {
      en: '04 — Work Ethic',
      fr: '04 — Méthode de Travail',
    },
    sectionTitle: {
      en: 'How I Work',
      fr: 'Savoir-Être Professionnel',
    },
    sectionSubtitle: {
      en: 'Interpersonal skills and professional habits developed through team projects, academic labs, and hands-on software development.',
      fr: "Aptitudes relationnelles et rigueur méthodologique forgées au fil des projets d'équipe, des laboratoires académiques et des réalisations logicielles.",
    },
    items: [
      {
        name: {
          en: 'Technical Communication',
          fr: 'Communication Technique',
        },
        evidence: {
          en: 'Clearly presented IoT system architectures and database schemas to multidisciplinary peers and faculty during project milestones.',
          fr: "Présentation claire d'architectures IoT et de schémas relationnels devant des équipes pluridisciplinaires et des jurys académiques.",
        },
        icon: 'messages-square',
      },
      {
        name: {
          en: 'Collaborative Problem-Solving',
          fr: 'Résolution Collaborative',
        },
        evidence: {
          en: 'Actively participated in peer code reviews and collaborative debugging sessions to resolve complex relational queries and UI states.',
          fr: "Implication active lors des revues de code et sessions de débogage pour optimiser les requêtes SQL et fiabiliser les états d'interface.",
        },
        icon: 'users',
      },
      {
        name: {
          en: 'Autonomous Learning',
          fr: 'Apprentissage Autonome',
        },
        evidence: {
          en: 'Independently researched and mastered React component lifecycle patterns, modern CSS layouts, and REST integration beyond coursework.',
          fr: "Veille technologique proactive et maîtrise autonome de React, des standards CSS modernes et des architectures REST.",
        },
        icon: 'lightbulb',
      },
      {
        name: {
          en: 'Code Quality & Discipline',
          fr: 'Rigueur & Qualité de Code',
        },
        evidence: {
          en: 'Maintained zero-warning lint standards, consistent naming conventions, and modular component structures across every repository.',
          fr: 'Respect strict des normes de linting (0 avertissement), conventions de nommage cohérentes et découpage modulaire pérenne.',
        },
        icon: 'shield-check',
      },
      {
        name: {
          en: 'Milestone & Time Management',
          fr: 'Gestion du Temps & Délais',
        },
        evidence: {
          en: 'Shipped multi-stage student project deadlines punctually while balancing rigorous Computer Science and IoT coursework.',
          fr: 'Livraison ponctuelle des jalons projets en conciliant exigences académiques et développement technique soutenu.',
        },
        icon: 'activity',
      },
      {
        name: {
          en: 'Curiosity & Adaptability',
          fr: 'Curiosité & Adaptabilité',
        },
        evidence: {
          en: 'Comfortably transitioned between foundational C/Python algorithm programming and modern full-stack web and embedded ecosystems.',
          fr: "Polyvalence technique démontrée en passant de l'algorithmique C/Python aux écosystèmes web full-stack et systèmes connectés.",
        },
        icon: 'shuffle',
      },
    ],
  },

  /* ─── Projects Section ─────────────────────────────────── */
  projects: {
    sectionLabel: {
      en: '05 — Projects',
      fr: '05 — Réalisations',
    },
    sectionTitle: {
      en: "Things I've Built",
      fr: 'Projets Réalisés',
    },
    learnedLabel: {
      en: 'What I learned:',
      fr: 'Acquis techniques :',
    },
    liveDemoLabel: {
      en: 'Live Demo',
      fr: 'Démo en Ligne',
    },
    githubLabel: {
      en: 'GitHub',
      fr: 'GitHub',
    },
    inProgressLabel: {
      en: 'In Progress',
      fr: 'En Cours',
    },
    items: [
      {
        name: 'FitTrack',
        icon: 'heart-pulse',
        hook: {
          en: 'A web platform for personalized fitness and wellness tracking',
          fr: 'Plateforme web de suivi sportif personnalisé et de bien-être',
        },
        problem: {
          en: 'FitTrack is a fitness and wellness web project designed to provide users with personalized recommendations based on metrics such as weight, height, age, activity level, and targets. It organizes exercise and meal plans, progress tracking, and personal metrics via an intuitive dashboard.',
          fr: 'FitTrack est une application web conçue pour délivrer des recommandations personnalisées selon les données biométriques (poids, taille, âge, objectifs). Elle centralise les plannings de séances, les plans nutritionnels et la visualisation des progrès via un tableau de bord intuitif.',
        },
        builtWith: ['React', 'JavaScript', 'HTML & CSS', 'Database', 'Git'],
        learned: {
          en: 'Mastered user state management, personalized recommendation calculations, responsive dashboard visualizations, and building accessible UI workflows.',
          fr: "Maîtrise de la gestion d'état client, calculs de recommandations personnalisées, visualisations graphiques réactives et accessibilité UI.",
        },
        liveUrl: '',
        githubUrl: 'https://github.com/Hi-THEM1/FitTrack',
      },
      {
        name: 'Inventory Pro',
        icon: 'boxes',
        hook: {
          en: 'A modern web-based inventory management system',
          fr: 'Système web moderne de gestion des stocks et inventaires',
        },
        problem: {
          en: 'Inventory Pro is a stock management project designed to streamline product tracking and stock operations through a clean interface. The system combines a responsive frontend with PHP, MySQL, session authentication, and backend API endpoints.',
          fr: "Inventory Pro fluidifie le suivi des articles et opérations d'inventaire à travers une interface épurée. L'architecture associe un frontend réactif à un backend PHP/MySQL avec gestion des sessions et API REST.",
        },
        builtWith: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
        learned: {
          en: 'Architected secure CRUD operations, session authentication, relational schema normalization, and frontend-to-backend API communication.',
          fr: "Conception d'opérations CRUD sécurisées, authentification par sessions, normalisation de schémas relationnels et requêtage asynchrone.",
        },
        liveUrl: '',
        githubUrl: 'https://github.com/Hi-THEM1/-Inventory-Pro',
      },
      {
        name: 'Amusement Park Workforce Scheduler',
        icon: 'calendar-clock',
        status: {
          en: 'In Development',
          fr: 'En Cours de Développement',
        },
        isLoading: true,
        hook: {
          en: 'A weekly employee scheduling and attendance management system',
          fr: 'Système de gestion hebdomadaire des plannings et présences',
        },
        problem: {
          en: 'A web-based system designed to help an amusement park coordinate weekly employee shifts, role-based workplace assignments, supervisor verification, and attendance status tracking across multiple park zones.',
          fr: "Application web destinée à coordonner les plannings d'équipes d'un parc d'attractions, la répartition des rôles par zones, la validation managériale et le pointage en temps réel.",
        },
        builtWith: ['React', 'JavaScript', 'HTML & CSS', 'Database', 'Git'],
        learned: {
          en: 'Explored role-based permission boundaries, scheduling conflict detection algorithms, modular component architecture, and operational business workflows.',
          fr: 'Algorithmes de détection de conflits horaires, gestion fine des habilitations par rôles et architecture logicielle orientée processus métier.',
        },
        liveUrl: '',
        githubUrl: 'https://github.com/Hi-THEM1/my_work',
      },
      {
        name: 'CTF_l404',
        icon: 'flag',
        hook: {
          en: 'A full-stack narrative CTF & hackathon competition platform',
          fr: 'Plateforme full-stack de CTF narratif et de hackathon',
        },
        problem: {
          en: 'Louage 404 is a full-stack competition platform combining team registration, an 8-stage sequential detective CTF set in Tunisia, automated scoring with hint penalties, a live leaderboard, organizer audit controls, and an HMAC-derived cryptographic gate unlocking the Main Hackathon Challenge.',
          fr: "Louage 404 est une plateforme de compétition full-stack réunissant l'inscription d'équipes, un CTF d'enquête séquentiel en 8 étapes se déroulant en Tunisie, un scoring automatique avec pénalités d'indices, un classement en direct, des outils d'audit organisateur et un accès cryptographique HMAC vers le défi principal.",
        },
        builtWith: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Better Auth', 'Vitest', 'Playwright'],
        learned: {
          en: 'Engineered server-only HMAC-SHA256 flag verification with timing-safe comparisons, Better Auth RBAC sessions, origin-checked CSRF protection, rate limiting, and end-to-end Playwright testing.',
          fr: "Implémentation de vérifications de flags HMAC-SHA256 côté serveur à temps constant, sessions RBAC avec Better Auth, protection CSRF, limitation de débit et tests E2E Playwright.",
        },
        liveUrl: '',
        githubUrl: 'https://github.com/Hi-THEM1/CTF_l404',
      },
      {
        name: 'ProofPath',
        icon: 'badge-check',
        status: {
          en: 'Hackathon Prototype',
          fr: 'Prototype Hackathon',
        },
        hook: {
          en: 'A skill passport connecting students and employers through verified work',
          fr: 'Passeport de compétences reliant étudiants et employeurs par des preuves vérifiables',
        },
        problem: {
          en: 'Built as a hackathon prototype to help students and graduates apply for jobs and internships with inspectable evidence of their skills — showcasing submitted work, assessed competencies, review feedback, and verified outcomes rather than relying solely on traditional CVs.',
          fr: "Conçu comme prototype de hackathon pour permettre aux étudiants et diplômés de postuler avec des preuves vérifiables de leurs compétences — travaux soumis, évaluations, retours et résultats validés — au-delà du simple CV traditionnel.",
        },
        builtWith: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        learned: {
          en: 'Designed dual student and employer user flows, evidence-backed application views, and rapid full-stack prototyping with Next.js App Router and Tailwind CSS v4.',
          fr: "Conception de parcours distincts étudiant/employeur, interfaces de présentation de preuves vérifiables et prototypage rapide avec Next.js App Router et Tailwind CSS v4.",
        },
        liveUrl: 'https://proof-path-ten.vercel.app',
        githubUrl: 'https://github.com/Hi-THEM1/ProofPath',
      },
    ],
  },

  /* ─── Contact Section ───────────────────────────────────── */
  contact: {
    sectionLabel: {
      en: '06 — Contact',
      fr: '06 — Contact',
    },
    heading: {
      en: "Let's Connect",
      fr: 'Entrons en Contact',
    },
    subtitle: {
      en: "I'm always interested in new opportunities, internships, collaborations, and interesting technology projects. Connect with me directly on any of the platforms below.",
      fr: "Je suis à l'écoute d'opportunités professionnelles, stages, collaborations et projets technologiques stimulants. N'hésitez pas à me joindre directement ci-dessous.",
    },
    responseTimePromise: {
      en: 'Replies within 24 hours',
      fr: 'Réponse sous 24 heures',
    },

    cvCardLabel: {
      en: 'CV',
      fr: 'CV',
    },
    cvCardValue: {
      en: 'Download PDF',
      fr: 'Télécharger le PDF',
    },

    methods: [
      {
        id: 'github',
        label: {
          en: 'GitHub',
          fr: 'GitHub',
        },
        value: 'github.com/Hi-THEM1',
        url: 'https://github.com/Hi-THEM1',
        icon: 'github',
      },
      {
        id: 'linkedin',
        label: {
          en: 'LinkedIn',
          fr: 'LinkedIn',
        },
        value: 'linkedin.com/in/haythemchabbeh',
        url: 'https://www.linkedin.com/in/haythemchabbeh/',
        icon: 'linkedin',
      },
      {
        id: 'facebook',
        label: {
          en: 'Facebook',
          fr: 'Facebook',
        },
        value: 'facebook.com/heythem.chabbeh',
        url: 'https://www.facebook.com/heythem.chabbeh',
        icon: 'facebook',
      },
      {
        id: 'instagram',
        label: {
          en: 'Instagram',
          fr: 'Instagram',
        },
        value: 'instagram.com/chabbeh_heythem',
        url: 'https://www.instagram.com/chabbeh_heythem/',
        icon: 'instagram',
      },
      {
        id: 'cv',
        label: {
          en: 'CV',
          fr: 'CV',
        },
        value: {
          en: 'Download PDF',
          fr: 'Télécharger le PDF',
        },
        url: '/cv.pdf',
        download: 'Haythem-Chabbeh-CV.pdf',
        icon: 'download',
      },
      {
        id: 'email',
        label: {
          en: 'Direct Email',
          fr: 'E-mail Direct',
        },
        value: 'chabbeh.haythem@gmail.com',
        url: 'mailto:chabbeh.haythem@gmail.com',
        icon: 'mail',
      },
    ],

    form: {
      heading: {
        en: 'Send a message',
        fr: 'Envoyer un message',
      },
      nameLabel: {
        en: 'Name',
        fr: 'Nom complet',
      },
      namePlaceholder: {
        en: 'Your name',
        fr: 'Votre nom',
      },
      emailLabel: {
        en: 'Email',
        fr: 'Adresse e-mail',
      },
      emailPlaceholder: {
        en: 'your@email.com',
        fr: 'votre@email.com',
      },
      subjectLabel: {
        en: 'Subject',
        fr: 'Sujet',
      },
      subjectPlaceholder: {
        en: 'Subject of your message',
        fr: 'Objet de votre message',
      },
      subjectMax: 120,
      messageLabel: {
        en: 'Message',
        fr: 'Message',
      },
      messagePlaceholder: {
        en: 'Your message…',
        fr: 'Votre message…',
      },
      messageMax: 1000,
      submitLabel: {
        en: 'Send Message',
        fr: 'Envoyer le message',
      },
      submittingLabel: {
        en: 'Sending…',
        fr: 'Envoi en cours…',
      },
      successMessage: {
        en: 'Message sent successfully! I will get back to you soon.',
        fr: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      },
      errorMessage: {
        en: 'Failed to send message. Please reach out via direct email.',
        fr: "Échec de l'envoi. Veuillez me contacter directement par e-mail.",
      },
      validation: {
        nameRequired: {
          en: 'Name is required.',
          fr: 'Le nom est obligatoire.',
        },
        emailRequired: {
          en: 'Email is required.',
          fr: "L'adresse e-mail est obligatoire.",
        },
        emailInvalid: {
          en: 'Please enter a valid email address.',
          fr: 'Veuillez saisir une adresse e-mail valide.',
        },
        subjectRequired: {
          en: 'Subject is required.',
          fr: 'Le sujet est obligatoire.',
        },
        subjectTooLong: {
          en: 'Subject cannot exceed 120 characters.',
          fr: 'Le sujet ne peut dépasser 120 caractères.',
        },
        messageRequired: {
          en: 'Message is required.',
          fr: 'Le message est obligatoire.',
        },
        messageTooLong: {
          en: 'Message cannot exceed 1000 characters.',
          fr: 'Le message ne peut dépasser 1000 caractères.',
        },
      },
    },

    copyEmailLabel: {
      en: 'Copy email address',
      fr: "Copier l'adresse e-mail",
    },
    copiedEmailLabel: {
      en: 'Email Copied!',
      fr: 'E-mail Copié !',
    },
    openMailAppLabel: {
      en: 'Open in mail app',
      fr: "Ouvrir l'application e-mail",
    },
  },

  /* ─── Footer ───────────────────────────────────────────── */
  footer: {
    tagline: {
      en: 'Built with React, curiosity, and a lot of coffee.',
      fr: "Conçu avec React, rigueur et passion pour l'ingénierie.",
    },
    backToTopLabel: {
      en: 'Back to top',
      fr: 'Haut de page',
    },
    rights: {
      en: 'All rights reserved.',
      fr: 'Tous droits réservés.',
    },
  },

  /* ─── Navbar ───────────────────────────────────────────── */
  nav: {
    brand: 'HC',
    brandBadge: {
      en: 'STUDENT',
      fr: 'ÉTUDIANT',
    },
    cv: {
      en: 'CV',
      fr: 'CV',
    },
    downloadCv: {
      en: 'Download CV',
      fr: 'Télécharger le CV',
    },
    ctaLabel: {
      en: "Let's talk",
      fr: 'Discutons',
    },
    skipToContent: {
      en: 'Skip to main content',
      fr: 'Aller au contenu principal',
    },
    sousseLocation: {
      en: 'Sousse, TN',
      fr: 'Sousse, TN',
    },
    sousseTimeLabel: {
      en: 'Local time in Sousse, Tunisia',
      fr: 'Heure locale à Sousse, Tunisie',
    },
    toggleMenuAria: {
      en: 'Toggle navigation menu',
      fr: 'Ouvrir/Fermer le menu de navigation',
    },
    themeToggleAria: {
      en: 'Switch to light/dark mode',
      fr: 'Basculer vers le mode clair/sombre',
    },
    langToggleAria: {
      en: 'Switch language',
      fr: 'Changer de langue',
    },
    links: [
      {
        label: {
          en: 'About',
          fr: 'À Propos',
        },
        sectionId: 'about',
      },
      {
        label: {
          en: 'Education',
          fr: 'Formation',
        },
        sectionId: 'education',
      },
      {
        label: {
          en: 'Skills',
          fr: 'Compétences',
        },
        sectionId: 'skills',
      },
      {
        label: {
          en: 'Soft Skills',
          fr: 'Savoir-Être',
        },
        sectionId: 'soft-skills',
      },
      {
        label: {
          en: 'Projects',
          fr: 'Projets',
        },
        sectionId: 'projects',
      },
      {
        label: {
          en: 'Contact',
          fr: 'Contact',
        },
        sectionId: 'contact',
      },
    ],
  },

  /* ─── Mobile Menu ───────────────────────────────────────── */
  mobileMenu: {
    downloadCv: {
      en: 'Download CV',
      fr: 'Télécharger le CV',
    },
  },

  /* ─── SEO & Meta ───────────────────────────────────────── */
  meta: {
    title: {
      en: 'Haythem Chabbeh — Computer Science & IoT Student',
      fr: 'Haythem Chabbeh — Étudiant en Informatique & IoT',
    },
    description: {
      en: 'Portfolio of Haythem Chabbeh, a Computer Science and IoT student at the Higher Institute of Computer Science and Communication Technologies of Sousse (ISITCom), Tunisia, showcasing projects, skills, and education in software development, web development, IoT, and embedded systems.',
      fr: "Portfolio de Haythem Chabbeh, étudiant en Informatique et Objets Connectés à l'ISITCom Sousse, Tunisie. Projets, compétences et parcours en développement logiciel, web et systèmes IoT.",
    },
    ogType: 'website',
    siteUrl: 'https://haythem-chabbeh.netlify.app',
  },
};