var React = require("react");
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;
function Home() {
  return (
    <div className='home-container'>
      <h1>Battle your friends on Github!</h1>
      <Link className='button' to='/battle'>
      Battle!
      </Link>
    </div>
  )
}
module.exports = Home;
