// ─── Project Model ────────────────────────────────────────────────────────────
export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: ProjectTag[];
  icon: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
}

// ─── Tech Stack Model ─────────────────────────────────────────────────────────
export interface TechItem {
  name: string;
  abbr: string;
  color: string;
  level?: number;
}

export interface TechCategory {
  name: string;
  icon: string;
  items: TechItem[];
}

// ─── Social Link Model ────────────────────────────────────────────────────────
export interface SocialLink {
  icon: string;
  label: string;
  value: string;
  url: string;
  color: string;
}

// ─── Nav Link Model ──────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  target: string;
}

// ─── Achievement Model ────────────────────────────────────────────────────────
export interface Achievement {
  icon: string;
  title: string;
  description: string;
  color: string;
}

// ─── Contact Form Model ───────────────────────────────────────────────────────
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
