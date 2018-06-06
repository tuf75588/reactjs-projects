var React = require("react");
var Popular = require("./Popular");
var ReactRouter = require("react-router-dom");
var Link = require("react-router-dom").Link;
var Router = require("react-router-dom").BrowserRouter;
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}
module.exports = App;
