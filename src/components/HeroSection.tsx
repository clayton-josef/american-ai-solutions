import React from 'react';
import ShinyText from './ShinyText';
import TextPressure from './TextPressure';

const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        borderBottom: '1px solid #C7C7C7',
        paddingTop: '80px',
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
          minHeight: 'calc(100vh - 80px)',
        }}
      >
        {/* Col 1-2: Manifesto label */}
        <div
          style={{
            gridColumn: 'span 2',
            borderRight: '1px solid #C7C7C7',
            paddingTop: '4rem',
            paddingRight: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#141414',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#7A7A7A',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Manifesto
          </span>
        </div>

        {/* Cols 3-12: Hero content */}
        <div
          style={{
            gridColumn: 'span 10',
            paddingTop: '4rem',
            paddingLeft: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: '5rem',
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            {/* Small logo + tagline row */}
            <div
              style={{
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <img
                src="/AAS_Brand_Logo.jpeg"
                alt="American AI Solutions"
                style={{ height: '52px', width: 'auto' }}
              />
              <div
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.25em',
                }}
              >
                <ShinyText
                  text="INNOVATION THROUGH FORCE"
                  speed={4}
                  color="#7A7A7A"
                  shineColor="#1351AA"
                  spread={90}
                />
              </div>
            </div>

            {/* Large company name with ShinyText */}
            <div
              style={{
                marginBottom: '2rem',
                fontSize: 'clamp(2.25rem, 5vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              <ShinyText
                text="American AI Solutions"
                speed={5}
                color="#141414"
                shineColor="#1351AA"
                spread={110}
                delay={0.5}
              />
            </div>

            {/* Hero headline with TextPressure */}
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 9rem)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                color: '#141414',
                marginBottom: '3rem',
              }}
            >
              <TextPressure
                text="Intelligence"
                minWeight={400}
                maxWeight={900}
                minWidth={80}
                maxWidth={120}
                maxDistance={260}
                style={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                  letterSpacing: 'inherit',
                }}
              />
              <br />
              <TextPressure
                text="That "
                minWeight={400}
                maxWeight={900}
                minWidth={80}
                maxWidth={120}
                maxDistance={260}
                style={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                  letterSpacing: 'inherit',
                }}
              />
              <TextPressure
                text="Drives"
                minWeight={400}
                maxWeight={900}
                minWidth={80}
                maxWidth={120}
                maxDistance={260}
                style={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                  letterSpacing: 'inherit',
                  color: '#1351AA',
                }}
              />
              <br />
              <TextPressure
                text="Results."
                minWeight={400}
                maxWeight={900}
                minWidth={80}
                maxWidth={120}
                maxDistance={260}
                style={{
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  lineHeight: 'inherit',
                  letterSpacing: 'inherit',
                }}
              />
            </h1>
          </div>

          {/* Below headline: 2-col grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '400px 1fr',
              gap: '3rem',
              alignItems: 'flex-end',
            }}
          >
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: '#444343',
                fontWeight: 400,
              }}
            >
              American AI Solutions delivers enterprise-grade artificial intelligence
              consulting and implementation services. We transform complex operational
              challenges into competitive advantages through precision-engineered AI systems.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#1351AA',
                  color: '#E3E2DE',
                  padding: '16px 32px',
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
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#141414')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1351AA')}
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                style={{
                  textDecoration: 'underline',
                  color: '#444343',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'color 0.3s linear',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1351AA')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444343')}
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
