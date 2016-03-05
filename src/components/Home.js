import React, {Component} from "react"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import * as Actions from "../actions/actions"
import Station from "./Station.js"
import _ from "lodash"


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {favorites, data, dispatch} = this.props
    const actions = bindActionCreators(Actions, dispatch)
    let stations = data.map((station, i)=>{
      let isFavorite = _.find(favorites, {guid: station.guid})
      return <Station addFavorite={actions.addFavorite}
        isFavorite={isFavorite} info={station}
        title={station.title} guid={station.guid} key={i} / >
    })

    return (
      <div>
        {stations}
      </div>
    )
  }
}

export default connect(state => ({
  data: state.example.data,
  favorites: state.example.favorites
}))(Home)
