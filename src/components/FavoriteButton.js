import React, {Component} from 'react';

class FavoriteButton extends Component {

  render() {
    if (this.props.isFavorite) {
      return (<span>Saved!</span>)
    } else {
      return (<span>+</span>)
    }

  }
}

export default FavoriteButton
