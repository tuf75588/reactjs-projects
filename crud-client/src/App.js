import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Products from "./containers/Products";
import ViewProduct from "./containers/ViewProduct";
import CreateProduct from "./containers/CreateProduct";
import EditProduct from "./containers/EditProduct";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/create" component={CreateProduct} />
            <Route exact path="/products/:id/edit" component={EditProduct} />
            <Route path="/products/:id/" component={ViewProduct} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
