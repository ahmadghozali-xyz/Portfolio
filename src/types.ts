export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tech: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}