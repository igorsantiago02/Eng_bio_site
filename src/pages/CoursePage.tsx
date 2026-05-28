import { BookOpenText, BriefcaseBusiness, Clock3, MoonStar } from 'lucide-react';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { courseHighlights, faqItems, programPillars } from '../data/content';

export function CoursePage() {
  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">O curso</span>
        <h1>Formação em engenharia aplicada à saúde, com base multidisciplinar e atuação ampla.</h1>
        <p>
          O curso de Engenharia Biomédica da UFRN integra engenharia, matemática, física, biologia
          e medicina em ambiente colaborativo e multidisciplinar.
        </p>
      </section>

      <Section
        title="Síntese do curso"
        description="O portal apresenta a formação, o ingresso, a carreira e os principais diferenciais acadêmicos da graduação."
      >
        <div className="icon-strip">
          <article className="icon-card">
            <BookOpenText size={22} />
            <div>
              <strong>Formação multidisciplinar</strong>
              <p>Integra engenharia, matemática, física, biologia e medicina.</p>
            </div>
          </article>
          <article className="icon-card">
            <BriefcaseBusiness size={22} />
            <div>
              <strong>Mercado e pesquisa</strong>
              <p>Atuação em hospitais, clínicas, indústria e centros de pesquisa.</p>
            </div>
          </article>
          <article className="icon-card">
            <Clock3 size={22} />
            <div>
              <strong>Estrutura acadêmica</strong>
              <p>3.700 horas com duração prevista de 11 períodos letivos.</p>
            </div>
          </article>
          <article className="icon-card">
            <MoonStar size={22} />
            <div>
              <strong>Turno noturno</strong>
              <p>Oferta de 40 vagas semestrais para o segundo ciclo do curso.</p>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Fontes oficiais"
        title="Apresentação, ingresso e carreira"
        description="Acesse as páginas públicas do curso no SIGAA para conhecer o funcionamento da graduação."
        muted
      >
        <div className="card-grid card-grid-3">
          {courseHighlights.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              footer={
                item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-link">
                    Abrir fonte oficial
                  </a>
                ) : null
              }
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Projeto pedagógico"
        title="Competências e pilares da formação"
        description="O PPC destaca competências gerais, perfil profissional e subáreas de aplicação da Engenharia Biomédica."
      >
        <div className="card-grid card-grid-2">
          {programPillars.map((pillar) => (
            <Card key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Perguntas frequentes"
        title="Informações essenciais do curso"
        description="Consulte respostas objetivas sobre ingresso, vagas, carga horária e áreas de atuação."
        muted
      >
        <div className="faq-list">
          {faqItems.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}
