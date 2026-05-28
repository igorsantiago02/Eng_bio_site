export type NavItem = {
  label: string;
  path: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type QuickAction = {
  title: string;
  description: string;
  path: string;
};

export type Highlight = {
  title: string;
  description: string;
  eyebrow?: string;
  link?: string;
  external?: boolean;
};

export type CalendarItem = {
  date: string;
  title: string;
  description: string;
};

export type ResourceItem = {
  title: string;
  category: 'Documento' | 'Calendário' | 'Estágio' | 'TCC' | 'Guia' | 'Link útil';
  description: string;
  href: string;
  external?: boolean;
};

export type Person = {
  name: string;
  role: string;
  team: 'Coordenação' | 'Departamento' | 'Docentes' | 'Técnicos';
  summary: string;
  href?: string;
};

export type Lab = {
  name: string;
  type: 'Laboratório' | 'Frente acadêmica';
  summary: string;
  detail: string;
  href?: string;
};

export type NewsItem = {
  title: string;
  date: string;
  category: 'Oportunidade' | 'Acolhimento' | 'Edital' | 'Evento' | 'Institucional';
  summary: string;
  href: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CurriculumStage = {
  title: string;
  periodRange: string;
  description: string;
  items: string[];
};

export type CurriculumDiscipline = {
  code: string;
  name: string;
  hours: string;
  summary?: string;
};

export type CurriculumPeriod = {
  period: string;
  shortLabel: string;
  workload: string;
  group: 'Básico' | 'Transição' | 'Profissionalizante' | 'Conclusão';
  items: CurriculumDiscipline[];
  note?: string;
};
