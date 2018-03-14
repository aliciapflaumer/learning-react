import React from 'react';

import {
  BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <ul>
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
            </ul>
          </nav>
        </div>
      </Router>
    )
  }
}

export default Header;
