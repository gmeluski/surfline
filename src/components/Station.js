import React, {Component} from "react"
import FavoriteButton from "./FavoriteButton"

class Station extends Component {
  handleClick() {
    this.props.addFavorite(this.props.info)
  }

  render() {
    const {title} = this.props
    return (
      <div className="row" onClick={this.handleClick.bind(this)}>
        <div className="one columns">
          <FavoriteButton isFavorite={this.props.isFavorite} />
        </div>
        <div className="eleven columns">
          {title}
        </div>
      </div>
    )
  }
}

export default Station
