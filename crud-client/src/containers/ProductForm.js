import React, { Component } from 'react';

class ProductForm extends Component {
  state = {
    product: {
      title: '',
      description: '',
      price: '',
      quantity: 0,
      image: ''
    }
};
  valueChanged = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value
      }
    }));
};
  formSubmitted = e => {
    e.preventDefault();
    console.log(this.state.product);
  }
  render() {
    const { product } = this.state;
    return (
      <form onSubmit={this.formSubmitted}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input onChange={this.valueChanged} value={product.title} type="text" className="form-control" name="title" id="title" placeholder="Enter a title" required/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea onChange={this.valueChanged} value={product.description} className="form-control" name="description" id="description" placeholder="Enter a Description" rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input onChange={this.valueChanged} value={product.price} type="text" className="form-control" name="price" id="price" placeholder="Enter a price" required/>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={this.valueChanged} value={product.quantity} type="number" step="1" min="0" className="form-control" name="quantity" id="quantity" placeholder="Enter a quantity" required/>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input onChange={this.valueChanged} value={product.image} type="url" className="form-control" name="image" id="image" placeholder="http://example.com/image.jpg" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
);
  }
}

export default ProductForm;
