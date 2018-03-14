import React from 'react';

import {
  BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h2>Home page</h2>
      </div>
    )
};

const About = () => {
    return(
      <div>
        <h2>About page</h2>
      </div>
    )
};

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

        </div>
      </Router>
    )
  }
}

export default Header;
