
import './App.css';
import MyNavbar from './components/MyNavbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CEO from './components/CEO';
import Student from './components/Student';
import CTO from './components/CTO';
import SearchParamsCheck from './components/SearchParamsCheck';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="ceo" element={<CEO/>} />
        <Route path="student/:id/:name" element={<Student/>} />
        <Route path="cto" element={<CTO/>} />
        <Route path ="searchparams" element={<SearchParamsCheck/>}/>
        <Route path="*" element={<h4> Sorry! Could not find what you are looking for! </h4>} />
        
      </Routes>


    </div>
  );
}

export default App;

