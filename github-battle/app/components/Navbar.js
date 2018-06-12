var React = require("react");
var NavLink = require("react-router-dom").NavLink;
function Navbar(props) {
  return (
    <ul className="nav">
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>
    </ul>
  );
}
module.exports = Navbar;
