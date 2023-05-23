import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Sliders from './components/Sliders/Slider';

import Invoice from './components/Invoice/Invoice';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Invoice />} />
      <Route path="/slider" element={<Sliders />} />
    </Routes>
  </Router>
);

export default App;