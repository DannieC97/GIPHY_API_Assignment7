import React, {useState,useEffect} from 'react'
import './App.css';
import SearchField from'./SearchField' 
import GiftCard from './GIftCard';

function App() {
const [data,setData] = useState([])
useEffect(async ()=>{
  (async()=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=ladder&limit=5&api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`);
    const data = await response.json();
    console.log(data)
    setData(data.data);
  })();
},[])
  return (
    <div className="App">
     <p>test</p>
     
     
     <GiftCard
     data= {data} />
     
    </div>
  );
}

export default App;
