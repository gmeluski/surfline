import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import configureStore from "./store"
import {ReduxRouter} from "redux-react-router"
import {Route} from "react-router"
import App from "./containers/App"
import Home from "./components/Home"
import Favorites from "./components/Favorites"
import {fetchData} from "./actions/actions"
import * as hooks from './hooks'
import { browserHistory } from "react-router"

const store = configureStore()
let url = "http://localhost:8080/api"

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      <Route history={browserHistory}>
        <Route component={App} onEnter={hooks.loadData(store)(url)}>
          <Route path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Route>
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById("root"))
