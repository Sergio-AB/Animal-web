import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;