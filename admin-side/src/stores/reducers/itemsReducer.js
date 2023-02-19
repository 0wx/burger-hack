const { GET_ITEMS } = require('../actions/actionTypes')

const initialState = {
  items: [],
}

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}

export default itemsReducer
