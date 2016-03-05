import React, {Component} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import * as Actions from "../actions/actions"

class Favorites extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {favorites, data, dispatch} = this.props

    console.log(favorites)
    let display = favorites.map((favorite) => {
      let latLong = favorite["georss:point"]["#"]
      return (
        <div>
          <span>{favorite.guid}</span>
          <span>{favorite.title}</span>
          <span>{latLong}</span>
        </div>
      )

    })
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default connect(state=>({
  data: state.example.data,
  favorites: state.example.favorites
}))(Favorites)
