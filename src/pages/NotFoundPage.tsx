import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Página não encontrada</span>
        <h1>O conteúdo solicitado não foi localizado.</h1>
        <p>Use o link abaixo para voltar à página inicial e continuar navegando pelo portal.</p>
        <div className="hero-actions">
          <Link to="/" className="button button-primary">
            Voltar ao início
          </Link>
        </div>
      </section>
    </div>
  );
}
