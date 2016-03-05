import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./store"
import {ReduxRouter} from "redux-react-router"
import {Route} from "react-router"
import App from "./containers/App"
import Home from "./components/Home"
import {fetchData} from "./actions/actions"

const store = configureStore()
let url = "http://localhost:8080/api"

function loadData() {
  store.dispatch(fetchData(url))
}

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route component={App}>
        <Route path="/" component={Home} onEnter={loadData} />
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById("root"))
