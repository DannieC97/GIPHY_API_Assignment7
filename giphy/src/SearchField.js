function SearchField(props) {

    const setCode = props.setCode
    const setRate = props.setRate
    const setTrending = props.setTrending
    const setGifsShown = props.setGifsShown
    //make this asynch to be able to use await?
    function handleSearch(event) {
        setCode(event.target.value)


    }
    function changeAmountofGifs(event) {
        setGifsShown(event.target.value)
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

            <input type="search" className="bar" name="inpt" placeholder='Search GIFs' onChange={handleSearch}></input>
            <label className='rating-label'>Rating: </label>
            <select name="rating" id="rating" onChange={(val) => changeRating(val.target.value)}>
                <option value="none" >None</option>
                <option value="g">G</option>
                <option value="pg">PG</option>
                <option value="pg-13">PG-13</option>
            </select>
            <label className='gifs-label'>Number of Gifs shown: </label>
            <input id="inputAns" type="number" min="35" max="50" onChange={changeAmountofGifs}></input>

        </div>
    )
}
export default SearchField;