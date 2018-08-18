import React, { Component } from 'react';
import Product from '../components/Product';
class ViewProduct extends Component {
  state = {
    isLoading: true,
    product: {}
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({
        product: this.props.location.state,
        isLoading: false
      }));
    }, 1000);
  }
  render() {
    const { details } = this.props.location.state;
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Product details={details} />
        )}{' '}
      </div>
    );
  }
}

export default ViewProduct;
