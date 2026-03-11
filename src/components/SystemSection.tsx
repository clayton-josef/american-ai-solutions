import React, { useState } from 'react';
import TextPressure from './TextPressure';

const features = [
  {
    index: '01',
    title: 'Strategic AI Architecture',
    description:
      'We design scalable, secure AI infrastructure tailored to your enterprise environment — from data pipelines to model deployment and governance frameworks.',
  },
  {
    index: '02',
    title: 'Intelligent Automation',
    description:
      'Eliminate operational inefficiencies with bespoke automation solutions. Our systems integrate seamlessly with existing workflows to amplify human productivity.',
  },
  {
    index: '03',
    title: 'Predictive Intelligence',
    description:
      'Leverage advanced machine learning models to anticipate market shifts, optimize resource allocation, and make decisions grounded in real-time data.',
  },
];

const FeatureCard: React.FC<{ index: string; title: string; description: string }> = ({
  index,
  title,
  description,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #C7C7C7',
        padding: '2rem',
        borderRadius: 0,
        backgroundColor: hovered ? 'rgba(255,255,255,0.4)' : 'transparent',
        transition: 'background-color 0.3s linear',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#7A7A7A',
          fontWeight: 700,
          marginBottom: '1.5rem',
          letterSpacing: '0.1em',
        }}
      >
        {index}
      </div>
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#141414',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.9375rem',
          lineHeight: 1.6,
          color: '#444343',
          fontWeight: 400,
        }}
      >
        {description}
      </p>
    </div>
  );
};

const SystemSection: React.FC = () => {
  return (
    <section
      id="services"
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
            System
          </span>
        </div>

        {/* Cols 3-12: Main content */}
        <div
          className="section-content"
          style={{
            gridColumn: 'span 10',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            paddingLeft: '2rem',
          }}
        >
          {/* Large stacked headline */}
          <h2
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: '#141414',
              marginBottom: '4rem',
            }}
          >
            <TextPressure
              text="Precision."
              minWeight={300}
              maxWeight={900}
              minWidth={75}
              maxWidth={125}
              maxDistance={240}
              style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
            /><br />
            <TextPressure
              text="Scale."
              minWeight={300}
              maxWeight={900}
              minWidth={75}
              maxWidth={125}
              maxDistance={240}
              style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
            /><br />
            <TextPressure
              text="Impact."
              minWeight={300}
              maxWeight={900}
              minWidth={75}
              maxWidth={125}
              maxDistance={240}
              style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
            />
          </h2>

          {/* 3-column feature grid */}
          <div
            className="feature-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0',
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
