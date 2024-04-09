import ReactDOM from 'react-dom';
import React from 'react';
const App = () => {
 return (<div>
   <h1>This is my nonCRA React app!</h1>;
 </div>
 )
 }
 
 let rootNode = ReactDOM.createRoot(document.getElementById('app'));
rootNode.render(<App />);