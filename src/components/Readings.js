import React, {Component} from "react"

class Readings extends Component {
  render () {
    if (this.props.isVisible) {
      return (
        <div dangerouslySetInnerHTML={{__html: this.props.buoyData}}>
        </div>
      )
    } else {
      return (<span></span>)
    }

  }

}

export default Readings
