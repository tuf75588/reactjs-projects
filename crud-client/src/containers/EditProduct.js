import React, { Component } from "react";
import { getProduct } from "../API";
import ProductForm from "./ProductForm";

class EditProduct extends Component {
  state = {
    isLoading: true,
    product: {},
    isEditing: true
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getProduct(id).then(product => {
      this.setState(() => ({
        product,
        isLoading: false
      }));
    });
  }
  render() {
    return this.state.isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <ProductForm product={this.state.product} />
    );
  }
}

export default EditProduct;
