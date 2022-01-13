import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
const [data,setData] = useState([])
useEffect(async ()=>{
  (async()=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`);
    const data = await response.json();
    console.log(data)
  })();
},[])
  return (
    <div className="App">
     <p>Test</p>
    </div>
  );
}

export default App;
