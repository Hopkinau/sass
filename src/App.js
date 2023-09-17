// Import React modules
import React from 'react';
import { 
  Routes, 
  Route 
} from 'react-router-dom';

// COMPONENTS:
import Layout from './components/layout/Layout';

// PAGES:
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">    
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;