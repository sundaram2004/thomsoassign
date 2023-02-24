// import logo from './logo.svg';
import React from "react";
import logo from "./components/header/logo.png";

import image1 from "../src/image1.png";
import image2 from "../src/image2.png";
import image3 from "../src/image3.png";
import image4 from "../src/image4.png";
import image5 from "../src/image5.png";
import image6 from "../src/image6.png";
import image7 from "../src/image7.png";
import image8 from "../src/image8.png";
import Navbar from "./components/header/Navbar";


import "./App.css";


function App() {
  return (
    <div className="App">
      
        <Navbar/>
      
      <div className="content1">
        <h6>Food App</h6>
        <h1>
          Why stay hungry when <br /> you can order form Bella Onojie
        </h1>
        <h6>Download the bella onoje’s food app now on</h6>
        <div className="Buttoncontent1">
          <button type="">Play Store</button>
          <button type="">Play Store</button>
        </div>
      </div>
      <div className="content2">
        <div className="image1">
          <img src={image1} />
        </div>
      </div>
      <div className="hrtag">
        <hr />
      </div>

      <div className="content3">
        <h2>How the app works</h2>
      </div>
      <div className="content4">
        <div className="content41">
          <div className="img41">
            <img src={image2} />
          </div>
          <div className="para">
            <h3>Create an account</h3>
            <h2>Create/login to an existing account to get started</h2>
            <h4>
              An account is created with your email and a desired password
            </h4>
          </div>
        </div>
        <div className="content42">
          <div className="para">
            <h3>Explore varieties</h3>
            <h2> Shop for your favorites meal as e dey hot.</h2>
            <h4>
              Shop for your favorite meals or drinks and enjoy while doing it.
            </h4>
          </div>
          <div className="img42">
            <img src={image3} />
          </div>
        </div>
        <div className="content43">
          <div className="img43">
            <img src={image4} />
          </div>
          <div className="para">
            <h3> Checkout </h3>
            <h2>When you done check out and get it delivered.</h2>
            <h4>When you done check out and get it delivered with ease.</h4>
          </div>
        </div>
      </div>
      <div className="content5">
        <h2>Download the app now.</h2>
        <h4>
          Available on your favorite store. Start your premium experience now
        </h4>
        <div className="Buttoncontent1">
          <div className="button1">
            <button type="">Play Store</button>
          </div>

          <div className="button1">
            <button type="">Play Store</button>
          </div>
        </div>
      </div>
      <footer>
        <div className="foot">
          <div className="logo1">
            <img src={logo} />
          </div>
          <div className="socialmedia">
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
          </div>
          <div className="copyright">
            <p>Copywright 2020 Bella Onojie.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
