import React from 'react';

const ShoppingCart = ({ items, onRemoveItem }) => (
  <div className="shopping-cart">
    {items.map(item => (
      <div key={item.id} className="shopping-cart__item">
        <span>{item.name}</span>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default ShoppingCart;
