import React, {Component} from "react"
import {connect} from 'react-redux';
import NavBar from "../components/NavBar"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {children} = this.props
    return (
      <div>
        <NavBar />
        <div className="container">
          {children}
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  routerState: state.router,
  example: state.example
}))(App)
