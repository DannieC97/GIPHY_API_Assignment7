import react, {useState,useEffect} from 'react'
import GiftCard from './GIftCard'

function SearchField(props){
    
   const setCode = props.setCode
   const setRate = props.setRate
   const setTrending = props.setTrending
    //make this asynch to be able to use await?
    function handleSearch(event){
        setCode(event.target.value)
        
        
    }
    function changeRating(value) {
    
  
        if (value === "none") {
          setTrending(false)
          console.log("rate")
          setRate("")
          
        }
        if (value === "g") {
          
          setRate(value)
          setTrending(true)
          console.log("rateg")
        }
        if (value === "pg") {
          setRate(value)
          setTrending(true)
        }
        if (value === "pg-13") {
          setRate(value)
          setTrending(true)
          
        }
        
      }
    
    
    
    
    return (
        <div id="searchDiv">
            
            <input type="search" className="bar" name="inpt" placeholder='Search'  onChange={handleSearch}></input>
            <select name="rating" id="rating"  onChange={(val) => changeRating(val.target.value)}>
        <option value="none" >none</option>
        <option value="g">g</option>
        <option value="pg">pg</option>
        <option value="pg-13">pg-13</option>
      </select>
           
        </div>
    )
}
export default SearchField;