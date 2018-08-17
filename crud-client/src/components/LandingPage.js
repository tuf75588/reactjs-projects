import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Andrew's Store</h1>
      <p className="lead">Welcome to Andrew's store</p>
      <hr className="my-4" />
      <p>You can create, read, update and delete products!</p>
      <p className="lead">
        <Link
          to="/products"
          className="btn btn-primary btn-lg"
          href="#"
          role="button"
        >
          View Products
        </Link>
      </p>
    </div>
  );
};

export default LandingPage;
