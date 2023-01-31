import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../clientCss/navbar.css";
import Home from "./HomePage";
import ShoppingCartIcon from "./shoppingCartIcon";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div id="navbar">
      <div>
        <Link to={'/home'}>Home</Link>
      </div>
      <div>
        <Link to={Navbar}>
          Menu
        </Link>
      </div>
      <div>
        <Link to={Navbar}>About</Link>
      </div>
      <div className="cartNav" onClick={() => setNavbarOpen(!navbarOpen)}>
        {navbarOpen && (
          <div className="cart-window">
            {/* Render the items in the cart here */}
          </div>
        )}
        <ShoppingCartIcon />

      </div>
    </div>
  );
}

export default Navbar;
