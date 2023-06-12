import React, { useState, createContext } from 'react';
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
  };

  return (
    <ClickCountContext.Provider value={{ clickCount, incrementClickCount }}>
      {children}
    </ClickCountContext.Provider>
  );
};
