import React, { Component } from 'react';
import Product from '../components/Product';
import { getProducts } from '../API';
class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };
  componentDidMount() {
    getProducts().then(response => {
      setTimeout(() => {
        this.setState(() => ({
          products: response,
          isLoading: false
        }));
      }, 700);
    });
  }
  render() {
    const { url } = this.props.match;

    return (
      <div>
        {this.state.isLoading ? (
          <h2>Loading products...</h2>
        ) : (
          <div className="row">
            {this.state.products.map(product => (
              <Product
                key={product.id}
                details={product}
                cols="col-4"
                path={this.props.location.pathname}
                showStock={false}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Products;
