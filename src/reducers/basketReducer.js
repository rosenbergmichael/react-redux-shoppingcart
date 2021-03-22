import { ADD_PRODUCT_BASKET, GET_BASKET_NUMBERS } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    giantsHat: {
      name: 'NY Giants Hat',
      price: 15.00,
      numbers: 0,
      inCart: false
    },
    giantsJacket: {
      name: 'NY Giants Jacket',
      price: 90.00,
      numbers: 0,
      inCart: false
    },
    metsJersey: {
      name: 'NY Mets Jersey',
      price: 70.00,
      numbers: 0,
      inCart: false
    },
    bullsHat: {
      name: 'Chicago Bulls Hat',
      price: 35.00,
      numbers: 0,
      inCart: false
    },
  }
}

export default(state = initialState, action) => {
   switch(action.type) {
     case ADD_PRODUCT_BASKET: 
      return {
        basketNumbers: state.basketNumbers + 1 
      }
      case GET_BASKET_NUMBERS:
        return {
          ...state
        }
      default: 
        return state; 
   }
}