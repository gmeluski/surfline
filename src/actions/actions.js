import * as types from "./actionTypes"
import axios from "axios"

function requestData() {
  return {type: types.REQ_DATA}
}

function receiveData(json) {
  return {
    type: types.RECV_DATA,
    data: json
  }
}

function receiveError(json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
}

export function addFavorite(info) {
  return {
    type: types.ADD_FAVORITE,
    info
  }
}

export function fetchData(url) {
  return function (dispatch) {
    dispatch(requestData)
    return axios({
      url: url,
      timeout: 2000,
      method: "get",
      responseType: "json"
     }).then((response)=> {
        dispatch(receiveData(response.data))
     }).catch((error)=>{
        dispatch((receiveError(error.data)))
     })
  }
}

