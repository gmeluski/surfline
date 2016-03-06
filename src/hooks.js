import { bindActionCreators } from "redux"
import * as Actions from "./actions/actions"

export function loadData({dispatch}) {
  const actions = bindActionCreators(Actions, dispatch)

  return (url) => {
    actions.fetchData(url)
  }
}
