import React from 'react';

// hrer to set disable klick if 0 product to bye, button:disable in css

function Navbar({ cartItemCount ,setMainPage}) {
  return (
    <nav>
      
      <ul>
        <li>
          <button onClick={() => setMainPage('products')}>Produkter</button>
        </li>
        <li>
          <button onClick={() => setMainPage('cart')}
          disabled={ cartItemCount === 0}>
            Kundvagnen ({cartItemCount})
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
