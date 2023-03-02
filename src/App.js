import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import ContactForm from './Pages/ContactForm';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "./Styles/Navbar.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/experience' element={< Experience/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
