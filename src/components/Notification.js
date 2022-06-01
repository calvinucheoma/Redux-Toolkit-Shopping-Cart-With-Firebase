import React from 'react';
import {Alert} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../features/uiSlice';


const Notification = ({type, message}) => {

    const {notification} = useSelector((state) => state.ui);
    const dispatch = useDispatch();

  return (

    <div>

        {notification.open && <Alert onClose={() => dispatch(showNotification({open: false}))} severity={type}>{message}</Alert> }

    </div>

  )

};

export default Notification;