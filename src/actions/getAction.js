import { GET_BASKET_NUMBERS } from './types'; 

export const getNumbers = () => {
  return (dispatch) => {
    console.log("getting basket numbers ");
    dispatch({
      type: GET_BASKET_NUMBERS
    })
  } 
}