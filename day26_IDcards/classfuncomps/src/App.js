
import './App.css';
import Greetings from './components/Greetings';
import MyClassComp from './components/MyClassComponent';
import MyFunComponent from './components/MyFunComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello from App!</h1>
      <Greetings name="ReuseGreetingComponent1"/>
      <Greetings name="ReuseGreetingComponent2"/>
      <Greetings name="ReuseGreetingComponent3"/>
      <MyClassComp/>
      <MyFunComponent/>
    </div>
  );
}

export default App;
