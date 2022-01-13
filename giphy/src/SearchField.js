import react, {useState,useEffect} from 'react'
import GiftCard from './GIftCard'

function SearchField(props){
    
   const {setCode} = props
    //make this asynch to be able to use await?
    function handleSearch(event){
        setCode(event.target.value)
        
        
    }
    
    
    
    return (
        <div id="searchDiv">
            
            <input type="search" className="bar" name="inpt" placeholder='Search'  onChange={handleSearch}></input>
            
           
        </div>
    )
}
export default SearchField;