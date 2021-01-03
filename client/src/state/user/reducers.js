import * as actions from './actions';

export function user(state = actions.INIT_USER, action) {
  switch (action.type) {
    case actions.SET_USER: {
      return { ...state, ...action.user };
    }

    default:
      return state;
  }
}

export default user;
