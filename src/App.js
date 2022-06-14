import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/portfolio';
import Mywork from './components/mywork';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/mywork' element={<Mywork />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
