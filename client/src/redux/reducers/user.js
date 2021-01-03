import { USER_SET } from "../actionTypes";

const initialState = {
  login: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_SET: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
