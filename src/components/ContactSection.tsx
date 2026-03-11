import React, { useState } from 'react';

const contacts = [
  {
    name: 'Clayton Josef',
    role: 'Co-Founder',
    email: 'clayton@american-ai-solutions.com',
  },
  {
    name: 'Zoen Howley',
    role: 'Co-Founder',
    email: 'zoen@american-ai-solutions.com',
  },
];

const ContactCard: React.FC<{ name: string; role: string; email: string; index: string }> = ({
  name,
  role,
  email,
  index,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        borderTop: '1px solid #C7C7C7',
        padding: '2.5rem 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '2rem',
        transition: 'background-color 0.3s linear',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#7A7A7A',
          fontWeight: 700,
          letterSpacing: '0.1em',
          minWidth: '3rem',
          paddingTop: '0.5rem',
        }}
      >
        {index}
      </span>

      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#7A7A7A',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            {role}
          </span>
        </div>
        <h3
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: hovered ? '#1351AA' : '#141414',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            transition: 'color 0.3s linear',
            marginBottom: '1rem',
          }}
        >
          {name}
        </h3>
        <a
          href={`mailto:${email}`}
          style={{
            fontSize: '0.9375rem',
            color: '#444343',
            textDecoration: 'none',
            fontWeight: 500,
            letterSpacing: '0.01em',
            borderBottom: '1px solid #C7C7C7',
            paddingBottom: '2px',
            transition: 'color 0.3s linear, border-color 0.3s linear',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#1351AA';
            e.currentTarget.style.borderColor = '#1351AA';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#444343';
            e.currentTarget.style.borderColor = '#C7C7C7';
          }}
        >
          {email}
        </a>
      </div>

      {/* Arrow indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '0.5rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'opacity 0.3s linear, transform 0.3s linear',
          color: '#1351AA',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        borderBottom: '1px solid #C7C7C7',
      }}
    >
      <div
        className="section-grid"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem',
        }}
      >
        {/* Col 1-2: Section label */}
        <div
          className="section-sidebar"
          style={{
            gridColumn: 'span 2',
            borderRight: '1px solid #C7C7C7',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingRight: '1.5rem',
          }}
        >
          <span
            style={{
              position: 'sticky',
              top: '8rem',
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#7A7A7A',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Team
          </span>
        </div>

        {/* Cols 3-12: Contact list */}
        <div
          className="section-content"
          style={{
            gridColumn: 'span 10',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingLeft: '2rem',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: '#141414',
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}
          >
            Get in<br />
            <span style={{ color: '#1351AA' }}>Touch.</span>
          </h2>

          <div>
            {contacts.map((contact, i) => (
              <ContactCard
                key={contact.email}
                index={String(i + 1).padStart(2, '0')}
                {...contact}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
