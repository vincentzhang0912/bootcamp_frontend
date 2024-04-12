import {useNavigate} from 'react-router-dom'
const CEO = () => {
  //this hook helps
  let navigate=useNavigate();
  let clickHandler=()=>{
    navigate('/about');
  }

  let clickPrevHandler=()=>{
    navigate(-1)
  }
  return ( 
    <div>
        <h1>CEO</h1>
        <button onClick={clickHandler}>Go to About Page</button>
        <button onClick={clickPrevHandler}>Go to About Page</button>
    </div>
   );
}
 
export default CEO;