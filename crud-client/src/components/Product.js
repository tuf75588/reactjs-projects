import React from 'react';
import { Link, Redirect } from 'react-router-dom';

//dynamically changing the url based on the current path
//pass state of products component through to product and then to ViewProduct
const Product = props => {
  const { details, showStock } = props;
  const linkText = props.path === '/products' ? 'View Product' : 'Edit Product';
  const location = {
    pathname: `${props.path}/${details.id}`,
    state: {
      details
    }
  };
  const editLocation = {
    pathname: '/products/create',
    state: {
      details
    }
  };
  return (
    <div className={`card ${props.cols}`}>
      <img className="card-img-top" src={details.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{details.title}</h5>
        <p className="card-text">{details.description}</p>
        <p className="card-text">${details.price}</p>
        {showStock ? (
          <p className="card-text">{details.quantity} in stock</p>
        ) : (
          ''
        )}
        <Link
          to={props.path === '/products' ? location : editLocation}
          className={
            props.path === '/products' ? 'btn btn-primary' : 'btn btn-danger'
          }
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default Product;
