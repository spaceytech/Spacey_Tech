import {
  USERREGISTER,
  BECOME_TASKER,
  TASKER_DETAIL,
  EDITTASKERDETAILS,
  USERLOGIN,
  LOGINSTATUS,
  SAVEEDIT,
  LOGOUT,
  AUTHUSER,
  TASKER_REGISTER_SUCCESS,
  DELETEUSER,
  UPLOADPHOTO
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
      break;
    case LOGOUT:
      return {
        ...state,
        success: "",
        basic_info: "",
        edit: "",
        login_status: false
      };
      break;
    case DELETEUSER:
      return action.payload;
      break;
    case AUTHUSER:
      return {
        ...state,
        ...action.payload
      };
      break;
    case BECOME_TASKER:
      return {
        ...state,
        become_tasker: action.payload
      };
      break;
    case TASKER_REGISTER_SUCCESS:
      return {
        ...state,
        basic_info: {
          ...state.basic_info,
          tasker_registered: action.payload
        }
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
      break;
    case UPLOADPHOTO:
      return {
        ...state,
        basic_info: {
          ...state.basic_info,
          image: action.payload
        }
      };
    default:
      return state;
  }
}
