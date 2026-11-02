import { useEffect } from 'react';
import { ArrowRight, GraduationCap, Menu, Sparkles, X } from 'lucide-react';

const navItems = [
  { href: '#courses', label: 'Explore courses' },
  { href: '#categories', label: 'Categories' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#reviews', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header({ menuOpen, setMenuOpen, onNotify }) {
  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setMenuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <Sparkles size={14} /> <span>NEW SKILLS. NEW POSSIBILITIES.</span> Get 30% off your first course{' '}
        <a href="#courses">Explore offer <ArrowRight size={13} /></a>
      </div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="SkillNest home" onClick={close}>
          <span className="brand-mark"><GraduationCap size={21} /></span>
          <span>skill<span className="brand-accent">nest</span></span>
        </a>
        <nav id="main-nav" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="text-button login-btn" onClick={() => onNotify('Welcome back! Sign-in is coming soon.')}>Log in</button>
          <button className="button button-dark header-cta" onClick={() => onNotify('Your free account setup is coming soon.')}>
            Join for free <ArrowRight size={15} />
          </button>
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
