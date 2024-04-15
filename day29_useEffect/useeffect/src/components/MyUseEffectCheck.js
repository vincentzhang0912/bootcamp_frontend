import { useEffect, useState } from "react";

const MyUseEffectCheck = () => {

    let [counter,setCounter] = useState(0);
    let [str,setStr] = useState("--");
    let [name,setName] = useState("Jane");


    // useEFfect is used as componentWillMount in class component

    // this is called before mounting/rendering the component
    // will be called twice if index.js has strict mode on. 
    //comment React.Strictmode in index.js so that useEffect is called only once

    // also gets called every time component re-renders
    // componentWillUpdate, componentDidUpdate
    // useEffect(() => {
    //     console.log(" From use effect"); 
    //     // used when we need to talk to remote server to get details and store it in state
    //     // can write code that will be called when ever component is re-rendered
    //     document.title = counter + str;
    //     //gets checked each time state variable counter changes
    //     (counter%2 == 0) ? console.log("even") : console.log("odd")
    // });

    // this could be used only to fetch data from remote server 
    useEffect( () => {
        console.log(" Use Effect with no dependencies [] called");
        document.title = counter + str;
       
    }, [] ); // empty square brackets indicate that call this block/call-back function only once ( just before rendering)

    useEffect(()=>{
        console.log(" Use Effect with counter and name as dependency  called [counter,name]");
        (counter%2 == 0) ? console.log("even") : console.log("odd") ;
        //checks and prints to console.
        (counter ==10 && name == "Jane")  ?  console.log("yay!") : console.log('') ;
    },[counter,name]); // called each time counter is changed and name is changed

    let clickHandlerInc = () => {
        counter++;
        setCounter(counter);
    }    
    
    let clickHandlerDer = () => {
        counter--;
        setCounter(counter);
    }

    
    let clickHandlerStr = () => {        
        setStr(str+' ** ');
    }

    let clickHandlerName = () => {
        (name=="Jane") ? setName("John") : setName("Jane");
    }

    return ( 

        <div>
            <h1> Use Effect Check! </h1>
            <h3> {counter}</h3>
            <h3> {str}</h3>
            <h3> {name}</h3>
            <button onClick={clickHandlerInc}> increment </button>
            <button onClick={clickHandlerDer}> decrement </button>
            <button onClick={clickHandlerStr}> add ** </button>
            <button onClick={clickHandlerName}> Toggle Name  </button>
        </div>

     );
}
 
export default MyUseEffectCheck;
