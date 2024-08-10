import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <h1>Your Cart Items</h1>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <CartItem key={Product.id} data={Product} />;
          }
          // Add an explicit return of null if the condition is not met
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty!</h1>
      )}
    </div>
  );
};
