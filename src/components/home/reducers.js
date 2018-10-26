import {dfActionType} from "./actions";


const initialState = {
  status: ""
};

function df(state = initialState, action) {
  switch(action.type) {
    case dfActionType:
      return {
        ...state,
        type: action.type
      };
    default:{
      return state
    }
  }
}
