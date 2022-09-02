import React from "react";
import "../Home/Home.css";
import Bg from "../Home/home-bg.jpg";
import Product from "../Product/Product.js";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_img" alt="home-bg" src={Bg} />

        <div className="home_row">
          <Product
            id="37339"
            title="STRIFF Adjustable Laptop Stand "
            price={866}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="76543"
            title="HP USB Wireless Spill Resistance Keyboard and Mouse Combo"
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/61H3IGvyT6L._AC_SY200_.jpg"
          ></Product>
        </div>

        <div className="home_row">
        <Product
            id="97534"
            title="Pigeon Amaze Plus Electric Kettle (14289) with Stainless Steel Body"
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/51DGcy8eBCL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="12467"
            title="Glun Multipurpose Portable Electronic Digital Weighing Machine "
            price={299}
            rating={4}
            image="https://m.media-amazon.com/images/I/61ocesEh0cL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="34578"
            title="Wooden Manual Vegetable Chopper, Dry Fruit and Onion Hand Chopper "
            price={204}
            rating={3}
            image="https://m.media-amazon.com/images/I/51RXzjrUmkL._AC_SY200_.jpg"
          ></Product>
        </div>

        <div className="home_row">
        <Product
            id="53467"
            title="DOCTIST Blue Light Blocking Glasses for Women Men, Computer Glasses"
            price= {299}
            rating={3}
            image="https://m.media-amazon.com/images/I/41oOQBegQhS._AC_SY175_.jpg"
          ></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
