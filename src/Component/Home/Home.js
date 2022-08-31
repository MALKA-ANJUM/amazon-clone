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
            title="STRIFF Adjustable Laptop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand(Black)"
            price="389"
            rating={5}
            image="https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="76543"
            title="HP USB Wireless Spill Resistance Keyboard and Mouse Combo with 10m Working Range 2.4G Wireless Technology / 3 Years Warranty (4SC12PA), Black"
            price="1199"
            rating={4}
            image="https://m.media-amazon.com/images/I/61H3IGvyT6L._AC_SY200_.jpg"
          ></Product>
        </div>

        <div className="home_row">
        <Product
            id="97534"
            title="Pigeon Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)"
            price="649"
            rating={4}
            image="https://m.media-amazon.com/images/I/51DGcy8eBCL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="12467"
            title="Glun Multipurpose Portable Electronic Digital Weighing Scale Weight Machine (10 Kg - with Back Light)"
            price="299"
            rating={4}
            image="https://m.media-amazon.com/images/I/61ocesEh0cL._AC_SY200_.jpg"
          ></Product>
          <Product
            id="34578"
            title="Wooden Manual Vegetable Chopper, Dry Fruit and Onion Hand Chopper Quick Cutter Machine use for Kitchen with 3 Stainless Steel Blade for Home"
            price="204"
            rating={3}
            image="https://m.media-amazon.com/images/I/51RXzjrUmkL._AC_SY200_.jpg"
          ></Product>
        </div>

        <div className="home_row">
        <Product
            id="53467"
            title="DOCTIST Blue Light Blocking Glasses for Women Men, Computer Glasses, Retro Round Acetate Frame Gaming Glasses with Anti Eyestrain & Headache"
            price="299"
            rating={3}
            image="https://m.media-amazon.com/images/I/41oOQBegQhS._AC_SY175_.jpg"
          ></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
