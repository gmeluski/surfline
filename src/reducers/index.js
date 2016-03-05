import * as types from "../actions/actionTypes"
import {combineReducers} from "redux"
import {routerStateReducer} from "redux-react-router"

function exampleReducer(state = {isLoading: false, data: [], error: false, favorites: []}, action = null) {
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
      let newFavorites = state.favorites.slice()
      if (newFavorites.indexOf(action.guid) === -1) {
        newFavorites.push(action.guid)
      }

      return Object.assign({}, state, {favorites: newFavorites})
    default:
      return state
  }
}

const rootReducer = combineReducers({
  router: routerStateReducer,
  example: exampleReducer,
})

export default rootReducer
