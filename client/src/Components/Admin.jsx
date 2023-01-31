import React, { useEffect, useState } from "react";
import "../clientCss/adminHomePage.css";

function AdminHome() {
  const [myOrders, setMyOrders] = useState([]);
  const [registeredUsers, setregisteredUsers] = useState([]);
  const [infoSelected, setinfoSelected] = useState(false);
  const [actionSelected, setactionSelected] = useState(false);
  let i = 0;

  useEffect(() => {
    const fetchOrders = async () => {
      let promise = await fetch("http://localhost:8000/order");
      let result = await promise.json();
      console.log("result: ", result);
      setMyOrders(result);
    };

    const fetchUsers = async () => {
      let promise = await fetch("http://localhost:8000/userInfo");
      let result = await promise.json();
      console.log("result: ", result);
      setregisteredUsers(result);
    };

    fetchOrders();
    fetchUsers();
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

    if (e.target.id === "AddUser") {
      if (actionSelected === "AddUser") setactionSelected(false);
      else {
        setactionSelected("AddUser");
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

      {infoSelected === "showOrders" && <h4>Your Orders:</h4>}
      {infoSelected === "showOrders" &&
        myOrders.map((order) => {
          i++;
          return (
            <div className="oneOrder" key={Math.random()}>
              <p>Number: {i}</p>
              <p>Order's Number: {order.order_number}</p>
              <p>Customer's Name: {order.full_name}</p>
              <p>Price Paid: {order.total_price}$</p>
              <p>Adress: {order.city}</p>
              <hr />
            </div>
          );
        })}

      <div className="registeredUsers">
        {infoSelected === "registeredUsers" && <h4>registeredUsers:</h4>}
        {infoSelected === "registeredUsers" &&
          registeredUsers.map((user) => {
            i++;
            return (
              <div key={Math.random() * 1000}>
                <p>Number: {i}</p>
                <p>Full Name: {user.full_name}</p>
                <p>User Name: {user.username}</p>
                <p>Birth Date: {user.birth_date}</p>
                <p>Admin Permissions: {user.is_admin === 1 ? "yes" : "no"}</p>
                <hr />
              </div>
            );
          })}
      </div>
      <div className="actionsMenu">
        <h3>Some Actions You Can Take:</h3>
        <div className="showStoreInfo">
          <p id="addProduct" onClick={handleClickAction}>
            Add A Product
          </p>
          <p id="givePermission" onClick={handleClickAction}>
            Give/Remove Admin Permission
          </p>
          <p id="AddUser" onClick={handleClickAction}>
            Add A User
          </p>
        </div>
        {actionSelected === "addProduct" && <div className="AddProductInputs">
          <input placeholder="Product Name"/><br/>
          <p>Variants:</p>
          <input placeholder="Variant"/><br/>
          <button>Add Variant</button>
          


          </div>}
        
        
      </div>
    </div>
  );
}

export default AdminHome;
