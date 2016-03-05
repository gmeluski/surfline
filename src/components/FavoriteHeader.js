import React, {Component} from "react"

class FavoriteHeader extends Component {

  render () {
    const readingsIcon = (this.props.readingsVisible) ? "-" : "+"

    return (
      <div onClick={this.props.handleClick}>
        <span>{readingsIcon}</span>
        <span>{this.props.guid}</span>
        <span>{this.props.title}</span>
        <span>{this.props.latLong}</span>
      </div>
    )

  }

}

export default FavoriteHeader
