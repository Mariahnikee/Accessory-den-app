import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { cartItems,addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  
  // Get the quantity of the current item
  const quantity = cartItems[id];

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
        <div className="countHandler">
          <button 
            onClick={() => removeFromCart(id)}
          >-</button>
          <input value={quantity} onChange={(e) => updateCartItemCount(Number(e.target.value) , id)} />
          <button 
          onClick={() => addToCart(id)}
            >+</button>
        </div>
      </div>
    </div>
  );
};
