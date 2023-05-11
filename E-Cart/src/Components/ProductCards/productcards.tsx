import Card from './card'
import './productcard.css'

const productcard = () => {
    const productData = [
        {
            id: 1,
            "name": "Apple",
            "img":"https://res.cloudinary.com/djyqzlfts/image/upload/v1683613978/mobile1_tcuh8n.jpg",
            "type": "mobile",
            "description": "5g",
            "price": "50000",
            "rating": "5"
        },
        {
            id: 2,
            "name": "vivo",
            "img":"https://res.cloudinary.com/djyqzlfts/image/upload/v1683613978/mobile1_tcuh8n.jpg",
            "type": "mobile",
            "description": "5g",
            "price": "50000",
            "rating": "5"
        },
        {
            id: 3,
            "name": "redMI",
            "img":"https://res.cloudinary.com/djyqzlfts/image/upload/v1683613978/mobile1_tcuh8n.jpg",
            "type": "mobile",
            "description": "5g",
            "price": "50000",
            "rating": "5"
        }
    ]
    return (
        <div className='container product-container'>
            <div className='product-Header '>E-Cart</div>
        


             <div className='mobile-card d-flex'>
            {
                    productData.map((x: any) =>
                        <Card item={x} />
                    )
                }

            </div>

        </div>


    )



}
export default productcard