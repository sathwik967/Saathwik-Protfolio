export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string; // Dynamic drawing/mockup or premium CSS illustration representation
}

export interface TechBubble {
  name: string;
  description: string;
  category: "Language" | "Framework" | "Database" | "AI/ML" | "Tools";
  color: string;
  size: "sm" | "md" | "lg";
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RoadmapStep {
  title: string;
  status: "completed" | "current" | "upcoming";
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  iconName: string;
}
