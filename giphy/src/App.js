import React, {useState,useEffect} from 'react'
import './App.css';
import SearchField from'./SearchField' 
import GiftCard from './GIftCard';


function App() {
const [code,setCode] =useState("")
const [data,setData] = useState([])
let trending = false

function filter(data){
  data.map((item)=>{
    return <img key={item.id}src={item.images.original.url} />
 
})
}

useEffect(async ()=>{
  (async()=>{
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${code}&limit=20&api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`);
    const data = await response.json();
    console.log(data);
    let res = data.data
    if(trending){
      
      let filteredData = Object.filter(res, x => x == "pg")
      setData(filteredData);
    } else {
    setData(res);
    }
  })();
},[code])
console.log(code)
  return (
    <div className="App">
     <SearchField 
     setCode={setCode} />
     
     
     <GiftCard
     data= {data} 
     />
     
    </div>
  );
}

export default App;
