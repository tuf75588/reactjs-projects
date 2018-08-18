import React from 'react';
import Product from '../components/Product';
const ViewProduct = props => {
  const info = props.location.state.details;
  console.log(props);

  return (
    <div>
      <Product details={info} cols="col-12" showStock={true} />
    </div>
  );
};
export default ViewProduct;
