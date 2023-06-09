import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from 'src/AppLayout';
import { ROUTES } from 'src/common/Routes';
import { ClickCountProvider } from 'src/context/ClickCountContext';
import About from 'src/Routes/About';
import Contact from 'src/Routes/Contact';
import Experience from 'src/Routes/Experience';
import Skillset from 'src/Routes/Skillset';

const App = () => {
  return (
    <ClickCountProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SKILLSET} element={<Skillset />} />
          <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </ClickCountProvider>
  );
};

export default App;
