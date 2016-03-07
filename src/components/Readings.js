import React, {Component} from "react"

class Readings extends Component {
  render () {
    if (this.props.isVisible) {

      let safeHtml = this.props.buoyData.split(/<br \/>/)
        .filter((item) => {
          if (item.trim()) {
            return true
          }
          return false
        }).map((item) => {
          let main = {}
          let cleaned = item.trim()
          let titleRegex = /<strong>(.*?)<\/strong>/
          let description

          main.title = titleRegex.exec(cleaned)[1]
          description = cleaned.split(/<\/strong>/)

          if (description[1]) {
            main.description = description[1].trim()
              .replace(/&#176;/g, "\u00B0")
          }

          return <div><b>{main.title}</b> {main.description}</div>

        })
      return (
        <div className="row">
          <div className="one column">&nbsp;</div>
          <div className="eleven columns">
            {safeHtml}
          </div>
        </div>
      )
    } else {
      return (<span></span>)
    }

  }

}

export default Readings
