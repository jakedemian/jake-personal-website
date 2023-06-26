import { useEffect, useState } from 'react';

import { breakpoints } from 'src/common/breakpoints';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < breakpoints.lg
  );

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    const updateIsMobile = () => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        setIsMobile(window.innerWidth < breakpoints.lg);
      }, 50);
    };

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  return isMobile;
};
