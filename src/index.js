import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./store"
import {ReduxRouter} from "redux-react-router"
import {Route} from "react-router"
import App from "./containers/App"
import Home from "./components/Home"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById("root"))
