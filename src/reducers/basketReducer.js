import { ADD_PRODUCT_BASKET, GET_BASKET_NUMBERS } from "../actions/types";

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
        let addQuantity = {...state.products[action.payload]}

        addQuantity.numbers += 1;
        addQuantity.inCart = true;
        console.log(addQuantity);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity
        }
      }
      case GET_BASKET_NUMBERS:
        return {
          ...state
        }
      default: 
        return state; 
   }
}