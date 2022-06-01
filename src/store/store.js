import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from '../features/authSlice';
import cartSliceReducer from '../features/cartSlice';
import uiSliceReducer from '../features/uiSlice';

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        cart: cartSliceReducer,
        ui: uiSliceReducer,
    }
});

export default store;