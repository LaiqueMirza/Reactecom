import React, { useState } from 'react';
import './cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCart, selectedSize } from '../../redux/action/index';
import { set } from 'mongoose';

//here i all make the user make an account mandatory*
// i all put everyting in cart in his account cart and fetch the cart from his account 
//i all take the product from his account in the main cart
// then when user adds then i all do the post and update the quantity



const Cart = (props) => {
  const {targetProduct} = props;
  const [quantity, setQuantity] = useState(targetProduct.quantity);

  const incrementQuantity =() => {
    if(quantity >= 10) {
      return;
    }
    setQuantity(quantity + 1);
    targetProduct.quantity = quantity;
  }
  const decrementQuantity =() => {
    if(quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);   
    targetProduct.quantity = quantity;
  }
console.log(targetProduct)
    return ( 
        <section className="cart-main-sectionProduct" id="main-section">
         <div className="cart-img-divProduct" id="img-div">
    <img className="cart-img-mainProduct" src={targetProduct.photos[0]} alt="" />
  </div>
  <div className="cart-body-partProduct">
      <div className="cart-name-brand-div">
        <h4 className="cart-mainheadingProduct">
                {targetProduct.name}
        </h4>
        <h4 className="cart-brandProduct">
        {targetProduct.brand}
        </h4>
      </div>
      <div className="cart-price-button-div">
      <h4 className="cart-size">
        Size : {targetProduct.selectedSize}
    </h4>
   
 
    <h4 className="cart-quantity">
        Qty : 
    </h4>
   
    <button 
    className="cart-operatingQuantity"
    onClick={decrementQuantity}
    >
        -
    </button>
    <h4 className="cart-quantity-number">
    {quantity}
    </h4>
    <button 
    className="cart-operatingQuantity" 
    onClick={incrementQuantity}

    >
       +
    </button>
    </div>
    <h4 className="cart-price">
    ₹  {targetProduct.price}
    </h4>
  </div> 

  </section>

     );
}
 
export default Cart;