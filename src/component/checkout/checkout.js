import React from "react";
import "./checkout.css";
import CheckoutCart from "./checkoutCart/checkoutCart";

//i all take the product from his account in the main cart

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Checkout = () => {
  //here i all make the user make an account mandatory*
  // i all put everyting in cart in his account cart and fetch the cart from his account

  const cartProducts = JSON.parse(localStorage.getItem("theAddedItems"));
  let bagTotal = 0;
  let totalAmount = 0;
  {
    cartProducts?.map((product) => (bagTotal = bagTotal + product.price));
  }
  totalAmount += bagTotal;
  let shippingCharge = 0;
  shippingCharge = bagTotal > 20000 ? "FREE" : 50;
  if (typeof shippingCharge === "number") {
    totalAmount += shippingCharge;
  }

  // RAZORPAY PAYMENT -----------------------------------------------

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    console.log(data);

    const options = {
      key: "rzp_test_9IXCReTDD3XqYa",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "MiyaStore",
      description: "Thank you for nothing. Please give us some money",
      // image: 'http://localhost:1337/logo.svg',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "laique",
        email: "mirzalaique2ey@gmail.com",
        phone_number: "9324684231",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="checkoutMainDiv">
 
      <form action="/action_page.php">
        <label for="Name">Name:</label>
        <br></br>
        <input
          type="text"
          id="addressName"
          name="Name"
          className="addressName"
        />
        <br></br>
        <label for="PinCode">Pin Code:</label>
        <br></br>
        <input
          type="number"
          id="addressPinCodeId"
          name="PinCode"
          className="addressPinCode"
        />
        <br></br>
        <label for="City">City:</label>
        <br></br>
        <input
          type="text"
          id="addressCityId"
          name="City"
          className="addressCity"
        />
        <br></br>
        <label for="State">State:</label>
        <br></br>
        <input
          type="text"
          id="addressStateId"
          name="State"
          className="addressState"
        />
        <br></br>
        <label for="Address">Address:</label>
        <br></br>
        <input
          type="text"
          id="addressAddressId"
          name="Address"
          className="addressAddress"
        />
        <br></br>
        <label for="Email">Email:</label>
        <br></br>
        <input
          type="text"
          id="addressEmailId"
          name="Email"
          className="addressEmail"
        />
        <br></br>
        <label for="Mobile">Mobile:</label>
        <br></br>
        <input
          type="text"
          id="addressMobileId"
          name="Mobile"
          className="addressMobile"
        />
        <br></br>
      
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      <div className="checkoutDiv">
        <div className="checkout-cart-Div">
          {cartProducts?.map((product) => (
            <CheckoutCart
              targetProduct={product}
              key={product.id}
              // onClick={(e) => setRecentPic(e.target.currentSrc)}
            />
          )) || <h2>There is no product added to cart go to shop</h2>}
        </div>

        <div className="checkouprice-summary">
          <h3 className="checkoutH3">PRICE SUMMARY</h3>
          <table className="checkout-table">
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
          <button
            onClick={displayRazorpay}
            className="checkoutButton-checkout-pay"
          >
            PAY ONLINE
          </button>
          <button className="checkoutButton-checkout-cod">
            CASH ON DELIVERY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
