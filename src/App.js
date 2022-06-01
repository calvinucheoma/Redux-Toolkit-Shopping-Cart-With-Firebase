import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector, useDispatch} from 'react-redux';
import Notification from "./components/Notification";
import {showNotification} from './features/uiSlice';
import {fetchData, sendCartData} from './features/cartActions';

let isFirstRender = true;

function App() {

  const {isLoggedIn} = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {notification} = useSelector((state) => state.ui);


  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);


  useEffect(() => {

    if(isFirstRender){
      isFirstRender = false;
      return;
    };

  //   const sendRequest = async () => {

  //     //send state as Sending Request
  //     dispatch(showNotification(
  //       {
  //       open: true,
  //       message: 'Sending Request',
  //       type: 'warning',
  //       }
  //      )
  //    );

  //     const resp = await fetch(`https://redux-http-tutorial-ff1f1-default-rtdb.firebaseio.com/cartItems.json`, 
  //     {
  //     method: 'PUT',
  //     body: JSON.stringify(cart),
  //     }
  //   );

  //   const data = await resp.json();
  //   //Send state as Request is successful
  //     dispatch(showNotification(
  //       {
  //       open: true,
  //       message: 'Sent Request To Database Successfully',
  //       type: 'success',
  //       }
  //      )
  //    );

  // };

  // sendRequest().catch((error) => {

  //   dispatch(showNotification(
  //       {
  //       open: true,
  //       message: 'Sending Request Failed',
  //       type: 'error',
  //       }
  //      )
  //    );    
  // });

  if(cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  
  return (

    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} /> }
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
