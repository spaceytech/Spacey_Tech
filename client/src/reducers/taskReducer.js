import {
  SENDTASK,
  TASKNAME,
  CLEARTASKDETAILS,
  GETTASKS
} from "../actions/types";

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
    case GETTASKS:
      return {
        ...state,
        availableTasks: action.payload
      };
      break;
    case CLEARTASKDETAILS:
      return action.payload;
    default:
      return state;
  }
}
