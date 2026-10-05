import Lenis from 'lenis';

/**
 * Centralized Lenis Scroll Engine
 * - Strict non-negotiable inertia configuration
 * - Shared rAF loop with live prefers-reduced-motion media query listener
 * - Manual scroll restoration across navigation/reloads
 * - Programmatic focus management on settle (WCAG 2.1 AA)
 */

let lenisInstance = null;
let rafId = null;
const scrollListeners = new Set();
let mediaQueryList = null;
let mediaQueryHandler = null;
const SCROLL_STORAGE_KEY = '__haythem_portfolio_scroll_y';

function raf(time) {
  if (lenisInstance) {
    lenisInstance.raf(time);
    rafId = requestAnimationFrame(raf);
  }
}

function handleScrollEvent(event) {
  try {
    sessionStorage.setItem(SCROLL_STORAGE_KEY, String(event.scroll));
  } catch {
    // SessionStorage may be restricted in private browsing
  }
  scrollListeners.forEach((cb) => {
    try {
      cb(event);
    } catch (err) {
      console.error('Error in scroll listener:', err);
    }
  });
}

function createLenis() {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.6,
    smoothWheel: true,
    syncTouch: false,
    autoRaf: false,
    anchors: { offset: -64 },
  });

  lenisInstance.on('scroll', handleScrollEvent);

  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(raf);

  // Restore scroll position if previously saved
  try {
    const saved = sessionStorage.getItem(SCROLL_STORAGE_KEY);
    if (saved !== null) {
      const targetY = parseFloat(saved);
      if (!Number.isNaN(targetY) && targetY > 0) {
        lenisInstance.scrollTo(targetY, { immediate: true });
      }
    }
  } catch {
    // Ignore storage errors
  }

  return lenisInstance;
}

export function initScroll() {
  if (typeof window === 'undefined') return;

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)');

  mediaQueryHandler = (e) => {
    if (e.matches) {
      // Reduced motion preferred: destroy Lenis and fallback to native scroll
      destroyScroll(false);
    } else {
      // Re-initialize Lenis when preference toggles back
      createLenis();
    }
  };

  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener('change', mediaQueryHandler);
  } else {
    mediaQueryList.addListener(mediaQueryHandler);
  }

  if (!mediaQueryList.matches) {
    createLenis();
  } else {
    // Native scroll restore fallback
    try {
      const saved = sessionStorage.getItem(SCROLL_STORAGE_KEY);
      if (saved) {
        const y = parseFloat(saved);
        if (!Number.isNaN(y)) window.scrollTo(0, y);
      }
    } catch {
      // Ignore storage errors
    }
  }

  // Also track native scroll if Lenis is not running (e.g. reduced-motion)
  const onNativeScroll = () => {
    if (!lenisInstance) {
      const scroll = window.scrollY;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      const progress = limit > 0 ? scroll / limit : 0;
      handleScrollEvent({
        scroll,
        limit,
        velocity: 0,
        direction: 0,
        progress,
      });
    }
  };

  window.addEventListener('scroll', onNativeScroll, { passive: true });
}

export function destroyScroll(fullCleanup = true) {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }

  if (fullCleanup && mediaQueryList && mediaQueryHandler) {
    if (mediaQueryList.removeEventListener) {
      mediaQueryList.removeEventListener('change', mediaQueryHandler);
    } else {
      mediaQueryList.removeListener(mediaQueryHandler);
    }
  }
}

export function scrollTo(target, options = {}) {
  const defaultOffset = -64;
  const mergedOptions = { offset: defaultOffset, ...options };

  const handleSettle = () => {
    mergedOptions.onComplete?.();

    // WCAG: Move programmatic focus to target element without native jump
    let el = null;
    if (typeof target === 'string') {
      const cleanSelector = target.startsWith('#') ? target : `#${target}`;
      el = document.querySelector(cleanSelector);
    } else if (target instanceof HTMLElement) {
      el = target;
    }

    if (el) {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }
  };

  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      ...mergedOptions,
      onComplete: handleSettle,
    });
  } else {
    let el = null;
    if (typeof target === 'string') {
      const cleanSelector = target.startsWith('#') ? target : `#${target}`;
      el = document.querySelector(cleanSelector);
    } else if (target instanceof HTMLElement) {
      el = target;
    }

    if (el) {
      el.scrollIntoView({ behavior: 'auto' });
      handleSettle();
    } else if (typeof target === 'number') {
      window.scrollTo(0, target);
      mergedOptions.onComplete?.();
    }
  }
}

export function onScroll(callback) {
  scrollListeners.add(callback);
  return () => {
    scrollListeners.delete(callback);
  };
}

export function getLenis() {
  return lenisInstance;
}
