import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./component/navBar/navBar";
import Home from "./component/home/home";
import About from "./component/about/about";
// import Contact from "./component/contact/contact";
import LogIn from "./component/Log/logIn/logIn";
import Shop from "./component/shop/shop";
import MainCart from "./component/mainCart/mainCart";
import Checkout from "./component/checkout/checkout";
import Product from "./component/product/product/product";
import RenderSearchResult from "./component/renderSearchResult/renderSearchResult";
import "./App.css";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  userParam,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/logIn" component={LogIn} />
          <Route path="/cart" component={MainCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product" component={Product} />
          <Route path="/searchResult" component={RenderSearchResult} />
          <Route component={() => <h1>You are lost baby girl</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
