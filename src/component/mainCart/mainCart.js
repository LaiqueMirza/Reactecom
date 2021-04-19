import React from "react";
import "./mainCart.css";
import Cart from "./cart/cart";
import { Link } from "react-router-dom";

//i all take the product from his account in the main cart



const MainCart = () => {
 
 
 //here i all make the user make an account mandatory*
// i all put everyting in cart in his account cart and fetch the cart from his account 

  const cartProducts = JSON.parse(localStorage.getItem("theAddedItems"));
  let bagTotal = 0;
  let totalAmount = 0
  {cartProducts?.map((product) => 
      bagTotal = bagTotal + product.price
  )}
  totalAmount+=bagTotal;
  let shippingCharge = 0;
  shippingCharge = bagTotal > 1000 ? "FREE" : 50
  if(typeof(shippingCharge) === "number"){
    totalAmount += shippingCharge
  }
  return (
    <div className="mainCartDiv">
      <div className="mainCart-cart-Div">
        {cartProducts?.map((product) => 
            <Cart
              targetProduct={product}
              key={product.id}
              // onClick={(e) => setRecentPic(e.target.currentSrc)}
            />
        ) || <h2>There is no product added to cart go to shop</h2>}
      </div>

      <div className="price-summary">
        <h3 className="mainCartH3">PRICE SUMMARY</h3>
        <table className="mainCart-table">
          <thead>
            <tr>
              <th>BAG TOTAL</th>
              <th>:</th>
              <th>{bagTotal}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SHIPPING CHARGES</td>
              <td>:</td>
              <td>{shippingCharge}</td>
            </tr>
            <tr>
              <td>TAX & CHARGES</td>
              <td>:</td>
              <td>NO</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th>TOTAL PAYABLE</th>
              <th>:</th>
              <th>{totalAmount}</th>
            </tr>
          </thead>
        </table>
        <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
        <button className="checkoutButton-mainCart"
        >PROCEED TO CHECKOUT
        </button>
              </Link>
   
      </div>
    </div>
  );
};

export default MainCart;
