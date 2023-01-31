import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ShoppingCartDiv(props) {
  let [totalPrice, setTotalPrice] = useState(0);
  let [sessionStorageItems, setSessionStorageItems] = useState(
    JSON.parse(sessionStorage.getItem("cart") || [])
    );

  let navigate = useNavigate();

  useEffect(() => {
    setSessionStorageItems(JSON.parse(sessionStorage.getItem("cart") || []));
    console.log(sessionStorageItems);
    calculateTotalPrice(JSON.parse(sessionStorage.getItem("cart")));
  }, [props.refreshCart]);

  function navigateToCheckOut(){
    let obj = JSON.stringify([{totalPrice}, ...sessionStorageItems]);
    sessionStorage.setItem('checkoutInfo', obj);
    navigate('checkout')
  }

  function calculateTotalPrice(storage){
    let total = 0
    for (let obj of storage){
      total += (obj.price * obj.orderQuantity);
      console.log(obj);
    }
    setTotalPrice(total)
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
    calculateTotalPrice(newSessionStorage)
    }

  return (
    <>
      <p>Keep On Buying...</p>
      <hr />
      <div className="shopping-cart-content">
        {sessionStorageItems.length > 0 &&
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
