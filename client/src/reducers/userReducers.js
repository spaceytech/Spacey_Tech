import {
  USERREGISTER,
  BECOME_TASKER,
  TASKER_DETAIL,
  EDITTASKERDETAILS,
  USERLOGIN,
  LOGINSTATUS,
  SAVEEDIT
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case USERREGISTER:
      return action.payload;
      break;
    case USERLOGIN:
      return action.payload;
      break;
    case LOGINSTATUS:
      return {
        ...state,
        login_status: true
      };
    case BECOME_TASKER:
      return {
        ...state,
        become_tasker: action.payload
      };
      break;
    case TASKER_DETAIL:
      return {
        ...state,
        tasker_detail: action.payload
      };
      break;
    case EDITTASKERDETAILS:
      return {
        ...state,
        tasker_detail: {
          ...state.tasker_detail,
          skills: action.payload
        }
      };
      break;
    case SAVEEDIT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
