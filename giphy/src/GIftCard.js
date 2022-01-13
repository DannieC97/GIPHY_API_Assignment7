import App from './App';
import SearchField from './SearchField';
function GiftCard(props){
    const data = props.data
    
    
    
    
    
    
    
    
    return (
        <div className='vids'>
           
               {data.map((item)=>{
                   return <img key={item.id}src={item.images.original.url} />
                //   src={props.url} 
               })}
           
        </div>
    );
}
export default GiftCard;