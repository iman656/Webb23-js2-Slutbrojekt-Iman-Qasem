import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, checkout, emptyTheCart, products }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className='cart-view'>
      <h2>Kundvagn</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} products={products} />
        ))}
      </ul>
      <p>Totalt: {totalPrice} kr</p>
      <div className='betala-button'>
      <button onClick={checkout}>BETALA</button>
      <br /><br />
      <button onClick={emptyTheCart}>TÖM</button>
      </div>
    </div>
  );
}

export default Cart;
