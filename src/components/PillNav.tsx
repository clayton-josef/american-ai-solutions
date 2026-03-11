/**
 * PillNav – GSAP-powered pill navigation (adapted for anchor-only single-page sites).
 */
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo?: React.ReactNode;
  logoAlt?: string;
  logoHref?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
  /** Stretch the nav bar to fill its container width */
  fullWidth?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  logoHref = '#',
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = '#141414',
  pillColor = '#E3E2DE',
  hoveredPillTextColor = '#E3E2DE',
  pillTextColor,
  initialLoadAnimation = true,
  fullWidth = false,
}) => {
  const resolvedPillTextColor = pillTextColor ?? '#141414';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoIconRef = useRef<HTMLDivElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;
        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.8, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    if (document.fonts) document.fonts.ready.then(layout).catch(() => {});

    if (initialLoadAnimation && navItemsRef.current) {
      const listItems = navItemsRef.current.querySelectorAll('li');
      gsap.set(listItems, { opacity: 0, x: -16 });
      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        delay: 0.3,
      });
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.4, ease, overwrite: 'auto' });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.3, ease, overwrite: 'auto' });
  };

  const handleLogoHover = () => {
    if (!logoIconRef.current) return;
    const el = logoIconRef.current;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(el, {
      rotate: 360,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
      overwrite: 'auto',
      onComplete: () => { gsap.set(el, { rotate: 0 }); },
    });
  };

  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (next) {
      gsap.set(menu, { display: 'block', opacity: 0, y: -16 });
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
    } else {
      const menuEl = menu;
      gsap.to(menuEl, {
        opacity: 0,
        y: -16,
        duration: 0.25,
        ease: 'power3.in',
        onComplete: () => { gsap.set(menuEl, { display: 'none' }); },
      });
    }
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '40px',
    '--pill-pad-x': '14px',
    '--pill-gap': '3px',
  } as React.CSSProperties;

  const basePillCls =
    'relative overflow-hidden inline-flex items-center justify-center h-[calc(var(--nav-h)-8px)] self-center rounded-full font-semibold text-xs uppercase tracking-wider cursor-pointer select-none whitespace-nowrap';

  return (
    <div
      className={`relative ${className}`}
      style={{ ...cssVars, width: fullWidth ? '100%' : undefined }}
    >
      <nav
        className="flex items-center gap-2"
        aria-label="Primary"
        style={{ width: fullWidth ? '100%' : undefined }}
      >
        {/* Logo bubble */}
        <div onMouseEnter={handleLogoHover} style={{ flexShrink: 0 }}>
          <a
            href={logoHref}
            aria-label={logoAlt}
            className="flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            style={{
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--base)',
              color: 'var(--pill-bg)',
            }}
          >
            <div ref={logoIconRef} className="flex items-center justify-center">
              {logo}
            </div>
          </a>
        </div>

        {/* Spacer — pushes pills to the right when fullWidth */}
        {fullWidth && <div style={{ flex: 1 }} />}

        {/* Desktop pill strip */}
        <div
          ref={navItemsRef}
          className="hidden md:flex items-center rounded-full px-1"
          style={{ height: 'var(--nav-h)', background: 'var(--base)', flexShrink: 0 }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-0 h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle: React.CSSProperties = {
                background: 'var(--pill-bg)',
                color: 'var(--pill-text)',
                paddingLeft: 'var(--pill-pad-x)',
                paddingRight: 'var(--pill-pad-x)',
              };
              return (
                <li key={item.href} role="none" className="flex items-center">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillCls}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {/* Rising background circle */}
                    <span
                      ref={el => { circleRefs.current[i] = el; }}
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{ background: 'var(--base)', willChange: 'transform' }}
                      aria-hidden="true"
                    />
                    {/* Label stack (slides up on hover) */}
                    <span className="label-stack relative inline-block leading-none z-[2] overflow-hidden py-1">
                      <span
                        className="pill-label relative z-[2] inline-block"
                        style={{ willChange: 'transform' }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center"
                        style={{ color: 'var(--hover-text)', willChange: 'transform, opacity' }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1 h-1 rounded-full z-[4]"
                        style={{ background: 'var(--base)' }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex items-center justify-center rounded-full"
          style={{
            width: 'var(--nav-h)',
            height: 'var(--nav-h)',
            background: 'var(--base)',
            color: 'var(--pill-bg)',
            flexShrink: 0,
          }}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full right-0 mt-2 rounded-2xl overflow-hidden shadow-2xl z-50 hidden"
        style={{ background: 'var(--base)', minWidth: '180px' }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 px-5 text-xs font-semibold uppercase tracking-widest rounded-xl transition-colors"
                style={{ color: hoveredPillTextColor }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
