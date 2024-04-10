
import './App.css';
import IDCard from './components/IDCard';
import Data from "./Data.json"

function App() {
  return (
    <div className="App ">
      <h1>Welcome to IDCards App!</h1>
      {/* <div className="d-flex ">
        <IDCard iname="Jane"  idesc='Likes coding . Likestravelling' />
        <IDCard iname="John"  idesc='Likes analyzing . Likes swimming' />
        <IDCard iname="Vincen"  idesc='Likes Studing . Likes Coding' />
      </div> */}


      <div className="d-flex ">
        {
          Data.data.map((elem)=>{
            return(<IDCard iname={elem.name}  idesc={elem.des} />)
          })
        }
      </div>
    </div>
  );
}

export default App;
