import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";


function ShoppingCartDiv(props) {
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalQuantity, setTotalQuantity] = useState(0)
  let [sessionStorageItems, setSessionStorageItems] = useState(JSON.parse(sessionStorage.getItem("cart")) || []);
  const [userOnline, setUserOnline] = useState('');


  useEffect(() => {
    if (sessionStorage.getItem('cart')){
    setSessionStorageItems(JSON.parse(sessionStorage.getItem("cart") || []));
    console.log(sessionStorageItems);
    calculateTotalPrice(JSON.parse(sessionStorage.getItem("cart")));
    } else {
      sessionStorage.setItem('cart', JSON.stringify([]));
    }
  }, [props.refreshCart]);

  

  useEffect(() => {
    let user = Cookies.get('onlineUser');
    if (user) {
      let online = user.replace(/['"]+/g, '');
      setUserOnline(online);
    }
  }, [])

  function navigateToCheckOut() {
    let obj = JSON.stringify([{ totalPrice , totalQuantity }, ...sessionStorageItems]);
    sessionStorage.setItem("checkoutInfo", obj);
    window.location.assign("/checkout");
  }



  function calculateTotalPrice(storage) {
    let price = 0;
    let quantity = 0;
    for (let obj of storage) {
      price += obj.price * obj.orderQuantity;
      quantity += obj.orderQuantity
      console.log('quantity: ', quantity);
      console.log(obj);
      
    }
    setTotalPrice(price);
    setTotalQuantity(quantity);
  }

  function deleteFromCart(e) {
    let obj = e.target.name;
    console.log("obj: ", obj);
    let newSessionStorage = [];

    let didFind = false;
    for (let cartItem of sessionStorageItems) {
      if (JSON.stringify(cartItem) === obj && !didFind) {
        didFind = true;
        continue;
      }
      newSessionStorage.push(cartItem);
    }
    setSessionStorageItems(newSessionStorage);
    sessionStorage.setItem("cart", JSON.stringify(newSessionStorage));
    calculateTotalPrice(newSessionStorage);
  }

  return (
    <>
      <p>Keep On Buying...</p>
      <hr />
      <div className="shopping-cart-content">
        {sessionStorageItems.length > 0 && userOnline &&
          sessionStorageItems.map((cartItem) => (
            <div key={Math.random() * 0.5}>
              <div className="cartProduct">
                <div className="cartParagraph">
                  <span id="productName">
                    {cartItem.productName} <br />
                  </span>
                  <span id="colorAndSize">
                    {cartItem.isClickedColor} / {cartItem.isClickedSize} <br />
                  </span>
                  <span id="productPrice">{cartItem.price}$</span>
                  <span>Quantity: {cartItem.orderQuantity}</span>
                </div>
                <div className="cartImageContainer">
                  <img id="productImage" src={cartItem.image_url} />
                  <div id="XContainer">
                    <img
                      onClick={deleteFromCart}
                      name={JSON.stringify(cartItem)}
                      src="../../images/X.png"
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
      <h6>Total Price: {totalPrice}$</h6>
      <button onClick={navigateToCheckOut}>Check Out</button>
    </>
  );
}

export default ShoppingCartDiv;
