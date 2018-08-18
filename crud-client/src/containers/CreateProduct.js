import React, { Component } from 'react';
import ProductForm from './ProductForm';
class CreateProduct extends Component {
  state = {
    product: {
      title: '',
      description: '',
      price: '',
      quantity: 0,
      image: ''
    },
    creating: false
  };
  render() {
    return (
      <div>
        <ProductForm />
      </div>
    );
  }
}

export default CreateProduct;
