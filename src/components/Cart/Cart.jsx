import React from 'react'

import './Cart.css'

const Cart = (props) => {
    const {cart}=props;

    // console.log(cart)

    let total=0;
    let shipping_total=0;
    let quantity=0;

    for(const product of cart){
        product.quantity=product.quantity || 1;
        total=total+product.price*product.quantity
        shipping_total=shipping_total+product.shipping
        quantity=quantity+product.quantity;
    }
    const tax=total*7/100
    const grand_total=total+shipping_total+tax
  return (
   <div className="cart">
        <h4>Order Summary</h4>
        <h6>Selected Item : {quantity}</h6>
        <h6>Total Price : {total}</h6>
        <h6>Total Shipping : {shipping_total}</h6>
        <h6>Tax : {tax}</h6>
        <strong>Grand Total : {grand_total.toFixed(2)}</strong>
   </div>
  )
}

export default Cart