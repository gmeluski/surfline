import React, {Component} from "react"
import Readings from "./Readings"
import FavoriteHeader from "./FavoriteHeader"

class Favorite extends Component {
  constructor(props) {
    super(props)

    this.state = {
      readingsVisible: false,
    }
  }

  toggleReadings() {
    this.setState({readingsVisible: !this.state.readingsVisible})
  }

  render () {
    const {favorite} = this.props
    let latLong = favorite["georss:point"]["#"]

    return(
      <div>
        <FavoriteHeader guid={favorite.guid}
          readingsVisible={this.state.readingsVisible}
          title={favorite.title} latLong={latLong}
          handleClick={this.toggleReadings.bind(this)}/>
        <Readings isVisible={this.state.readingsVisible}
          buoyData={favorite.description} />
      </div>
    )
  }
}

export default Favorite
