import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import taskerReducer from "./taskerReducer";

export default combineReducers({
  tasksDetail: taskReducer,
  taskers: taskerReducer
});
