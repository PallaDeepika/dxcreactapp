import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import parentComponent from './components/ParentComponent';
import UserGreeting from'./components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting/>
      <parentcomponent/>
      <EventBind/>
      <ClassClick/>
      <FunctionClick/>

      <counter/>

      <Message/>

      <Greet name="deepu" college="IIT">
        <p>this is children property</p>
      </Greet>

      <Greet name="lucky" college="oxford">
        <button>click me</button>
        </Greet>
        <Greet/>

      <Welcome name="priya" alias ="lucky"/>
      

    </div>
  );
}

export default App;
