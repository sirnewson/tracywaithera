
export type Language = 'en' | 'sw';

export interface StrategyResponse {
  overview: string;
  steps: {
    title: string;
    description: string;
  }[];
  kpis: string[];
}

export interface RateItem {
  service: string;
  price: string;
  details: string;
  popular?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
}

export interface ContentStrings {
  nav: {
    services: string;
    agency: string;
    about: string;
    contact: string;
    quote: string;
    rates: string;
    insights: string;
  };
  hero: {
    tag: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaAudit: string;
    ctaAgency: string;
  };
  aiTool: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    loading: string;
  };
  trouve: {
    title1: string;
    title2: string;
    subtitle: string;
    partner: string;
    desc: string;
  };
  services: {
    title1: string;
    title2: string;
    subtitle: string;
  };
  about: {
    title1: string;
    title2: string;
    vision: string;
    philosophy: string;
    dataDriven: string;
    ethical: string;
  };
  contact: {
    title1: string;
    title2: string;
    subtitle: string;
    email: string;
    phone: string;
    location: string;
    locationDesc: string;
    nameLabel: string;
    emailLabel: string;
    goalLabel: string;
    whatsapp: string;
  };
}
