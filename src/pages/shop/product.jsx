import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const{ addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
      <div className='product-card'>
        <img src={productImage} alt={productName} />
        <div className='description'>
          <p>
            <b className='product-name'>{productName}</b>
          </p>
          <p className='product-price'>${price}</p>
        </div>
        <div>
          <button className='product-button' onClick={()=> addToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
        </div>
      </div>
    </div>
  );
};



