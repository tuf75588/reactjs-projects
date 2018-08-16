import React from 'react';

const LandingPage = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Andrew's Store</h1>
      <p className="lead">Welcome to Andrew's store</p>
      <hr className="my-4" />
      <p>You can create, read, update and delete products!</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          View Products
        </a>
      </p>
    </div>
  );
};

export default LandingPage;
