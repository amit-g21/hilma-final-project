import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../clientCss/navbar.css";
import Home from "./HomePage";
import ShoppingCartDiv from "./ShoppingCartDiv";
import ShoppingCartIcon from "./shoppingCartIcon";


function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userOnline, setUserOnline] = useState('');

  useEffect(() => {
    let user = Cookies.get('onlineUser');
    if (user) {
      let online = user.replace(/['"]+/g, '');
      setUserOnline(online);
    }
  }, [])

  const removeCookie = () => {
    Cookies.remove('onlineUser');
    window.location.reload();
  }

  return (
    <div id="navbar">
      <div>
        <Link to={"/home"}>Home</Link>
      </div>
      <div>
        <Link to={Navbar}>Menu</Link>
      </div>
      <div>
        <Link to={Navbar}>About</Link>
      </div>
      <div>
        {(navbarOpen || props.showCart) && (
          <div className="cart-window">
            <ShoppingCartDiv refreshCart={props.refreshCart} />
          </div>
        )}
      </div>
      <div className="userLog">
        <div className="userHello">
          <p className="pHello">{userOnline ? `hello ${userOnline}` : <Link to={"/"}>login</Link>}</p>
        </div>
        <div className="logOut">
          {/* <Link to={Home}>Log Out</Link> */}
          <span>{userOnline ? <Link to={'/home'} onClick={removeCookie}>Log Out</Link>  : <Link to={'/signUp'}>Sign up</Link> }</span>
        </div>
      </div>

      <div className="cartNav" onClick={() => setNavbarOpen(!navbarOpen)}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Navbar;
