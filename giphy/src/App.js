import React, { useState, useEffect } from 'react'
import './App.css';
import SearchField from './SearchField'
import GiftCard from './GIftCard';


function App() {
  const [code, setCode] = useState("")
  const [data, setData] = useState([])
  const [trending, setTrending] = useState(false)
  const [rate, setRate] = useState("")
  const [gifsShown, setGifsShown] = useState(35)

  useEffect(async () => {
    (async () => {
      let response
      if(code !== ""){
        response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${code}&limit=${gifsShown}&api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`);
      }
      if (code === "") {
         response = await fetch(`https://api.giphy.com/v1/gifs/trending?&limit=${gifsShown}&api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`)
      }
      
      const data = await response.json();
      console.log(data);
      let res = data.data
      if (trending) {
        let filteredData = res.filter(x => x.rating === rate)
        setData(filteredData);
      } else {
        setData(res);
      }
      console.log(code)
    })();
  }, [code, rate, gifsShown])
  
  return (
    <div className="App">

      <SearchField
        setCode={setCode}
        setRate={setRate}
        setTrending={setTrending}
        setGifsShown={setGifsShown} />


      <GiftCard
        data={data}
      />

    </div>
  );
}

export default App;
