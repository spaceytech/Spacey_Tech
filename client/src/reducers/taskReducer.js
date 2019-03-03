import { SENDTASK, TASKNAME } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TASKNAME:
      return {
        ...state,
        name: action.payload
      };
    case SENDTASK:
      return {
        ...state,
        ...action.payload
      };
      break;
    default:
      return state;
  }
}
