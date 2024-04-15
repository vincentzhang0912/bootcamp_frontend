
import './App.css';
import Home from './components/Home';

import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import PageNotFound from './components/PageNoFound';
import Login from './components/Login';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 获取页面内容的高度
    const contentHeight = document.documentElement.scrollHeight;

    // 获取视口的高度
    const viewportHeight = window.innerHeight;

    // 判断页面内容是否超过一个视口的高度
    if (contentHeight > viewportHeight) {
      // 如果内容超过一个视口的高度，则将页脚的位置设置为相对定位
      const footer = document.querySelector('.footer');
      footer.style.position = 'relative';
    } else {
      // 如果内容不超过一个视口的高度，则将页脚的位置设置为固定定位
      const footer = document.querySelector('.footer');
      footer.style.position = 'fixed';
      footer.style.bottom = '0';
    }
  }, []);
  return (
    <div className="App">
      {/* <Navbar/>
      <Modal/>
      <Home/>
      <Footer/> */}

      <Navbar/> 
      <Login/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Products' element={<Products/>} />
        <Route path='*' element={<PageNotFound/>} />

      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
