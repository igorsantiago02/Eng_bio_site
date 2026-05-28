import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoEngbio from '../assets/logo-engbio.png';
import { navItems, siteMeta } from '../data/content';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 920) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link to="/" className="brand" aria-label="Ir para a página inicial">
          <span className="brand-mark" aria-hidden="true">
            <img src={logoEngbio} alt="" className="brand-logo" />
          </span>
          <span className="brand-copy">
            <strong>{siteMeta.name}</strong>
            <small>{siteMeta.subtitle}</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="primary-navigation"
          className={isOpen ? 'primary-nav primary-nav-open' : 'primary-nav'}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contato" className="button button-small button-primary" onClick={() => setIsOpen(false)}>
            Falar com a coordenação
          </Link>
        </nav>
      </div>
    </header>
  );
}
