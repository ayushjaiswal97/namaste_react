import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * ->LOGO
 * ->NavItems
 * Body
 * ->Search
 * ->Restaurant Container
 * -->Restaurant Card
 * ---> Name of res, Star rating, cuisine, delivery time
 * Footer
 * ->Copyright
 * ->Links(social media)
 * ->Address
 * ->Contact
 */

// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
      className="res-logo"
       alt="res-logo" 
       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/3fdcae9a-9614-4251-bf52-7cfe6bdeb0fa_101352.JPG" 
      />
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>4.3 stars</h4>
      <h4>35-40 mins</h4>
    </div>
  )
}

//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard 
        resName="Pizza Hut"
        cusine="Italian, Pizza"
        />
        <RestaurantCard 
        resName="Burger King"
        cusine="American, Burger" 
        />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
