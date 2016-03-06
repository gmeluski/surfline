import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <Link className="button" to="/">Buoys</Link>
        <Link className="button" to="/favorites">Favorites</Link>
      </nav>
    )
  }

}

export default NavBar
