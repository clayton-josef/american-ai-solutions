import React, { useRef, useEffect, useCallback } from 'react';

interface TextPressureProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  minWeight?: number;
  maxWeight?: number;
  minWidth?: number;
  maxWidth?: number;
  minSlant?: number;
  maxSlant?: number;
  maxDistance?: number;
}

const FONT_URL =
  'https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght,slnt@8..144,25..151,100..1000,-10..0&display=swap';

let fontInjected = false;
function injectFont() {
  if (fontInjected) return;
  fontInjected = true;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = FONT_URL;
  document.head.appendChild(link);
}

const TextPressure: React.FC<TextPressureProps> = ({
  text,
  className = '',
  style = {},
  minWeight = 100,
  maxWeight = 900,
  minWidth = 75,
  maxWidth = 125,
  minSlant = 0,
  maxSlant = -8,
  maxDistance = 220,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const mousePos = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    injectFont();
  }, []);

  const animate = useCallback(() => {
    charRefs.current.forEach(el => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mousePos.current.x - cx;
      const dy = mousePos.current.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist / maxDistance);

      const wght = Math.round(minWeight + (maxWeight - minWeight) * t);
      const wdth = Math.round(minWidth + (maxWidth - minWidth) * t);
      const slnt = minSlant + (maxSlant - minSlant) * t;

      el.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}, "slnt" ${slnt.toFixed(1)}`;
    });
    rafRef.current = requestAnimationFrame(animate);
  }, [maxDistance, minWeight, maxWeight, minWidth, maxWidth, minSlant, maxSlant]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const baseVarSettings = `"wght" ${minWeight}, "wdth" ${minWidth}, "slnt" ${minSlant}`;

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        fontFamily: "'Roboto Flex', sans-serif",
        display: 'inline',
        ...style,
      }}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={el => {
            charRefs.current[i] = el;
          }}
          style={{
            display: 'inline-block',
            fontVariationSettings: baseVarSettings,
            transition: 'font-variation-settings 0.08s linear',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default TextPressure;
