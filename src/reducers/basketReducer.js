import { ADD_PRODUCT_BASKET, GET_BASKET_NUMBERS } from "../actions/types";

const initialState = {
  basketNumbers: 0
}

export default(state = initialState, action) => {
   switch(action.type) {
     case ADD_PRODUCT_BASKET: 
      return {
        basketNumbers: this.basketNumbers + 1 
      }
      case GET_BASKET_NUMBERS:
        return {
          ...state
        }
      default: 
        return state; 
   }
}