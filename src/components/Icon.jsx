/**
 * Modern Duotone SVG Icon System
 * - Unified 24x24 viewBox, rounded caps/joins, crisp 1.65 stroke
 * - Subtle translucent accent fills (fillOpacity 0.16) for modern depth
 * - Adapts automatically to light/dark themes via currentColor
 */

function Svg({ size = 18, strokeWidth = 1.65, className = '', children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ─── Navigation & Controls ───────────────────────────────── */
const MenuIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="4" fill="currentColor" fillOpacity="0.1" stroke="none" />
    <path d="M4 7h16" />
    <path d="M4 12h11" />
    <path d="M4 17h16" />
  </Svg>
);

const XIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" stroke="none" />
    <path d="M16 8L8 16" />
    <path d="M8 8l8 8" />
  </Svg>
);

const SunIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4.2" fill="currentColor" fillOpacity="0.22" />
    <path d="M12 2.5v2.2M12 19.3v2.2M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2.5 12h2.2M19.3 12h2.2M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
  </Svg>
);

const MoonIcon = (p) => (
  <Svg {...p}>
    <path
      d="M20.2 14.4A8.5 8.5 0 0 1 9.6 3.8a8.5 8.5 0 1 0 10.6 10.6z"
      fill="currentColor"
      fillOpacity="0.18"
    />
    <path d="M18 4v2M19 5h-2" />
  </Svg>
);

const LanguagesIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="11" height="9" rx="2.5" fill="currentColor" fillOpacity="0.14" stroke="none" />
    <path d="m5 8 6 0M8 6v2c0 2.8-1.6 5-3.8 6" />
    <path d="M9.5 11.5c.9 1.1 2 2 3.2 2.5" />
    <path d="M14 20l3.2-7.5L20.5 20M15 17.6h4.4" />
  </Svg>
);

const GlobeIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.12" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <path d="M3.6 9h16.8M3.6 15h16.8" />
  </Svg>
);

const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

const ArrowUpRightIcon = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

const ArrowUpIcon = (p) => (
  <Svg {...p}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </Svg>
);

const ArrowDownIcon = (p) => (
  <Svg {...p}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </Svg>
);

const DownloadIcon = (p) => (
  <Svg {...p}>
    <rect x="4" y="15" width="16" height="5" rx="2" fill="currentColor" fillOpacity="0.15" stroke="none" />
    <path d="M12 3v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4 16.5v1.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" />
  </Svg>
);

/* ─── Communication & Actions ─────────────────────────────── */
const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="currentColor" fillOpacity="0.14" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Svg>
);

const CopyIcon = (p) => (
  <Svg {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" fill="currentColor" fillOpacity="0.15" />
    <path d="M5 15H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5h9.5A1.5 1.5 0 0 1 15 4v1" />
  </Svg>
);

const CheckIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.15" stroke="none" />
    <path d="m6.5 12.5 3.5 3.5 7.5-8" />
  </Svg>
);

const SendIcon = (p) => (
  <Svg {...p}>
    <path
      d="M21 3 10 14M21 3l-6.5 18-4-7.5L3 9.5 21 3z"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </Svg>
);

const ExternalLinkIcon = (p) => (
  <Svg {...p}>
    <rect x="4" y="6" width="14" height="14" rx="2.5" fill="currentColor" fillOpacity="0.12" stroke="none" />
    <path d="M14 4h6v6" />
    <path d="M10 14 20 4" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </Svg>
);

const ShareIcon = (p) => (
  <Svg {...p}>
    <circle cx="18" cy="5" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="6" cy="12" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="18" cy="19" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6" />
  </Svg>
);

/* ─── Technical & Engineering ─────────────────────────────── */
const CodeIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3.5" fill="currentColor" fillOpacity="0.12" />
    <path d="m9.5 9.5-3 2.5 3 2.5M14.5 9.5l3 2.5-3 2.5" />
    <path d="m13 8.5-2 7" />
  </Svg>
);

const CpuIcon = (p) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" fillOpacity="0.16" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
  </Svg>
);

const WrenchIcon = (p) => (
  <Svg {...p}>
    <path
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </Svg>
);

const TerminalIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3" fill="currentColor" fillOpacity="0.14" />
    <path d="m7 9.5 3.5 2.5L7 14.5M12.5 14.5H17" />
  </Svg>
);

const LayersIcon = (p) => (
  <Svg {...p}>
    <path d="m12 3 9 4.8-9 4.8-9-4.8z" fill="currentColor" fillOpacity="0.2" />
    <path d="m3 12.2 9 4.8 9-4.8" />
    <path d="m3 16.5 9 4.8 9-4.8" />
  </Svg>
);

const RadioIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="2.2" fill="currentColor" fillOpacity="0.3" />
    <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4" />
    <path d="M5 19a9.9 9.9 0 0 1 0-14M19 5a9.9 9.9 0 0 1 0 14" />
  </Svg>
);

const ActivityIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.12" stroke="none" />
    <path d="M3.5 12h3.8l2.4-6 4.4 12 2.6-6h3.8" />
  </Svg>
);

const ZapIcon = (p) => (
  <Svg {...p}>
    <path
      d="M13 2 4.5 13.5h6.5L10 22l9.5-11.5h-6.5L13 2z"
      fill="currentColor"
      fillOpacity="0.18"
    />
  </Svg>
);

const ServerIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="7" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="3" y="14" width="18" height="7" rx="2" fill="currentColor" fillOpacity="0.15" />
    <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
  </Svg>
);

const DatabaseIcon = (p) => (
  <Svg {...p}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </Svg>
);

const CircuitBoardIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3.5" fill="currentColor" fillOpacity="0.12" />
    <path d="M11 3v4.5a1.5 1.5 0 0 1-1.5 1.5H7.5M16.5 3v6a1.5 1.5 0 0 1-1.5 1.5h-1" />
    <circle cx="8" cy="15" r="2" fill="currentColor" fillOpacity="0.25" />
    <circle cx="15.5" cy="14.5" r="2" fill="currentColor" fillOpacity="0.25" />
    <path d="M8 17v4M15.5 16.5V21" />
  </Svg>
);

const GitBranchIcon = (p) => (
  <Svg {...p}>
    <circle cx="6" cy="6" r="2.5" fill="currentColor" fillOpacity="0.22" />
    <circle cx="18" cy="7" r="2.5" fill="currentColor" fillOpacity="0.22" />
    <circle cx="6" cy="18" r="2.5" fill="currentColor" fillOpacity="0.22" />
    <path d="M6 8.5v7M18 9.5a6 6 0 0 1-6 6H8.5" />
  </Svg>
);

const FolderGitIcon = (p) => (
  <Svg {...p}>
    <path
      d="M4 5.5A2 2 0 0 1 6 3.5h4l2 2.5h6a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
      fill="currentColor"
      fillOpacity="0.14"
    />
    <circle cx="12" cy="13" r="1.8" />
    <path d="M9 13h1.2M13.8 13H15" />
  </Svg>
);

const LoaderIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3a9 9 0 1 0 9 9" />
  </Svg>
);

/* ─── Project-Specific Modern Duotone Icons ───────────────── */
// FitTrack: Fitness & wellness pulse tracker
const HeartPulseIcon = (p) => (
  <Svg {...p}>
    <path
      d="M19.5 13.5 12 20.5l-7.5-7a4.95 4.95 0 0 1 7-7l.5.5.5-.5a4.95 4.95 0 0 1 7 7z"
      fill="currentColor"
      fillOpacity="0.16"
    />
    <path d="M4.5 12.5h3.2l1.6-3.2 2.4 5.2 1.8-3 1.5 1h4.5" />
  </Svg>
);

// Inventory Pro: Modern warehouse / package inventory
const BoxesIcon = (p) => (
  <Svg {...p}>
    <path
      d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3z"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path d="M4.5 7.2 12 11.4l7.5-4.2" />
    <path d="M12 11.4V21" />
    <path d="m8.3 5.1 7.4 4.2" />
  </Svg>
);

// Amusement Park Workforce Scheduler: Weekly shift & time scheduler
const CalendarClockIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="15" height="15" rx="2.8" fill="currentColor" fillOpacity="0.14" />
    <path d="M7.5 2.5v3M13.5 2.5v3M3 9h15" />
    <circle cx="16.5" cy="16.5" r="4.5" fill="currentColor" fillOpacity="0.22" />
    <path d="M16.5 14.5v2l1.3 1" />
  </Svg>
);

// CTF_l404: Capture The Flag / Cybersecurity challenge platform
const FlagIcon = (p) => (
  <Svg {...p}>
    <path
      d="M5 4.5c2.5-1.5 5.5-1.5 8 0s5.5 1.5 7 0v10c-1.5 1.5-4.5 1.5-7 0s-5.5-1.5-8 0z"
      fill="currentColor"
      fillOpacity="0.18"
    />
    <path d="M5 3v18" />
  </Svg>
);

// ProofPath: Verified skill passport & credential badge
const BadgeCheckIcon = (p) => (
  <Svg {...p}>
    <path
      d="M12 2.5 14.8 4.4l3.3-.2 1.1 3.1 2.7 1.9-.9 3.2.9 3.2-2.7 1.9-1.1 3.1-3.3-.2L12 21.5l-2.8-1.9-3.3.2-1.1-3.1-2.7-1.9.9-3.2-.9-3.2 2.7-1.9 1.1-3.1 3.3.2L12 2.5z"
      fill="currentColor"
      fillOpacity="0.16"
    />
    <path d="m8.8 12.2 2.2 2.3 4.4-4.6" />
  </Svg>
);

/* ─── Collaboration & Soft Skills ─────────────────────────── */
const UsersIcon = (p) => (
  <Svg {...p}>
    <circle cx="9.5" cy="8" r="3.2" fill="currentColor" fillOpacity="0.18" />
    <path d="M3.5 19.5c0-3 2.7-5 6-5s6 2 6 5" fill="currentColor" fillOpacity="0.12" />
    <path d="M16.5 8.5a2.6 2.6 0 0 1 0 5M20.5 19.5c0-2.4-1.7-4.1-4-4.6" />
  </Svg>
);

const MessageSquareIcon = (p) => (
  <Svg {...p}>
    <path
      d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-4.5 4v-4A2.5 2.5 0 0 1 4 13.5z"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path d="M8.5 8.5h7M8.5 11.8h4.5" />
  </Svg>
);

const ShieldCheckIcon = (p) => (
  <Svg {...p}>
    <path
      d="M12 2.5 4.5 5.8v5.5c0 5 3.2 8.7 7.5 10.2 4.3-1.5 7.5-5.2 7.5-10.2V5.8L12 2.5z"
      fill="currentColor"
      fillOpacity="0.16"
    />
    <path d="m9 12 2.1 2.1L15.5 9.6" />
  </Svg>
);

const ShuffleIcon = (p) => (
  <Svg {...p}>
    <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </Svg>
);

const LightbulbIcon = (p) => (
  <Svg {...p}>
    <path
      d="M9 14.5c-1.5-1.1-2.5-2.8-2.5-4.8a5.5 5.5 0 1 1 11 0c0 2-1 3.7-2.5 4.8-.6.5-1 1.2-1 2H10c0-.8-.4-1.5-1-2z"
      fill="currentColor"
      fillOpacity="0.18"
    />
    <path d="M9.5 19.5h5M10.5 22h3" />
  </Svg>
);

const PuzzleIcon = (p) => (
  <Svg {...p}>
    <path
      d="M14.5 3.5a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v3h-1.5a1.5 1.5 0 0 0 0 3H20.5v3a2 2 0 0 1-2 2h-3v-1.5a1.5 1.5 0 0 0-3 0V20.5h-3a2 2 0 0 1-2-2v-3h1.5a1.5 1.5 0 0 0 0-3H3.5v-3a2 2 0 0 1 2-2h3v-2a2 2 0 0 1 2-2z"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </Svg>
);

const HeartHandshakeIcon = (p) => (
  <Svg {...p}>
    <path
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      fill="currentColor"
      fillOpacity="0.16"
    />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
  </Svg>
);

/* ─── Social Channels ─────────────────────────────────────── */
const GithubIcon = (p) => (
  <Svg {...p}>
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      fill="currentColor"
      fillOpacity="0.12"
    />
  </Svg>
);

const LinkedinIcon = (p) => (
  <Svg {...p}>
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <rect width="4" height="12" x="2" y="9" fill="currentColor" fillOpacity="0.15" />
    <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0.25" />
  </Svg>
);

const FacebookIcon = (p) => (
  <Svg {...p}>
    <path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      fill="currentColor"
      fillOpacity="0.15"
    />
  </Svg>
);

const InstagramIcon = (p) => (
  <Svg {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5.5" ry="5.5" fill="currentColor" fillOpacity="0.13" />
    <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.18" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </Svg>
);

const ICON_MAP = {
  // Navigation & Controls
  menu: MenuIcon,
  x: XIcon,
  sun: SunIcon,
  moon: MoonIcon,
  languages: LanguagesIcon,
  globe: GlobeIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up-right': ArrowUpRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  download: DownloadIcon,
  cv: DownloadIcon,

  // Communication & Actions
  mail: MailIcon,
  copy: CopyIcon,
  check: CheckIcon,
  send: SendIcon,
  'external-link': ExternalLinkIcon,
  share: ShareIcon,

  // Technical & Engineering
  cpu: CpuIcon,
  code: CodeIcon,
  'code-2': CodeIcon,
  terminal: TerminalIcon,
  layers: LayersIcon,
  wrench: WrenchIcon,
  radio: RadioIcon,
  activity: ActivityIcon,
  clock: ActivityIcon,
  zap: ZapIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  'circuit-board': CircuitBoardIcon,
  'git-branch': GitBranchIcon,
  folder: FolderGitIcon,
  'folder-git-2': FolderGitIcon,
  'loader-2': LoaderIcon,
  loader: LoaderIcon,

  // Project-Specific Icons
  'heart-pulse': HeartPulseIcon,
  boxes: BoxesIcon,
  'calendar-clock': CalendarClockIcon,
  flag: FlagIcon,
  'badge-check': BadgeCheckIcon,

  // Collaboration & Soft Skills
  users: UsersIcon,
  'message-square': MessageSquareIcon,
  'messages-square': MessageSquareIcon,
  'shield-check': ShieldCheckIcon,
  shield: ShieldCheckIcon,
  target: ShieldCheckIcon,
  shuffle: ShuffleIcon,
  lightbulb: LightbulbIcon,
  puzzle: PuzzleIcon,
  'heart-handshake': HeartHandshakeIcon,
  rocket: ZapIcon,
  graduation: LayersIcon,

  // Social Channels
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

/**
 * Unified Icon component:
 * - Modern duotone SVG aesthetic with consistent 1.65 strokeWidth
 * - aria-hidden="true" by default
 * - Default size = 18 for buttons and cards
 */
export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.65,
  className = '',
  ...props
}) {
  if (!name) return null;
  const normalizedKey = String(name).toLowerCase().trim();
  const Component = ICON_MAP[normalizedKey];

  if (!Component) {
    return null;
  }

  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}
