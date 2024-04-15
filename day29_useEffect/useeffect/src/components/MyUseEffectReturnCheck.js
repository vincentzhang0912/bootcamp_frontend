import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const MyUseEffectReturnCheck = () => {
    let [counter,setCounter] = useState(0);
    let navigate = useNavigate();


    useEffect(() =>{
        console.log("in use effect");
 	//called when moving away from this component


        return () => {
            console.log("called when component unmounts");
        }
    },[])


    let clickHandler = () => {
        setCounter(counter+1)
    }
    let goToABout = () =>{
        navigate("about");  //useeffect's return block is called
    }
    return (
        <div>
            <h1> Return check!</h1>
            <h3> {counter}</h3>
            <button onClick={clickHandler}> Increment</button>
            <button onClick={goToABout}> Goto About</button>
        </div>
     );
}
 
export default MyUseEffectReturnCheck;
