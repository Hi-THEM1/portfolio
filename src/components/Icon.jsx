import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ArrowDown,
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Code2,
  Cpu,
  Layers,
  Wrench,
  Users,
  ShieldCheck,
  Activity,
  Zap,
  Radio,
  Globe,
  Server,
  Database,
  CircuitBoard,
  Terminal,
  FolderGit2,
  GitBranch,
  Sun,
  Moon,
  Languages,
  Loader2,
  Shuffle,
  Lightbulb,
  HeartHandshake,
  Puzzle,
  Download,
  Share2,
} from 'lucide-react';

/**
 * Clean SVG components matching Lucide 24x24 vector grid specifications
 * with strokeWidth 1.75 outline style.
 */
function GithubIcon({ size = 18, strokeWidth = 1.75, className = '', ...props }) {
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
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, strokeWidth = 1.75, className = '', ...props }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 18, strokeWidth = 1.75, className = '', ...props }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, strokeWidth = 1.75, className = '', ...props }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const ICON_MAP = {
  // Navigation & Controls
  menu: Menu,
  x: X,
  sun: Sun,
  moon: Moon,
  languages: Languages,
  globe: Globe,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  download: Download,
  cv: Download,

  // Communication & Actions
  mail: Mail,
  copy: Copy,
  check: Check,
  send: Send,
  'external-link': ExternalLink,
  share: Share2,

  // Technical & Industrial Vibe (Approved Precision Set)
  cpu: Cpu,
  code: Code2,
  'code-2': Code2,
  terminal: Terminal,
  layers: Layers,
  wrench: Wrench,
  radio: Radio,
  activity: Activity,
  clock: Activity,
  zap: Zap,
  server: Server,
  database: Database,
  'circuit-board': CircuitBoard,
  'git-branch': GitBranch,
  folder: FolderGit2,
  'folder-git-2': FolderGit2,
  'loader-2': Loader2,
  loader: Loader2,

  // Collaboration & Soft Skills Set
  users: Users,
  'message-square': MessageSquare,
  'messages-square': MessageSquare,
  'shield-check': ShieldCheck,
  shield: ShieldCheck,
  target: ShieldCheck,
  shuffle: Shuffle,
  lightbulb: Lightbulb,
  puzzle: Puzzle,
  'heart-handshake': HeartHandshake,
  rocket: Zap,
  graduation: Layers,

  // Social Channels
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};



/**
 * Unified Icon component:
 * - Always strokeWidth = 1.75 for visual consistency
 * - aria-hidden="true" by default
 * - Default size = 18 for buttons and cards
 */
export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
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
