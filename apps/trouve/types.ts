
export interface Article {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string; // Using string for SVG path or URL for simplicity in this file, will render in App.tsx
  description: string;
  detailedContent: string; // HTML content
}
