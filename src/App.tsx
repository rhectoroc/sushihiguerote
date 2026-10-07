import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Privacidad, Seguridad, Terminos } from './pages/LegalPages';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </Router>
  );
}

export default App;
