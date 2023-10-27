import React from 'react';

//only product card

function Product({ addToCart , product}) {
  return (
    <li>
      <img  alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>Pris: {product.price} kr</p>
      <p>Lagersaldo: {product.stock}</p>

      {/* {product.stock > 0 ? (
                <button onClick={() => addToCart(product)}>Lägg till kundvagnen</button>
              ) : (
                <p>Slut i lager</p>
              )} */}
    
    </li>
  );
}

export default Product;
