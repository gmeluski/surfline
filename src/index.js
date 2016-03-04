import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./store"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>haha I work</div>
  </Provider>,
  document.getElementById("root"))
