import React, {Component} from "react"

class Station extends Component {
  handleClick() {
    this.props.addFavorite(this.props.guid)
  }

  render() {
    const {title} = this.props
    return (
      <div onClick={this.handleClick.bind(this)}>
        {title}
      </div>
    )
  }
}

export default Station
