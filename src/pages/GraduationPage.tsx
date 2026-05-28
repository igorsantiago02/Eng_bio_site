import { CheckCircle2 } from 'lucide-react';
import { Card } from '../components/Card';
import { CurriculumExplorer } from '../components/CurriculumExplorer';
import { Section } from '../components/Section';
import { calendarItems, curriculumReferencePeriods, curriculumStages } from '../data/content';

export function GraduationPage() {
  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Graduação</span>
        <h1>Calendário, documentos, estágio, TCC e grade curricular no próprio portal.</h1>
        <p>
          A área de graduação organiza as informações mais consultadas pelos estudantes com foco em
          clareza, rotina acadêmica e acesso rápido.
        </p>
      </section>

      <Section
        eyebrow="Estrutura curricular"
        title="Organização geral da formação"
        description="A graduação combina ciclo básico, consolidação das bases da engenharia e formação biomédica específica."
      >
        <div className="card-grid card-grid-2">
          {curriculumStages.map((stage) => (
            <article key={stage.title} className="card card-emphasis">
              <span className="card-eyebrow">{stage.periodRange}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <ul className="curriculum-stage-list">
                {stage.items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="curriculum-note">
          <strong>Resumo institucional:</strong> carga horária mínima de 3.700 horas, oferta no
          turno noturno e duração prevista de 11 períodos letivos.
        </div>
      </Section>

      <Section
        eyebrow="Grade curricular"
        title="Visualização por período"
        description="Explore a grade curricular organizada por período letivo, com detalhes sobre as disciplinas e suas relações."
        muted
      >
        <CurriculumExplorer periods={curriculumReferencePeriods} />
      </Section>

      <Section
        eyebrow="Calendário acadêmico"
        title="Datas importantes do semestre"
        description="Resumo com marcos públicos do período letivo para apoiar a vida acadêmica."
      >
        <div className="calendar-board">
          {calendarItems.map((item) => (
            <article key={item.title} className="calendar-card card">
              <span>{item.date}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Recursos da graduação"
        title="Materiais públicos do curso"
        description="O portal reúne documentos, modelos, resoluções e páginas de apoio acadêmico."
      >
        <div className="card-grid card-grid-3">
          <Card
            title="Estrutura curricular"
            description="Consulte no próprio portal a visão geral dos ciclos e a grade curricular organizada por período."
          />
          <Card
            title="Estágio supervisionado"
            description="Acesse as orientações e os documentos públicos necessários para acompanhar o estágio."
          />
          <Card
            title="TCC e produção discente"
            description="Veja normas, modelo de escrita e a biblioteca pública de trabalhos de conclusão."
          />
        </div>
      </Section>
    </div>
  );
}
