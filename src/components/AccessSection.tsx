import React from 'react';
import TextPressure from './TextPressure';

const AccessSection: React.FC = () => {
  return (
    <section
      id="access"
      style={{
        minHeight: '50vh',
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
          minHeight: '50vh',
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
            Access
          </span>
        </div>

        {/* Cols 3-12: CTA content */}
        <div
          className="section-content"
          style={{
            gridColumn: 'span 10',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingLeft: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(4rem, 8vw, 9rem)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: '#141414',
                marginBottom: '2.5rem',
              }}
            >
              <TextPressure
                text="Start"
                minWeight={300}
                maxWeight={900}
                minWidth={75}
                maxWidth={125}
                maxDistance={260}
                style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
              /><br />
              <TextPressure
                text="Exploring."
                minWeight={300}
                maxWeight={900}
                minWidth={75}
                maxWidth={125}
                maxDistance={260}
                style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
              />
            </h2>

            <div
              style={{
                marginBottom: '3rem',
              }}
            >
              <p
                style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.5,
                  color: '#444343',
                  fontWeight: 400,
                  maxWidth: '560px',
                }}
              >
                Ready to implement AI that delivers measurable results?
                <br />
                Let's define your strategy together.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a
              href="mailto:info@americanaisolutions.com"
              style={{
                display: 'inline-block',
                backgroundColor: '#141414',
                color: '#E3E2DE',
                padding: '20px 40px',
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                borderRadius: 0,
                transition: 'background-color 0.3s linear',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1351AA')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#141414')}
            >
              Begin Your Engagement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
