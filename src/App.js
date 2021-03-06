import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Sidebar  from './components/Sidebar/Sidebar';
import routes from './routes';
import Search from './components/Search/Search'
import OrderDetails from './components/OrderDetails/OrderDetails'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Search />
          <Route path="/" exact component={Home} />
          <div>
            <nav><Sidebar /></nav>
            <main>
              {routes.map(route =>
                <Route
                  key={route.title}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )}
              <Route to="/order/:id" isExact={ true } component={OrderDetails} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
