import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article'
// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Words On Words</h1>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          {/* Wildcard route sends you home (or 404) */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
