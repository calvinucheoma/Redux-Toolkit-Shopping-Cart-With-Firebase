import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {useSelector} from 'react-redux';


const CartItems = () => {

  const {itemsList} = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {itemsList.map((item) => (
              <li key={item.id}>
              <CartItem id={item.id} {...item} />
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default CartItems;
