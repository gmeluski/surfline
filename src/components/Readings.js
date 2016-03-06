import React, {Component} from "react"

class Readings extends Component {
  render () {
    if (this.props.isVisible) {
      return (
        <div className="row">
          <div className="one column">&nbsp;</div>
          <div className="eleven columns"
            dangerouslySetInnerHTML={{__html: this.props.buoyData}}>
          </div>
        </div>
      )
    } else {
      return (<span></span>)
    }

  }

}

export default Readings
