import React, { useState, useEffect } from 'react';

const navLinks = ['Services', 'About', 'Case Studies', 'Contact'];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '80px',
        zIndex: 50,
        borderBottom: '1px solid #C7C7C7',
        backgroundColor: scrolled ? 'rgba(227,226,222,0.95)' : 'rgba(227,226,222,0.98)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          height: '100%',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {/* Cols 1-3: Logo */}
        <div style={{ gridColumn: 'span 3' }}>
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: '#141414',
              fontWeight: 900,
              fontSize: '0.9rem',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
            }}
          >
            American <span style={{ color: '#1351AA' }}>AI</span> Solutions
          </a>
        </div>

        {/* Cols 4-9: empty */}
        <div style={{ gridColumn: 'span 6' }} />

        {/* Cols 10-12: Nav links */}
        <div
          style={{
            gridColumn: 'span 3',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                textDecoration: 'none',
                color: '#444343',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                transition: 'color 0.3s linear',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1351AA')}
              onMouseLeave={e => (e.currentTarget.style.color = '#444343')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
