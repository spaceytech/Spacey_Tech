import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import taskerReducer from "./taskerReducer";
import confirmReducer from "./confirmReducer";

export default combineReducers({
  tasksDetail: taskReducer,
  taskers: taskerReducer,
  confirmTask: confirmReducer
});
