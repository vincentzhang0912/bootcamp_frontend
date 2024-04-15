
import logo from './logo.svg';
import './App.css';
import MyUseEffectCheck from './components/MyUseEffectCheck';
import MyUseEffectReturnCheck from './components/MyUseEffectReturnCheck';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';


function App() {
  return (
    <div className="App">
        <MyUseEffectCheck/>
        <hr/>
        <Routes>
          <Route path='/' element = {<MyUseEffectReturnCheck/>} />
          <Route path ="about" element ={<About/>} />
        </Routes>
   
    </div>
  );
}


export default App;