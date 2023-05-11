import './productcard.css'

const card = (props: any) => {
    const { item } = props;
    return (
        <div className='container card-container d-flex'>
            <div className='card-main'>
                <img className='card-img' alt="picture" src={item?.img} />
                <div className='text'>
                    <div className='img-card-data'>
                        <h4 className='card-name' >{item?.name}</h4>

                        <h4 className='card-type' >{item?.type}</h4>
                        <h4 className='card-description' >{item?.description}</h4>
                        <h4 className='card-price' >{item?.price}</h4>
                        <h4 className='card-rating' >{item?.rating}</h4>
                        

                       
                    </div>


                </div>
            </div>

        </div>
        

    )
}
export default card