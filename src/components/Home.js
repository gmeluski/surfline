import React, {Component} from "react"
import {connect} from "react-redux"

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    let stations = data.map((station, i)=>{
      return <div key={i}>{station.title}</div>
    })

    return (
      <div>
        {stations}
      </div>
    )
  }
}

export default connect(state => ({data: state.example.data}))(Home)
