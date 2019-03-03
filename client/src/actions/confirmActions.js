import { CONFIRMTASKS, CLEARCONFIRMTASKS } from "./types";
import axios from "axios";

export const confirmTasks = async data => {
  return {
    type: CONFIRMTASKS,
    payload: data
  };
};

export const clearConfirmTasks = () => {
  return {
    type: CLEARCONFIRMTASKS,
    payload: ""
  };
};
