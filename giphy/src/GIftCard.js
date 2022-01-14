function GiftCard(props) {
    const data = props.data


    return (
        <div className='vids'>

            {data.map((item) => {
                return <img key={item.id} src={item.images.preview_gif.url} />

            })}

        </div>
    );
}
export default GiftCard;