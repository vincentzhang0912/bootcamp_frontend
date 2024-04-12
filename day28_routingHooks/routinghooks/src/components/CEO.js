import { useNavigate } from "react-router-dom";


const CEO = () => {
   
    //this hook helps us navigate from within code
    let navigate = useNavigate();
   
    let clickHandler = () => {
        console.log(" clicked about");
        //based on few calculations or checks I might want to navigate to another component
        navigate('/about');
    }

    let clickPrevHandler = () =>{
        navigate(-1)
    }

    let clickSendDetailsHandler = () => {
        navigate('/cto',{state:{secret:"bond007",code:"123"}})
    }

    return (        
        <div>
            <h1> CEO</h1>
            <button onClick={clickHandler}> Go to About Page</button>
            <button onClick={clickPrevHandler}> Go to Previous page</button>
            <button onClick={clickSendDetailsHandler}> Send Details to CTO</button>
       
        </div>
     );
}
 
export default CEO;
