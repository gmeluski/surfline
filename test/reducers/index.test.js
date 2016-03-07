import {expect} from "chai"
import reducer from "../../src/reducers"
import * as types from "../../src/actions/ActionTypes"


describe("main reducer", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
    ).eql({
        router: null,
        example: {
          isLoading: false,
          data: [],
          error: false,
          favorites: [],
        }
      }
    )
  })
 })

