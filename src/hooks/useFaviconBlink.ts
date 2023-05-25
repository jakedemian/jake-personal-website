import { useEffect } from 'react';

export const useFaviconBlink = () => {
  useEffect(() => {
    let isFaviconVisible = true;

    const faviconVisible = '/favicon.ico';
    const faviconHidden = '/favicon_blank.ico';

    const intervalId = setInterval(() => {
      const link: HTMLLinkElement | null =
        document.querySelector("link[rel*='icon']");

      if (!link) {
        return;
      }

      isFaviconVisible = !isFaviconVisible;

      link.href = isFaviconVisible ? faviconVisible : faviconHidden;
    }, 750);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
};
