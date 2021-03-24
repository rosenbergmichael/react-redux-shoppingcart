import { ADD_PRODUCT_BASKET, GET_BASKET_NUMBERS, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";

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
  let productSelected = "";
   switch(action.type) {
     case ADD_PRODUCT_BASKET: 
        productSelected = {...state.products[action.payload]}

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
        productSelected = {...state.products[action.payload]}
        productSelected.numbers += 1;
        return {
          ...state,
          cartCost: state.cartCost + state.products[action.payload].price,
          products: {
            ...state.products,
            [action.payload]: productSelected
          }
        }
        case DECREASE_QUANTITY:
          productSelected = {...state.products[action.payload]};
          let newCartCost = 0;

          if (productSelected.numbers === 0) {
            productSelected.numbers = 0;
            newCartCost = state.cartCost
          } else {
            productSelected.numbers -= 1;
            newCartCost = state.cartCost - state.products[action.payload].price
          }
          
          return {
            ...state,
            cartCost: newCartCost,
            products: {
              ...state.products,
              [action.payload]: productSelected
            }
          }
        case CLEAR_PRODUCT:
          productSelected = {...state.products[action.payload]};
          let prevQty = productSelected.numbers; 
          productSelected.numbers = 0;
          productSelected.inCart = false;
          return {
            ...state,
            cartCost: state.cartCost - (prevQty * productSelected.price),
            products: {
              ...state.products,
              [action.payload]: productSelected
            }
          }
      default: 
        return state; 
   }
}