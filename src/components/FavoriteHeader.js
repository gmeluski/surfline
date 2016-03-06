import React, {Component} from "react"

class FavoriteHeader extends Component {

  render () {
    const readingsIcon = (this.props.readingsVisible) ? "-" : "+"

    return (
      <div className="row" onClick={this.props.handleClick}>
        <div className="one column">
          <span>{readingsIcon}</span>
        </div>
        <div className="eleven columns">
          <span>{this.props.guid}</span>
          <span>{this.props.title}</span>
          <span>{this.props.latLong}</span>
        </div>
      </div>
    )

  }

}

export default FavoriteHeader
