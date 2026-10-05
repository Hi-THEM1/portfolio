/**
 * One-shot IntersectionObserver fallback for scroll reveal on Safari / Firefox
 * where CSS animation-timeline: view() is not yet supported.
 * Never re-animates on scroll-up.
 */
export function initRevealObserver() {
  if (typeof window === 'undefined') return () => {};

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('is-revealed');
    });
    return () => {};
  }

  // If modern CSS scroll-driven animation-timeline is supported, let CSS handle it
  if (typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline', 'view()')) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.15,
    }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}
