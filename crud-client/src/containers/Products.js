import React, { Component } from 'react';

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };
  componentDidMount() {
    return fetch('http://localhost:5000/api/v1/products')
      .then(res => {
        return res.json();
      })
      .then(response => {
        setTimeout(() => {
          this.setState(() => ({
            products: response,
            isLoading: false
          }));
        }, 700);
      });
  }
  render() {
    return (
      <div>
        <h1>Products Page..</h1>
        {this.state.loading === true ? (
          <h1>Loading Products....</h1>
        ) : (
          this.state.products.map((product, key) => (
            <ul key={product.title}>
              <li>{product.title}</li>
            </ul>
          ))
        )}
      </div>
    );
  }
}

export default Products;
