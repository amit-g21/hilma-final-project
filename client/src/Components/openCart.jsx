import React from 'react';

const [navbarOpen, setNavbarOpen] = useState(false);

const ShoppingCart = ({ items, onRemoveItem }) => (
    
  <div className="shopping-cart">
    {navbarOpen && (
          <div className="cart-window">
            {/* Render the items in the cart here */}
          </div>
        )}
  </div>
);

export default ShoppingCart;