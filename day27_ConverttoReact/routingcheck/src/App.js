
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">


      <Navbar/>


      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<PageNotFound/>} />


      </Routes>


      {/* <Home/>
      <About/>
      <Contact/> */}




    </div>
  );
}


export default App;
