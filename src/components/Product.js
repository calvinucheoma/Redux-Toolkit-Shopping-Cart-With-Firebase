import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addToCart } from "../features/cartSlice";
import "./Product.css";


const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch();
  const {itemsList} = useSelector((state) => state.cart);

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => dispatch(addToCart({name, id, price}))}>Add to cart</button>
    </div>
  );
};

export default Product;
