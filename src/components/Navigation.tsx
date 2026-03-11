import React, { useState, useEffect } from 'react';
import { PillNav } from './PillNav';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(227,226,222,0.88)' : 'rgba(227,226,222,0)',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(199,199,199,0.6)' : '1px solid transparent',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
        boxSizing: 'border-box',
      }}
    >
      <PillNav
        logo={
          <img
            src="/AAS_Brand_Logo.jpeg"
            alt="American AI Solutions"
            style={{ height: '24px', width: 'auto', objectFit: 'contain', pointerEvents: 'none' }}
          />
        }
        logoAlt="American AI Solutions"
        logoHref="#"
        items={navItems}
        baseColor="#141414"
        pillColor="#E3E2DE"
        pillTextColor="#141414"
        hoveredPillTextColor="#E3E2DE"
        fullWidth
      />
    </header>
  );
};

export default Navigation;
