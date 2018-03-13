import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default Header;
