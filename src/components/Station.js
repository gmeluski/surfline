import React, {Component} from "react"
import FavoriteButton from "./FavoriteButton"

class Station extends Component {
  handleClick() {
    this.props.addFavorite(this.props.guid)
  }

  render() {
    const {title} = this.props
    return (
      <div onClick={this.handleClick.bind(this)}>
        {title}
        <FavoriteButton isFavorite={this.props.isFavorite} />
      </div>
    )
  }
}

export default Station
