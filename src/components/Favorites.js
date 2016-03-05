import React, {Component} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import * as Actions from "../actions/actions"
import Favorite from "./Favorite"

class Favorites extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {favorites, data, dispatch} = this.props

    let display = favorites.map((favorite) => {
      return (
        <Favorite favorite={favorite} />
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
