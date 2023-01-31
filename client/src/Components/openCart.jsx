import React from 'react';


const ShoppingCart = ({ items, onRemoveItem , props }) => (

  <div className="shopping-cart">
    {navbarOpen && (
          <div className="cart-window">
            {/* Render the items in the cart here */}
          </div>
        )}
  </div>
);

export default ShoppingCart;