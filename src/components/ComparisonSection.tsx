import React, { useState } from 'react';
import TextPressure from './TextPressure';

const items = [
  {
    index: '001',
    title: 'No Generic Playbooks',
    description:
      'Every engagement begins with a deep diagnostic of your unique operational context. We build for your business, not a template.',
  },
  {
    index: '002',
    title: 'Measurable ROI, Always',
    description:
      'Our implementations are tied to clear performance metrics and business outcomes from day one.',
  },
  {
    index: '003',
    title: 'Embedded Expertise',
    description:
      'Our consultants work alongside your teams — transferring knowledge, not creating dependency.',
  },
  {
    index: '004',
    title: 'End-to-End Ownership',
    description:
      'From initial strategy to live deployment and beyond, we manage the complete AI lifecycle.',
  },
];

const ComparisonItem: React.FC<{
  index: string;
  title: string;
  description: string;
}> = ({ index, title, description }) => {
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
        cursor: 'default',
        minHeight: '120px',
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
          paddingTop: '0.75rem',
        }}
      >
        {index}
      </span>
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: hovered ? '#1351AA' : '#141414',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            transition: 'color 0.3s linear',
            marginBottom: '0.75rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: '#444343',
            maxWidth: '600px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ComparisonSection: React.FC = () => {
  return (
    <section
      id="about"
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
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#7A7A7A',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              lineHeight: 1.4,
            }}
          >
            Why Are We Different?
          </span>
        </div>

        {/* Cols 3-12: Comparison list */}
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
              fontSize: 'clamp(3rem, 5vw, 5.5rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              color: '#141414',
              marginBottom: '3rem',
            }}
          >
            <TextPressure
              text="The Difference"
              minWeight={300}
              maxWeight={900}
              minWidth={75}
              maxWidth={125}
              maxDistance={240}
              style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' }}
            /><br />
            {'Is '}
            <TextPressure
              text="Deliberate."
              minWeight={300}
              maxWeight={900}
              minWidth={75}
              maxWidth={125}
              maxDistance={240}
              style={{ fontSize: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit', color: '#1351AA' }}
            />
          </h2>

          <div>
            {items.map((item, i) => (
              <ComparisonItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
