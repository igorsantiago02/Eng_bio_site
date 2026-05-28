import logoEngbio from '../assets/logo-engbio.png';
import { Mail, MapPin } from 'lucide-react';
import { footerLinks, siteMeta } from '../data/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-top">
            <img src={logoEngbio} alt="Logo do curso de Engenharia Biomédica" className="footer-brand-logo" />
            <div>
              <h3>{siteMeta.name}</h3>
              <span>{siteMeta.subtitle}</span>
            </div>
          </div>
          <p>
            Portal com informações públicas sobre o curso, a graduação, a pesquisa, os informativos
            e os contatos institucionais da Engenharia Biomédica da UFRN.
          </p>
        </div>

        <div className="footer-column">
          <h4>Links institucionais</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contato</h4>
          <ul className="footer-contact">
            <li>
              <Mail size={16} />
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${siteMeta.departmentEmail}`}>{siteMeta.departmentEmail}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{siteMeta.campus}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
