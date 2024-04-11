
import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Modal/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
