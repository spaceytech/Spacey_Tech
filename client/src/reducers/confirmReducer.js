import { CONFIRMTASKS, CLEARCONFIRMTASKS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case CONFIRMTASKS:
      return action.payload;
      break;
    case CLEARCONFIRMTASKS:
      return action.payload;
    default:
      return state;
  }
}
