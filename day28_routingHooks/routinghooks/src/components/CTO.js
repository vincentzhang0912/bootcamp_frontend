import {useLocation} from 'react-router-dom';
const CTO = () => {
  let loca=useLocation();
  return (
    <>
      <h1>CTO</h1>
      <h3>here is Info from CEO:</h3>
      <h4>Secret:{loca.state.secret}</h4>
      <h4>Secret:{loca.state.code}</h4>
    </>
    );
}
 
export default CTO;