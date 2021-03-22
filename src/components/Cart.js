import React from 'react';
import { connect } from 'react-redux';

function Cart() {
  return (
    <div>
      <h1>This is the Cart</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  basketProps = state.basketState 
});

export default connect(mapStateToProps)(Cart);
