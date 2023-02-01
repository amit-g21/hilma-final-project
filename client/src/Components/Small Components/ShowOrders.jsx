import { useState } from "react";

function ShowOrders(props) {
  let i = 0;
  return (
    <>
      <h4>Your Orders:</h4>
      {props.myOrders.map((order) => {
        i++;
        return (
          <div className="oneOrder" key={Math.random()}>
            <p>Number: {i}</p>
            <p>Order's Number: {order.order_number}</p>
            <p>Customer's Name: {order.full_name}</p>
            <p>Price Paid: {order.total_price}$</p>
            <p>Address: {order.city}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ShowOrders;
