import { SENDTASK } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SENDTASK:
      return action.payload;
      break;
    default:
      return state;
  }
}
