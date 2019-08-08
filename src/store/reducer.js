import * as actionTypes from './actions';

const initialState = {
  story: null,
  text: null,
  show: true
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.UPDATE_STORY:
        return {
          ...state, story: action.story.response, show: true
        }

    case actionTypes.GET_TEXT:
    debugger;
          return {
            ...state, text: action.text.response
          }

  default: return initialState;
  }
}

export default reducer;
