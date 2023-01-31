import React from 'react';

const ShoppingCartIcon = ({ totalItems }) => (
    <div className="shopping-cart-icon">
        <img src="./images/dfsfd.png" alt="shopping cart icon" style={{height:100 + '%'}}/>
        <span className="shopping-cart-icon__badge">{totalItems}</span>
    </div>
);

export default ShoppingCartIcon;