import React, {Fragment} from 'react';
import { connect } from 'react-redux';

function Cart({basketProps}) {
  console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach( function(item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
    console.log(productsInCart);
  })

  productsInCart = productsInCart.map( (product, index) => {
    return (
      <Fragment>
        
      </Fragment>
    )
  });

  return (
    <div>
      <h1>This is the Cart</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState 
});

export default connect(mapStateToProps)(Cart);
