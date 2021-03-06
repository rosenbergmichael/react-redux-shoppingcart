import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import giantsHat from '../images/giantshat.jpeg';
import giantsJacket from '../images/giantsjacket.jpg';
import metsJersey from '../images/metsjersey.jpeg';
import bullsHat from '../images/bullshat.jpeg';
import { productQuantity, clearProduct } from '../actions/productQuantity';

function Cart({basketProps, productQuantity, clearProduct}) {
  let productsInCart = [];
  Object.keys(basketProps.products).forEach( function(item) {
    if(basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item])
    }
  });

  const productImages = (product) => {
    if(product.tagName === 'giantsHat') {
      return giantsHat;
    } else if(product.tagName === 'giantsJacket') {
      return giantsJacket;
    } else if(product.tagName === 'metsJersey') {
      return metsJersey;
    } else if(product.tagName === 'bullsHat') {
      return bullsHat;
    }
  };

  productsInCart = productsInCart.map( (product, index) => {
    return (
      <Fragment key={index}>
        <div className="product"><ion-icon onClick= {() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          <ion-icon onClick= {() => productQuantity('decrease', product.tagName)} className="decrease" name="remove-outline"></ion-icon>
            <span>{product.numbers}</span>
          <ion-icon onClick= {() => productQuantity('increase', product.tagName)} className="increase" name="add-outline"></ion-icon> 
        </div>
        <div className="total">${product.numbers * product.price}.00</div>
      </Fragment>
    )
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">
        { productsInCart }
      </div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost}.00</h4>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState 
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
