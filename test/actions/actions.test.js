import {expect} from "chai"
import * as actions from "../../src/actions/actions"
import * as types from "../../src/actions/ActionTypes"

describe("actions", () => {
  it("creates an add favorite", () => {
    const info = {you: "hi"}
    const expectedAction = {
      type: types.ADD_FAVORITE,
      info
    }

    expect(actions.addFavorite(info)).to.eql(expectedAction)
  })

})
