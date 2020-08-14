import React, {useState} from "react";
import "./App.css";
function App(){
    const [count, setcount] = useState(0);
  return(
    <div className="App">
      <header>
      <h1> counter App using state</h1>
      </header>
  <h2>current value of count is {count}</h2> 
       <button onClick={ ()=>setcount(0)}>Reset counter</button>
        <button onClick={()=>count>10?"":setcount(count+1)}>increase counter</button>
      <button onClick={ ()=>setcount(count - 1)}>Decrease counter</button>
    </div>
  );
}
export default App;