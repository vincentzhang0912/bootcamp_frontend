import {useEffect, useState} from 'react'
const UseEffectCheck = () => {
  let [counter,setCounter]=useState(0);
  let [str,setStr]=useState("--");
  
  //useEffect is used as componentWillMount in class Component

  //this is called before mounting/rendering the component
  //will be called twice if index.js has strict mode on.
  //componnetWillUpdate,componentDidUpdate

  //gets called every time component re-renders
  //componentWillUpdate,componentDidUpdate
  useEffect(()=>{
    console.log('From use effect');
    //used to we need to talk to remote server  to get details and store it in state
    //we write code that will be called when ever component is re-render
    document.title = counter + str;
    //gets checked each time state variable counter changes
    (counter %2===0) ? console.log("Even" ) :console.log("odd")
  },[counter,str]);//[] empty square brackets indicate that call this blocak //call-back

  let clickHandler=()=>{
    counter++;
    setCounter(counter);
  }
  let clickHandlerStr=()=>{
    str +="**"
    setStr(str)
  }
  let clickHandlerDer=()=>{
    setCounter(--counter)
  }

  return ( 
    <div>
      <h1>UseEffectCheck</h1>
      <h3>{counter}</h3>
      <h3>{str}</h3>
      
      <button onClick={clickHandler}>increment</button>
      <button onClick={clickHandlerDer}>decrement</button>
      <button onClick={clickHandlerStr}>add**</button>
    </div>
   );
}
 
export default UseEffectCheck;