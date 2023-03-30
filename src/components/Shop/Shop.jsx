import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCarts]=useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=>res.json())
        .then(data=>
            {
                setProducts(data)
            }
            )
    },[])

    useEffect(()=>{
        const storeCart=getShoppingCart();

        const saveCart=[]
        //step 01:get id ;
        for(const id in storeCart){
            //step 02 find the products by using id 
            const addProducts=products.find(product=>product.id===id);
            //step 03;

            if(addProducts){
                const quantity=storeCart[id];
                addProducts.quantity=quantity;

                //step 04 add the added products to the saved cart
                saveCart.push(addProducts)
            }
            setCarts(saveCart)
            // console.log(addProducts)
        }


    },[products])

    const handleAddToCart=(product)=>{
        console.log(product);
        const newCart=[...cart,product];
        setCarts(newCart);
        addToDb(product.id)
    }

  return (
    <div className='shop-container'>
        <div className="products_container">
            {
                products.map(product=>
                    <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>
                    )
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
    </div>
  )
}

export default Shop