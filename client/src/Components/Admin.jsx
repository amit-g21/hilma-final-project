import React, { useEffect, useState } from "react";
import "../clientCss/adminHomePage.css";
import ShowRegisteredUsers from "./Small Components/ShowRegisteredUsers";
import ShowOrders from "./Small Components/ShowOrders";
import AddEditProduct from "./Small Components/AddEditProduct";
import AddEditCollection from "./Small Components/AddEditCollection";

function AdminHome() {
  const [myOrders, setMyOrders] = useState([]);
  const [registeredUsers, setregisteredUsers] = useState([]);
  const [infoSelected, setinfoSelected] = useState(false);
  const [actionSelected, setactionSelected] = useState(false);
  const [ourProducts, setOurProducts] = useState([]);
  const [myCollections, setMyCollection] = useState([])
  console.log("ourProducts: ", ourProducts);

  useEffect(() => {
    const fetchOrders = async () => {
      let promise = await fetch("http://localhost:8000/order");
      let result = await promise.json();
      setMyOrders(result);
    };

    const fetchUsers = async () => {
      let promise = await fetch("http://localhost:8000/userInfo");
      let result = await promise.json();
      setregisteredUsers(result);
    };

    const fetchProducts = async () => {
      let promise = await fetch("http://localhost:8000/product");
      let result = await promise.json();
      setOurProducts(result);
    };

    const fetchCollections = async () => {
      let promise = await fetch("http://localhost:8000/collection");
      let result = await promise.json();
      setMyCollection(result);
    };

    fetchCollections();
    fetchOrders();
    fetchUsers();
    fetchProducts();
  }, []);

  function calculateMoneyMade() {
    let totalMoney = 0;
    for (let order of myOrders) {
      if (order.total_price === null) continue;
      totalMoney += order.total_price;
      console.log("order.totalPrice;: ", order.total_price);
    }
    return totalMoney;
  }

  function handleClickInfo(e) {
    if (e.target.id === "totalMoney") {
      if (infoSelected === "totalMoney") setinfoSelected(false);
      else {
        setinfoSelected("totalMoney");
      }
    }
    if (e.target.id === "showOrders") {
      if (infoSelected === "showOrders") setinfoSelected(false);
      else {
        setinfoSelected("showOrders");
      }
    }

    if (e.target.id === "registeredUsers") {
      if (infoSelected === "registeredUsers") setinfoSelected(false);
      else {
        setinfoSelected("registeredUsers");
      }
    }
    console.log(infoSelected);
  }

  function handleClickAction(e) {
    if (e.target.id === "addProduct") {
      if (actionSelected === "addProduct") setactionSelected(false);
      else {
        setactionSelected("addProduct");
      }
    }
    if (e.target.id === "givePermission") {
      if (actionSelected === "givePermission") setactionSelected(false);
      else {
        setactionSelected("givePermission");
      }
    }

    if (e.target.id === "addEditCollection") {
      if (actionSelected === "addEditCollection") setactionSelected(false);
      else {
        setactionSelected("addEditCollection");
      }
    }
    console.log(actionSelected);
  }

  let username = window.location.pathname.split("/")[2];
  return (
    <div className="adminPage">
      <h1>hello, {username}</h1>
      <h3>How Are You Today?</h3>
      <h3>Some Info:</h3>
      <div className="showStoreInfo">
        <p id="totalMoney" onClick={handleClickInfo}>
          Total Money Made
        </p>{" "}
        <p id="showOrders" onClick={handleClickInfo}>
          Show Orders
        </p>{" "}
        <p onClick={handleClickInfo} id="registeredUsers">
          Show Registered Users
        </p>
      </div>
      {infoSelected === "totalMoney" && (
        <h4>
          The money that was generated from sales: {calculateMoneyMade()}$
        </h4>
      )}

      {infoSelected === "showOrders" && <ShowOrders myOrders={myOrders} />}

      {infoSelected === "registeredUsers" && (
        <ShowRegisteredUsers registeredUsers={registeredUsers} />
      )}

      <div className="actionsMenu">
        <h3>Some Actions You Can Take:</h3>
        <div className="showStoreInfo">
          <p id="addProduct" onClick={handleClickAction}>
            Add/Edit A Product
          </p>
          <p id="addEditCollection" onClick={handleClickAction}>
            Edit A Collection
          </p>
        </div>
        {actionSelected === "addProduct" && (
          <AddEditProduct myCollections={myCollections} ourProducts={ourProducts} />
        )}
        {actionSelected === "addEditCollection" && (
          <AddEditCollection myCollections={myCollections} />
        )}
        ;
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// function RadioButtons() {
// const [selectedValue, setSelectedValue] = useState('S');

// function handleRadioChange(event) {
//   setSelectedValue(event.target.value);
// }

//   return (
// <div>
//   <input
//     type="radio"
//     value="S"
//     checked={selectedValue === 'S'}
//     onChange={handleRadioChange}
//   />
//   <label>S</label>

//   <input
//     type="radio"
//     value="M"
//     checked={selectedValue === 'M'}
//     onChange={handleRadioChange}
//   />
//   <label>M</label>

//   <input
//     type="radio"
//     value="L"
//     checked={selectedValue === 'L'}
//     onChange={handleRadioChange}
//   />
//   <label>L</label>
// </div>
//   );
// }

export default AdminHome;
