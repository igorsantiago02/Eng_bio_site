import { ReactNode } from 'react';

type CardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function Card({ title, description, eyebrow, children, footer }: CardProps) {
  return (
    <article className="card">
      {eyebrow ? <span className="card-eyebrow">{eyebrow}</span> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {children}
      {footer ? <div className="card-footer">{footer}</div> : null}
    </article>
  );
}
