import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import giantsHat from '../images/giantshat.jpeg';
import giantsJacket from '../images/giantsjacket.jpg';
import metsJersey from '../images/metsjersey.jpeg';
import bullsHat from '../images/bullshat.jpeg';

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
        <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
            <span>{product.numbers}</span>
          <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>  
        </div>
        <div className="total">${product.numbers * product.price}.00</div>
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
