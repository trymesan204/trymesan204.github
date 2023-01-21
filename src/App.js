import './App.css';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
      <Navigation />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

export default App;
