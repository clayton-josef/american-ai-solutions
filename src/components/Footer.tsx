import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="footer-grid"
      style={{
        borderTop: '1px solid #C7C7C7',
        padding: '2.5rem 2rem',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          gridColumn: 'span 4',
          fontSize: '0.75rem',
          color: '#7A7A7A',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}
      >
        © {new Date().getFullYear()} American AI Solutions. All rights reserved.
      </div>

      <div style={{ gridColumn: 'span 4' }} />

      <div
        className="footer-links"
        style={{
          gridColumn: 'span 4',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '2rem',
        }}
      >
        {['Privacy Policy', 'Terms of Service'].map(link => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: '0.75rem',
              color: '#7A7A7A',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.05em',
              transition: 'color 0.3s linear',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#141414')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7A7A7A')}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
