import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'src/Home';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
