import { SEARCHTASKERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SEARCHTASKERS:
      return action.payload;
      break;
    default:
      return state;
  }
}
