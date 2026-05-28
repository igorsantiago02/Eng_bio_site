import { useMemo, useState } from 'react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { people, peopleFilters } from '../data/content';

export function PeoplePage() {
  const [filter, setFilter] = useState<(typeof peopleFilters)[number]>('Todos');

  const filteredPeople = useMemo(() => {
    if (filter === 'Todos') {
      return people;
    }

    return people.filter((person) => person.team === filter);
  }, [filter]);

  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Pessoas</span>
        <h1>Coordenação, departamento, docentes e técnicos do curso.</h1>
        <p>
          Consulte os principais nomes públicos do portal de Engenharia Biomédica da UFRN em uma
          única área de navegação.
        </p>
      </section>

      <Section
        title="Equipe do curso"
        description="Filtros simples ajudam a localizar coordenação, departamento, docentes e apoio técnico."
      >
        <div className="filter-row" role="tablist" aria-label="Filtrar pessoas por equipe">
          {peopleFilters.map((option) => (
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

        <div className="card-grid card-grid-2">
          {filteredPeople.map((person) => (
            <Card
              key={person.name}
              eyebrow={person.team}
              title={person.name}
              description={person.summary}
              footer={
                <div className="card-inline">
                  <span>{person.role}</span>
                  {person.href ? (
                    <a href={person.href} target="_blank" rel="noreferrer" className="text-link">
                      Abrir página pública
                    </a>
                  ) : null}
                </div>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Estrutura institucional"
        title="Como localizar cada área"
        description="Cada grupo apresenta sua função principal dentro da organização acadêmica do curso."
        muted
      >
        <div className="card-grid card-grid-3">
          <Card
            title="Coordenação"
            description="Ponto de apoio para orientações acadêmicas, secretaria e assuntos ligados à graduação."
          />
          <Card
            title="Departamento"
            description="Responsável pela gestão departamental e pelo apoio institucional ao curso."
          />
          <Card
            title="Docentes e técnicos"
            description="Reúnem ensino, pesquisa, extensão e suporte administrativo à comunidade acadêmica."
          />
        </div>
      </Section>
    </div>
  );
}
