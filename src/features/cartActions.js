import { replaceData } from "./cartSlice";
import { showNotification } from "./uiSlice";


export const fetchData = () => {

    return async(dispatch) => {

        const fetchHandler = async() => {

            const resp = await fetch('https://redux-http-tutorial-ff1f1-default-rtdb.firebaseio.com/cartItems.json');
            const data = await resp.json();
            return data;
        };
        try {
              const cartData = await fetchHandler();
              dispatch(replaceData(cartData));
            }
        catch(err) {
                dispatch(showNotification(
                    {
                    open: true,
                    message: 'Sending Request Failed',
                    type: 'error',
                    }
                  )
                );
              }
    };
};

export const sendCartData = (cart) => {
    return async(dispatch) => {

      dispatch(showNotification(
        {
        open: true,
        message: 'Sending Request To Database',
        type: 'warning',
        }
       )
     );

    const sendRequest = async () => {

        const resp = await fetch(`https://redux-http-tutorial-ff1f1-default-rtdb.firebaseio.com/cartItems.json`, 
        {
        method: 'PUT',
        body: JSON.stringify(cart),
        }
        );

        const data = await resp.json();
        //Send state as Request is successful
        dispatch(showNotification(
            {
            open: true,
            message: 'Sent Request To Database Successfully',
            type: 'success',
            }
          )
        );
    };
    
    try {
        await sendRequest();
  } 
    catch(error){
        dispatch(showNotification(
            {
            open: true,
            message: 'Sending Request Failed',
            type: 'error',
            }
        )
      );    
    }
  };
};