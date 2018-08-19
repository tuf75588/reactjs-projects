import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { withRouter } from "react-router-dom";
import { createProduct } from "../API";
class CreateProduct extends Component {
  state = {
    product: {
      title: "",
      description: "",
      price: "",
      quantity: 0,
      image: ""
    },
    creating: false
  };
  createProduct = product => {
    this.setState(() => ({
      creating: true
    }));
    product.quantity = Number(product.quantity);
    createProduct(product).then(res => {
      this.props.history.push(`/products/${res.id}`);
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <ProductForm
          onFormSubmitted={this.createProduct}
          details={this.state.product}
        />
      </div>
    );
  }
}

export default withRouter(CreateProduct);
