import React from "react";
import {useDispatch} from 'react-redux';
import "./Auth.css";
import { login } from "../features/authSlice";

const Auth = () => {

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit" onClick={() => dispatch(login())}>Login</button>
      </form>
    </div>
  );
};

export default Auth;
