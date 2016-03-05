import {compose, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {reduxReactRouter} from "redux-react-router"
import createHistory from "history/lib/createBrowserHistory"
import rootReducer from "../reducers"

const createAppStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({createHistory})
)(createStore)

export default function configureStore(initialState) {
  const store = createAppStore(rootReducer, initialState)

  return store
}
