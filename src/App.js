import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './router';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">index</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/gujia">gujia</Link></li>
          <li><Link to="/shop">shop</Link></li>
        </ul>

        <hr />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}/>
        ))}
      </div>
    </Router>
  );
}

export default App;
