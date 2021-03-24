import { GET_BASKET_NUMBERS } from './types'; 

export const getNumbers = () => {
  return (dispatch) => {
    dispatch({
      type: GET_BASKET_NUMBERS
    })
  } 
}