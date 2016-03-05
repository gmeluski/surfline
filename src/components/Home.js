import React, {Component} from "react"
import {connect} from "react-redux"

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    console.log(data)
    return (
      <div>Hey guys</div>
    )
  }
}

export default connect(state => ({data: state.example.data}))(Home)
