import React, {Component} from "react"
import {connect} from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {children} = this.props
    return (
      <div>
        <div className="container">
          {children}
        </div>
        haha I work
      </div>
    )
  }
}

export default connect(state => ({routerState: state.router, example: state.example }))(App)
