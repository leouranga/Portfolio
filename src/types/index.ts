export type SocialLink = {
  label: string;
  href: string;
};

export type Tech = {
  key: string;
  label: string;
  iconClass: string;
};

export type Project = {
  name: string;
  description: string;
  href: string;
  repo?: string;
  image: { src: string; alt: string };
  tech: string[];
  category?: "frontend" | "fullstack" | "games";
};