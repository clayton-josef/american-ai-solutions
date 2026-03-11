import React from 'react';

const AccessSection: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: '50vh',
        borderBottom: '1px solid #C7C7C7',
      }}
    >
      <div
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
        {/* Cols 1-3: Section label */}
        <div
          style={{
            gridColumn: 'span 3',
            borderRight: '1px solid #C7C7C7',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingRight: '2rem',
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

        {/* Cols 4-12: CTA content */}
        <div
          style={{
            gridColumn: 'span 9',
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
              Start<br />
              Exploring.
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
