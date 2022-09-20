import logo from './logo.svg';
import './App.css';
import {useState} from "react";


const Greeting = ({username}) => {
  return (<h1>Hello, {username}</h1>)
}


function App() {
  const [username, setUsername] = useState("Johan")
  return (
    <div className="App">
      <div>Hello, {username}</div>
      <button onClick = {(e)=>setUsername("Johnny")}>
          Skift navn
      </button>
    </div>
  );
}

export default App;
