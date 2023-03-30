import React from 'react'

import './Cart.css'

const Cart = (props) => {
    const {cart}=props;

    let total=0;
    let shipping_total=0;

    for(const product of cart){
        total=total+product.price
        shipping_total=shipping_total+product.shipping
    }
    const tax=total*7/100
    const grand_total=total+shipping_total+tax
  return (
   <div className="cart">
        <h4>Order Summary</h4>
        <h6>Selected Item : {cart.length}</h6>
        <h6>Total Price : {total}</h6>
        <h6>Total Shipping : {shipping_total}</h6>
        <h6>Tax : {tax}</h6>
        <strong>Grand Total : {grand_total.toFixed(2)}</strong>
   </div>
  )
}

export default Cart