import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Products from './containers/Products';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/products" component={Products} />
            <Route render={() => <h1>Page not found!</h1>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
