import { SET_MESSAGES } from '../actions/index';
import { POST_MESSAGE } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
