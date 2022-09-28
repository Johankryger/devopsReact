
import './App.css';
import {useState} from "react";





function App() {
  const [username, setUsername] = useState("Johan")
  return (
    <div className="App">
      <div>Hello, {username}</div>
      <button onClick = {(e)=>setUsername("Johnny")}>
          Skift navn
          Hello
      </button>
    </div>
  );
}

export default App;
