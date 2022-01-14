import React, { useState, useEffect } from 'react'
import './App.css';
import SearchField from './SearchField'
import GiftCard from './GIftCard';


function App() {
  const [code, setCode] = useState("")
  const [data, setData] = useState([])
  const [trending, setTrending] = useState(false)
  const [rate,setRate] = useState("")
  

  

  function filter(data) {
    data.map((item) => {
      return <img key={item.id} src={item.images.original.url} />

    })
  }

  useEffect(async () => {
    (async () => {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${code}&limit=20&api_key=g5GU1WDPDqLyo6rsrWc3vJeQ3qypwP86`);
      const data = await response.json();
      console.log(data);
      let res = data.data
      if (trending) {
        console.log(rate)
        let filteredData = res.filter(x => x.rating === rate)
        setData(filteredData);
      } else {
        setData(res);
      }
    })();
  }, [code,rate])
  console.log(code)
  return (
    <div className="App">
      
      <SearchField
        setCode={setCode}
        setRate={setRate}
        setTrending={setTrending} />


      <GiftCard
        data={data}
      />

    </div>
  );
}

export default App;
