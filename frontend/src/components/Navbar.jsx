import React from 'react';

function Navbar({ cartItemCount ,setMainPage}) {
  return (
    <nav>
      
      <ul>
        <li>
          <button onClick={() => setMainPage('products')}>Produkter</button>
        </li>
        <li>
          <button onClick={() => setMainPage('cart')}>Kundvagnen ({cartItemCount})</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
