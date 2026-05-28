import { Mail, MapPin, Phone } from 'lucide-react';
import { Section } from '../components/Section';
import { siteMeta } from '../data/content';

export function ContactPage() {
  return (
    <div className="container stack page-top">
      <section className="page-hero page-hero-compact">
        <span className="eyebrow">Contato</span>
        <h1>Coordenação, departamento e localização do curso.</h1>
        <p>
          Consulte os principais canais institucionais da Engenharia Biomédica da UFRN para
          demandas acadêmicas e administrativas.
        </p>
      </section>

      <Section
        title="Canais principais"
        description="Contatos do curso e do departamento reunidos em uma única página."
      >
        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-label">Coordenação do curso</span>
            <h3>Secretaria do curso</h3>
            <p>Canal direto para orientações acadêmicas relacionadas à graduação em Engenharia Biomédica.</p>
            <div className="contact-lines">
              <span><Mail size={16} /> <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></span>
              <span><MapPin size={16} /> Sala 306-A / CTEC</span>
            </div>
          </article>

          <article className="contact-card">
            <span className="contact-label">Departamento</span>
            <h3>Departamento de Engenharia Biomédica</h3>
            <p>Canal institucional complementar para assuntos administrativos e departamentais.</p>
            <div className="contact-lines">
              <span><Mail size={16} /> <a href={`mailto:${siteMeta.departmentEmail}`}>{siteMeta.departmentEmail}</a></span>
              <span><MapPin size={16} /> Sala 307 / CTEC</span>
            </div>
          </article>

          <article className="contact-card">
            <span className="contact-label">Localização</span>
            <h3>{siteMeta.campus}</h3>
            <p>Base institucional vinculada ao Centro de Tecnologia da Universidade Federal do Rio Grande do Norte.</p>
            <div className="contact-lines">
              <span><MapPin size={16} /> Natal/RN</span>
              <span><Phone size={16} /> Consulte o portal oficial da UFRN para canais adicionais</span>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Atendimento institucional"
        title="Quando usar cada contato"
        description="A página organiza os canais por contexto para facilitar o encaminhamento das demandas."
        muted
      >
        <div className="card-grid card-grid-3">
          <article className="card">
            <h3>Coordenação</h3>
            <p>Use para tratar orientações acadêmicas, secretaria e rotinas da graduação.</p>
          </article>
          <article className="card">
            <h3>Departamento</h3>
            <p>Use para temas administrativos e assuntos ligados à gestão departamental.</p>
          </article>
          <article className="card">
            <h3>Localização</h3>
            <p>Use como referência para visitas, comunicação institucional e presença no Centro de Tecnologia.</p>
          </article>
        </div>
      </Section>
    </div>
  );
}
