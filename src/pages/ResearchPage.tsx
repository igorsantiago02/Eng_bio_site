import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { labs } from '../data/content';

export function ResearchPage() {
  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Pesquisa</span>
        <h1>Laboratórios, subáreas e pesquisa aplicada em saúde.</h1>
        <p>
          O curso prevê atividades e disciplinas ministradas em laboratórios e apresenta subáreas
          profissionalizantes ligadas à Engenharia Biomédica.
        </p>
      </section>

      <Section
        title="Ambientes e linhas em destaque"
        description="Consulte laboratório público do curso e frentes acadêmicas previstas na formação."
      >
        <div className="card-grid card-grid-2">
          {labs.map((lab) => (
            <Card
              key={lab.name}
              eyebrow={lab.type}
              title={lab.name}
              description={lab.summary}
              footer={
                <div className="card-inline">
                  <span>{lab.detail}</span>
                  {lab.href ? (
                    <a href={lab.href} target="_blank" rel="noreferrer" className="text-link">
                      Ver página pública
                    </a>
                  ) : null}
                </div>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Projeto pedagógico"
        title="Frentes acadêmicas da formação"
        description="O PPC do curso destaca pesquisa, competências profissionais e integração com demandas da saúde."
        muted
      >
        <div className="card-grid card-grid-3">
          <Card
            title="Pesquisa e treinamento"
            description="A formação combina estudo, prática e desenvolvimento tecnológico aplicados à saúde."
          />
          <Card
            title="Infraestrutura laboratorial"
            description="Laboratórios apoiam disciplinas, projetos acadêmicos e atividades práticas do curso."
          />
          <Card
            title="Subáreas profissionalizantes"
            description="Engenharia Clínica, Neuroengenharia, Engenharia de Reabilitação e Engenharia Tecidual aparecem entre os focos formativos."
          />
        </div>
      </Section>
    </div>
  );
}
