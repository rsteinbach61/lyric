import * as actionTypes from './actions';

const initialState = {
  story: null,
  show: true
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.UPDATE_STORY:
        return {
          ...state, story: action.story.response, show: true
        }
  default: return initialState;
  }
}

export default reducer;
