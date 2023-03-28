import React from 'react'
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const handleAddToCart=props.handleAddToCart;


    const {img,name,seller,ratings,price}=props.product;
  return (
    <div className="product">
            <img src={img} alt="" />
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p>price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} Start</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)}>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            
            </button>
    </div>
  )
}

export default Product