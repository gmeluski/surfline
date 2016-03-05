import * as types from "../actions/actionTypes"
import {combineReducers} from "redux"
import {routerStateReducer} from "redux-react-router"

function exampleReducer(state = {isLoading: false, data: [], error: false, favorites: [], updated: new Date()}, action = null) {
  switch (action.type) {
    case types.RECV_ERROR:
      return Object.assign({}, state,
        {isLoading: false, data: action.data, error: true})
    case types.RECV_DATA:
      return Object.assign({}, state,
        {isLoading: false, data: action.data, error: false})
    case types.REQ_DATA:
      return Object.assign({}, state,
        {isLoading: true, error: false})
    case types.ADD_FAVORITE:
      if (state.favorites.indexOf(action.guid) === -1) {
        return Object.assign({}, state, {
          favorites: [
            ...state.favorites,
            action.guid
          ]
        })
      }
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  router: routerStateReducer,
  example: exampleReducer,
})

export default rootReducer
