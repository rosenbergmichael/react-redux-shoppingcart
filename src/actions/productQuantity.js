import { INCREASE_QUANTITY, DECREASE_QUANTITY } from './types';

export const productQuantity = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    })
  }
}

export const clearProduct = (name) => {
  return (dispatch) => {
    
    console.log('inside clear product');
    console.log("product is", name);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name
    })
  }
}