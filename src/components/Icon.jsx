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
  Clock,
  MapPin,
  ExternalLink,
  MessageCircle,
  Phone,
  Calendar,
  MessageSquare,
  Code2,
  Cpu,
  Layers,
  Wrench,
  GraduationCap,
  Users,
  Rocket,
  Target,
  Lightbulb,
  FolderGit2,
  GitBranch,
  Sparkles,
  Terminal,
  Share2,
  Link2,
  Award,
} from 'lucide-react';

/**
 * Clean SVG components matching Lucide 24x24 vector grid specifications
 * for brand icons (GitHub, LinkedIn) not included in standard Lucide core.
 */
function GithubIcon({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function LinkedinIcon({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function FacebookIcon({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function InstagramIcon({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
  menu: Menu,
  x: X,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  mail: Mail,
  copy: Copy,
  check: Check,
  send: Send,
  clock: Clock,
  'map-pin': MapPin,
  'external-link': ExternalLink,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  'message-circle': MessageCircle,
  phone: Phone,
  calendar: Calendar,
  'message-square': MessageSquare,
  code: Code2,
  cpu: Cpu,
  layers: Layers,
  wrench: Wrench,
  graduation: GraduationCap,
  users: Users,
  rocket: Rocket,
  target: Target,
  lightbulb: Lightbulb,
  folder: FolderGit2,
  'git-branch': GitBranch,
  sparkles: Sparkles,
  terminal: Terminal,
  share: Share2,
  link: Link2,
  award: Award,
};

/**
 * Single wrapper that maps string icon names from portfolio.js to Lucide components.
 * Always sets aria-hidden="true" and provides consistent default sizing (20px).
 */
export default function Icon({ name, size = 20, className = '', ...props }) {
  if (!name) return null;
  const normalizedKey = String(name).toLowerCase().trim();
  const Component = ICON_MAP[normalizedKey];

  if (!Component) {
    return null;
  }

  return (
    <Component
      size={size}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}
