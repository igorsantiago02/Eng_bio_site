import { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  muted?: boolean;
};

export function Section({ eyebrow, title, description, children, muted = false }: SectionProps) {
  return (
    <section className={muted ? 'section section-muted' : 'section'}>
      <div className="section-header">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
