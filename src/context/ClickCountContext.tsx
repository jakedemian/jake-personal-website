import React, { useState, createContext, useEffect } from 'react';
import { useQuery } from 'react-query';

type ContextState = {
  clickCount: number | null;
  incrementClickCount: () => void;
};

const defaultContextState = {
  clickCount: null,
  incrementClickCount: () => undefined,
};

export const ClickCountContext =
  createContext<ContextState>(defaultContextState);

export const ClickCountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clickCount, setClickCount] = useState<number | null>(null);
  const [clicksSinceLastUpdate, setClicksSinceLastUpdate] = useState<number>(0);

  const fetchCount = async () => {
    const response = await fetch('/api/getCount');
    if (!response.ok) {
      throw new Error('Error fetching count');
    }
    const data = await response.json();
    return data.clickCount.value;
  };

  useQuery('count', fetchCount, {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    onSuccess: (data: number) => {
      setClickCount(data);
    },
    onError: err => {
      console.error('Error fetching click count: ', err);
    },
  });

  const incrementClickCount = () => {
    if (clickCount === null) return;
    setClickCount(oldCount => (oldCount as number) + 1);
    setClicksSinceLastUpdate(old => old + 1);
  };

  let timerId: NodeJS.Timeout | null = null;
  useEffect(() => {
    const updateCount = async (clicksToAdd: number) => {
      console.log('Sending update value:', clicksToAdd);
    };

    if (clicksSinceLastUpdate === 0) return;

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      updateCount(clicksSinceLastUpdate);
      setClicksSinceLastUpdate(0);
    }, 250);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [clicksSinceLastUpdate]);

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};
