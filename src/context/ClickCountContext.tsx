import React, { useState, createContext, useEffect } from 'react';
import { useQuery } from 'react-query';

const CLICK_COUNT_QUERY_KEY = 'CLICK_COUNT_QUERY_KEY';

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

  useQuery(CLICK_COUNT_QUERY_KEY, fetchCount, {
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

  const incrementLocalClickCount = () => {
    if (clickCount === null) return;
    setClickCount(oldCount => (oldCount as number) + 1);
    setClicksSinceLastUpdate(old => old + 1);
  };

  // TODO this "update if you havent clicked in the last 250ms" logic is
  // confusing and unintuitive, I should probably refactor it
  let timerId: NodeJS.Timeout | null = null;
  useEffect(() => {
    // TODO this should be a mutation?
    const updateCount = async (clicksToAdd: number) => {
      fetch('/api/updateCount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clicksToAdd }),
      });
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
    <ClickCountContext.Provider
      value={{ clickCount, incrementClickCount: incrementLocalClickCount }}
    >
      {children}
    </ClickCountContext.Provider>
  );
};
