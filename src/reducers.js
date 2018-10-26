import { dfActionType } from './actions'

const initialState = {

};

export function df(state = initialState, action) {
  switch(action.type) {
    case dfActionType:
      return {
        ...state,
        type: action.type
      }
  }
}
