import { CONFIRMTASKS, CLEARCONFIRMTASKS } from "./types";
import axios from "axios";

export const confirmTasks = async data => {
  const taskerId = data.tasker;

  const res = await axios.get(`/api/get_tasker_by_id/${taskerId}`);
  const newData = { ...data, tasker: res.data.tasker };
  return {
    type: CONFIRMTASKS,
    payload: newData
  };
};

export const changeDescription = async desc => {
  return { type: "CHANGEDESC", payload: desc };
};

export const clearConfirmTasks = () => {
  return {
    type: CLEARCONFIRMTASKS,
    payload: ""
  };
};
