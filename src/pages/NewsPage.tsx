import { useMemo, useState } from 'react';
import { Section } from '../components/Section';
import { newsItems } from '../data/content';

const filters = ['Todos', 'Oportunidade', 'Acolhimento', 'Edital', 'Evento', 'Institucional'] as const;

export function NewsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todos');

  const items = useMemo(() => {
    if (filter === 'Todos') {
      return newsItems;
    }

    return newsItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Informativos</span>
        <h1>Notícias, editais, acolhimento e oportunidades do curso.</h1>
        <p>
          Acompanhe as publicações recentes da Engenharia Biomédica da UFRN com categorias claras e
          leitura direta.
        </p>
      </section>

      <Section
        title="Publicações em destaque"
        description="Filtre por categoria para encontrar oportunidades, editais, eventos e comunicados do curso."
      >
        <div className="filter-row" role="tablist" aria-label="Filtrar publicações por categoria">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              className={filter === option ? 'filter-chip filter-chip-active' : 'filter-chip'}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="news-list">
          {items.map((item) => (
            <article key={item.title} className="news-row news-row-dense">
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <small>{item.date}</small>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer" className="text-link">
                Abrir publicação
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Categorias"
        title="Tipos de conteúdo publicados"
        description="A seção de informativos reúne acolhimento, editais, eventos, avisos institucionais e oportunidades acadêmicas."
        muted
      >
        <div className="card-grid card-grid-3">
          <article className="card">
            <h3>Oportunidades</h3>
            <p>Publicações voltadas a mobilidade, seleção, bolsas e chamadas acadêmicas.</p>
          </article>
          <article className="card">
            <h3>Acolhimento e eventos</h3>
            <p>Conteúdos sobre recepção de estudantes, integrações e atividades do curso.</p>
          </article>
          <article className="card">
            <h3>Comunicados institucionais</h3>
            <p>Atualizações da coordenação, do departamento e de processos oficiais ligados ao curso.</p>
          </article>
        </div>
      </Section>
    </div>
  );
}
