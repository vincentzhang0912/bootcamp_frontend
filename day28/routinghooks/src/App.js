
import './App.css';
import About from './components/About';
import CEO from './components/CEO';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <MyNavbar/>
     <Routes>
      <Route path='home' element= {<Home/>}/>
      <Route path='About' element= {<About/>}/>
      <Route path='ceo' element= {<CEO/>}/>
     </Routes>
    </div>
  );
}

export default App;
