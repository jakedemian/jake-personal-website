import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';

import AppLayout from 'src/AppLayout';
import { ROUTES } from 'src/common/Routes';
import About from 'src/Routes/About';
import Contact from 'src/Routes/Contact';
import Experience from 'src/Routes/Experience';
import Skillset from 'src/Routes/Skillset';

const fetchCount = async () => {
  const response = await fetch('/api/getCount');
  if (!response.ok) {
    throw new Error('Error fetching count');
  }
  const data = await response.json();
  return data.clickCount.value;
};

const App = () => {
  const { data: initialCount /* , error */ } = useQuery('count', fetchCount);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const handleClick = () => {
    if (count != null) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Current count: {count}</p>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SKILLSET} element={<Skillset />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
