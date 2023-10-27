import React, { useState } from 'react';

// set  massage: slut i lager 
//sök  stigande  fallande

function ProductList({ products, addToCart }) {
  const sortedProducts = [...products];

  const [sortOrder, setSortOrder] = useState('asc');

  const [searchTerm, setSearchTerm] = useState('');
  
  

  if (sortOrder === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="product-list">
      <div className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Sök en produkt"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSortOrder('asc')} className="search-button">
          Sök
        </button>
        <button onClick={() => setSortOrder('asc')} className="search-button">
           Stigande
        </button>
        <button onClick={() => setSortOrder('desc')} className="search-button">
           Fallande
        </button>
        
      </div>

      {sortedProducts
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => (
          <div className="product-item" key={product.id}>
            <h2 className="product-name">{product.name}</h2>
            <div className="product-image-container">
              <img className="product-image" src={product.image} alt={product.name} />
            </div>
            <p className="product-price">Pris: {product.price} kr</p>
            <p className="product-stock">Lagersaldo: {product.stock}</p>
            {/* <button */}
            
              {product.stock > 0 ? (
                <button   className="add-to-cart-button" onClick={() => addToCart(product)}>Lägg till kundvagnen</button>
              ) : (
                <p className='slut-text'>Slut i lager</p>
              )}
            {/* //   onClick={() => addToCart(product)}
            //   disabled={product.stock === 0}
            // >
            //   Add to basket
            // </button> */}

          </div>
        ))}
    </div>
  );
}

export default ProductList;
