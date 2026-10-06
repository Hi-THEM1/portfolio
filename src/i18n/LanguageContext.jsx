import { useState, useEffect, useCallback } from 'react';
import { LanguageContext } from './languageContextDef';

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'fr') return stored;
      const htmlLang = document.documentElement.lang;
      if (htmlLang === 'fr' || htmlLang === 'en') return htmlLang;
    }
    return 'en';
  });

  const setLang = useCallback((newLang) => {
    const target = newLang === 'fr' ? 'fr' : 'en';
    setLangState(target);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('lang', target);
      } catch {}
      document.documentElement.lang = target;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'fr' : 'en');
  }, [lang, setLang]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  /**
   * Helper function t(obj):
   * If obj is a localized object { en: '...', fr: '...' }, returns the string for current lang.
   * If fallback is needed, falls back to .en, or returns the primitive string/number as is.
   */
  const t = useCallback(
    (obj, fallback = '') => {
      if (obj === null || obj === undefined) return fallback;
      if (typeof obj === 'object') {
        if (obj[lang] !== undefined) return obj[lang];
        if (obj.en !== undefined) return obj.en;
        return fallback;
      }
      return obj;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
