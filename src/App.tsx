import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Research from './pages/Research';
import { CursorProvider } from './context/CursorContext';

function App() {
  return (
    <CursorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="research" element={<Research />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CursorProvider>
  );
}

export default App;