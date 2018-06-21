var React = require("react");
var Popular = require("./Popular");
var Battle = require("./Battle");
var Navbar = require("./Navbar");
var Home = require("./Home");
var Results = require('./Results');
var ReactRouter = require("react-router-dom");
var Switch = ReactRouter.Switch;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route path="/battle/results" component={Results} />
            <Route render={() => <h2>I think you took a wrong turn</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
