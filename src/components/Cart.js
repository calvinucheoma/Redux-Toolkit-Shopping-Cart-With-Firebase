import React from "react";
import "./Cart.css";
import {useSelector, useDispatch} from 'react-redux';
import { setShowCart } from "../features/cartSlice";


const Cart = () => {

  const {totalQuantity} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cartIcon">
      <h3 onClick={() => dispatch(setShowCart())}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
