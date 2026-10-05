import { useRef, useEffect, useState } from 'react';

/**
 * Reveal — one-shot IntersectionObserver wrapper.
 * Adds .is-visible at threshold 0.15, unobserves after firing.
 * Reduced motion: renders children immediately visible with no transition.
 *
 * @param {number} [delay=0]    – transition-delay in ms for staggered grids
 * @param {string} [className]  – extra classes to merge
 * @param {string} [as='div']   – HTML tag to render
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect reduced motion preference
  const [prefersReduced] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (prefersReduced || isVisible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced, isVisible]);

  const classes = [
    prefersReduced ? '' : 'reveal',
    prefersReduced || isVisible ? 'is-visible' : '',
    className,
  ].filter(Boolean).join(' ');

  const style = !prefersReduced && delay > 0
    ? { '--reveal-delay': `${delay}ms`, ...rest.style }
    : rest.style;

  return (
    <Tag ref={ref} className={classes} {...rest} style={style}>
      {children}
    </Tag>
  );
}
