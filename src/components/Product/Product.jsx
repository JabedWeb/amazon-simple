import React from 'react'

import './Product.css'

const Product = (props) => {
    const {img,name,seller,ratings,price}=props.product;
    console.log(props.product);
  return (
    <div className="product">
            <img src={img} alt="" />
            <div className='product_info'>
                <h5 className='product_name'>{name}</h5>
                <p>price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} Start</p>
            </div>
            <button>Add To Cart</button>
    </div>
  )
}

export default Product