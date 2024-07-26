import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Gallery from './component/Gallery/Gallery';
import Services from './component/Services/Services';
import About from './component/About/About';
import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <div className="App overflow-clip">
      <Router>
    <Nav/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/gallery" element={<Gallery/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>
    </Router>
    </div>
  );
}

export default App;
