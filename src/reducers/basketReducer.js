import { ADD_PRODUCT_BASKET, GET_BASKET_NUMBERS, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    giantsHat: {
      name: 'NY Giants Hat',
      tagName: 'giantsHat',
      price: 15.00,
      numbers: 0,
      inCart: false
    },
    giantsJacket: {
      name: 'NY Giants Jacket',
      tagName: 'giantsJacket',
      price: 90.00,
      numbers: 0,
      inCart: false
    },
    metsJersey: {
      name: 'NY Mets Jersey',
      tagName: 'metsJersey',
      price: 70.00,
      numbers: 0,
      inCart: false
    },
    bullsHat: {
      name: 'Chicago Bulls Hat',
      tagName: 'bullsHat',
      price: 35.00,
      numbers: 0,
      inCart: false
    },
  }
}

export default(state = initialState, action) => {
   switch(action.type) {
     case ADD_PRODUCT_BASKET: 
        let productSelected = {...state.products[action.payload]}

        productSelected.numbers += 1;
        productSelected.inCart = true;
        console.log(productSelected);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected
        }
      }
      case GET_BASKET_NUMBERS:
        return {
          ...state
        }
      case INCREASE_QUANTITY:
        return {
          ...state
        }
      case DECREASE_QUANTITY:
        return {
          ...state
        }
      default: 
        return state; 
   }
}