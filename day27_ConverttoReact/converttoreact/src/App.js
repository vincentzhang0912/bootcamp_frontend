
import './App.css';
import Home from './components/Home';

import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route,Link} from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import PageNotFound from './components/PageNoFound';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Modal/>
      <Home/>
      <Footer/> */}

      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Products' element={<Products/>} />
        <Route path='PageNotFound' element={<PageNotFound/>} />

      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
