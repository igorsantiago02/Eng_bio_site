import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  FileText,
  GraduationCap,
  Microscope,
  Newspaper,
  Phone,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logoEngbio from '../assets/logo-engbio.png';
import { Card } from '../components/Card';
import { CurriculumExplorer } from '../components/CurriculumExplorer';
import { Section } from '../components/Section';
import {
  calendarItems,
  curriculumReferencePeriods,
  heroStats,
  homepageHighlights,
  labs,
  newsItems,
  people,
  quickActions,
  siteMeta,
} from '../data/content';

const homeCards = [
  {
    key: 'curso',
    title: 'Curso',
    description: 'Apresentação geral, ingresso, perfil profissional e atuação do engenheiro biomédico.',
    route: '/curso',
    cta: 'Abrir página do curso',
    icon: GraduationCap,
  },
  {
    key: 'grade',
    title: 'Grade curricular',
    description: 'Estrutura por períodos e consulta direta da matriz dentro do próprio portal.',
    route: '/graduacao',
    cta: 'Abrir página da graduação',
    icon: FileText,
  },
  {
    key: 'pesquisa',
    title: 'Pesquisa',
    description: 'Laboratórios, subáreas e frentes acadêmicas ligadas à saúde e à tecnologia.',
    route: '/pesquisa',
    cta: 'Abrir página de pesquisa',
    icon: Microscope,
  },
  {
    key: 'pessoas',
    title: 'Pessoas',
    description: 'Coordenação, departamento, docentes e equipe administrativa do curso.',
    route: '/pessoas',
    cta: 'Abrir página de pessoas',
    icon: Users,
  },
  {
    key: 'informativos',
    title: 'Informativos',
    description: 'Editais, acolhimento, oportunidades e publicações recentes do curso.',
    route: '/informativos',
    cta: 'Abrir informativos',
    icon: Newspaper,
  },
  {
    key: 'contato',
    title: 'Contato',
    description: 'Canais institucionais da coordenação, departamento e base do curso no CT.',
    route: '/contato',
    cta: 'Abrir contatos',
    icon: Phone,
  },
] as const;

type HomeCardKey = (typeof homeCards)[number]['key'];

export function HomePage() {
  const [activeCard, setActiveCard] = useState<HomeCardKey>('curso');

  const activeItem = useMemo(
    () => homeCards.find((item) => item.key === activeCard) ?? homeCards[0],
    [activeCard],
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Bem-vindo ao Curso de Engenharia Biomédica</span>
            <p className="hero-subtitle">UFRN - Centro de Tecnologia</p>
            <h1>
              Site voltado especialmente para apoiar a nossa comunidade acadêmica, ajudando não
              apenas quem está ingressando no curso, mas também todos os alunos.
            </h1>
            <p className="hero-text">
              A Engenharia Biomédica é uma profissão reconhecida pelo CONFEA/CREA desde 2007, que
              realiza uma perfeita integração entre as áreas de exatas, tecnológica e saúde. O
              engenheiro biomédico pode exercer suas habilidades profissionais junto a hospitais,
              universidades, institutos de pesquisa e empresas médicas.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  setActiveCard('grade');
                  document
                    .getElementById('portal-home-panels')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Ver grade curricular
              </button>
              <Link to="/contato" className="button button-secondary">
                Falar com a coordenação
              </Link>
            </div>

            <div className="hero-tags" aria-label="Destaques institucionais">
              <span>Formação multidisciplinar</span>
              <span>Saúde + engenharia</span>
              <span>Turno noturno</span>
              <span>Pesquisa aplicada</span>
            </div>
          </div>

          <aside className="hero-panel hero-logo-panel">
            <div className="hero-crest">
              <img src={logoEngbio} alt="Logo do curso de Engenharia Biomédica" />
            </div>

            <div className="hero-panel-top">
              <h2>Navegação principal</h2>
              <p>
                Cada card da home abre um conteúdo diferente, sem jogar tudo em uma única rolagem.
              </p>
            </div>

            <div className="quick-actions">
              {quickActions.map((action) => (
                <Link to={action.path} key={action.title} className="quick-action">
                  <div>
                    <strong>{action.title}</strong>
                    <span>{action.description}</span>
                  </div>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div className="container stats-grid">
          {heroStats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <small>{stat.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <div className="container stack">
        <section id="portal-home-panels">
          <Section
            eyebrow="Acesso por cards"
            title="Escolha uma área do portal"
            description="Na página inicial, cada card abre um painel diferente para você navegar com mais clareza."
          >
            <div className="portal-switcher">
              {homeCards.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.key}
                    type="button"
                    className={item.key === activeCard ? 'portal-card portal-card-active' : 'portal-card'}
                    onClick={() => setActiveCard(item.key)}
                  >
                    <div className="portal-card-top">
                      <Icon size={22} />
                      <span>{item.title}</span>
                    </div>
                    <p>{item.description}</p>
                  </button>
                );
              })}
            </div>
          </Section>
        </section>

        <Section
          eyebrow="Painel dinâmico"
          title={activeItem.title}
          description={activeItem.description}
          muted
        >
          <div className="portal-preview">
            <div className="portal-preview-head">
              <div>
                <span className="eyebrow">Área selecionada</span>
                <h3>{activeItem.title}</h3>
                <p>
                  Conteúdo resumido na home para facilitar a consulta, com acesso à página completa
                  quando você quiser aprofundar.
                </p>
              </div>

              {activeCard !== 'grade' ? (
                <Link to={activeItem.route} className="button button-primary">
                  {activeItem.cta}
                </Link>
              ) : null}
            </div>

            {activeCard === 'curso' ? (
              <div className="card-grid card-grid-3">
                {homepageHighlights.map((item) => (
                  <Card
                    key={item.title}
                    eyebrow={item.eyebrow}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            ) : null}

            {activeCard === 'grade' ? (
              <CurriculumExplorer periods={curriculumReferencePeriods} compact />
            ) : null}

            {activeCard === 'pesquisa' ? (
              <div className="card-grid card-grid-3">
                {labs.slice(0, 3).map((lab) => (
                  <Card
                    key={lab.name}
                    eyebrow={lab.type}
                    title={lab.name}
                    description={lab.summary}
                    footer={<span>{lab.detail}</span>}
                  />
                ))}
              </div>
            ) : null}

            {activeCard === 'pessoas' ? (
              <div className="mini-people-grid">
                {people.slice(0, 4).map((person) => (
                  <article key={person.name} className="mini-person-card">
                    <span className="card-eyebrow">{person.team}</span>
                    <h3>{person.name}</h3>
                    <strong>{person.role}</strong>
                    <p>{person.summary}</p>
                  </article>
                ))}
              </div>
            ) : null}

            {activeCard === 'informativos' ? (
              <div className="news-list">
                {newsItems.slice(0, 3).map((item) => (
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
            ) : null}

            {activeCard === 'contato' ? (
              <div className="mini-contact-grid">
                <article className="contact-card">
                  <span className="contact-label">Coordenação</span>
                  <h3>Secretaria do curso</h3>
                  <p>Canal principal para orientações acadêmicas da graduação em Engenharia Biomédica.</p>
                  <div className="contact-lines">
                    <span>{siteMeta.email}</span>
                    <span>Sala 306-A / CTEC</span>
                  </div>
                </article>

                <article className="contact-card">
                  <span className="contact-label">Departamento</span>
                  <h3>Departamento de Engenharia Biomédica</h3>
                  <p>Apoio institucional e administrativo vinculado ao Centro de Tecnologia.</p>
                  <div className="contact-lines">
                    <span>{siteMeta.departmentEmail}</span>
                    <span>Sala 307 / CTEC</span>
                  </div>
                </article>

                <article className="contact-card">
                  <span className="contact-label">Base institucional</span>
                  <h3>{siteMeta.campus}</h3>
                  <p>Referência do curso para contato, atendimento e localização dentro da UFRN.</p>
                  <div className="contact-lines">
                    <span>Natal/RN</span>
                    <span>Curso noturno</span>
                  </div>
                </article>
              </div>
            ) : null}
          </div>
        </Section>

        <Section
          eyebrow="Calendário acadêmico"
          title="Marcos importantes do período"
          description="Resumo rápido na home para o aluno localizar datas essenciais sem percorrer o site inteiro."
        >
          <div className="timeline">
            {calendarItems.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-icon">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
