import './shopingCard.css'


const shopingCard = () => {

    const shopingCarddata = [
        {
            id: 1,
            "img": "https://res.cloudinary.com/djyqzlfts/image/upload/v1683704060/iphone_l0xyxw.jpg",
            "price": "$ 40",
            "name": "Apple",
            "description": "large part of the luxury market"
        },

        {
            id: 2,
            "img": "https://res.cloudinary.com/djyqzlfts/image/upload/v1683704060/iphone_l0xyxw.jpg",
            "price": "$ 50",
            "name": "Apple",
            "description": "large part of the luxury market"
        },

        {
            id: 3,
            "img": "https://res.cloudinary.com/djyqzlfts/image/upload/v1683704060/iphone_l0xyxw.jpg",
            "price": "$ 40",
            "name": "Apple",
            "description": "large part of the luxury market"
        },
        {
            id: 4,
            "img": "https://res.cloudinary.com/djyqzlfts/image/upload/v1683704060/iphone_l0xyxw.jpg",
            "price": "$ 40",
            "name": "Apple",
            "description": "large part of the luxury market"
        },

    ]

    return (
        <div>
            <div className='container'>
                <h4 className='m-4'>Best deal</h4>
                <div className='d-flex justify-content-between'>
                    {
                        shopingCarddata.map((item) =>

                            <div className='m-4'>

                                <div className='card'>

                                    <div className='image-container'>
                                        <div className='like-position'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill like-background" viewBox="0 0 16 16" >
                                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                            </svg>
                                            </div>
                                        <div>
                                        <img src={item.img} className="rounded img-thumnail" />
                                       
                                        </div>
                                        <div className='cost-position'>
                                            <span className='product-cost'>{item.price}</span>
                                        </div>
                                         
                                         <div className='p-2'>


                                            <h6>{item.name}
                                            </h6>
                                            <span>{item.description}</span>

                                        </div>
                                        <div className="d-flex justify-content-between align-items-center pt-1">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>

                                                <span className="rating-number">4.8</span>
                                            </div>
                                            
                                           



                                        </div>
                                        <div className='d-flex justify-content-between align-items-center m-1'>
                                            <button type="button" className="btn btn-info">5% off</button>



                                            <div>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                                </svg>

                                                <button type="button" className="AddtoCard">Add to Cart</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>


        </div>



    )



}
export default shopingCard