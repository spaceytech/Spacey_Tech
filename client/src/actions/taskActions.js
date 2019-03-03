import { SENDTASK, TASKNAME } from "./types";
import axios from "axios";

export const taskName = name => {
  return {
    type: TASKNAME,
    payload: name
  };
};

export const sendTask = async data => {
  const res = await axios.post("/api/task", data);

  return {
    type: SENDTASK,
    payload: res.data
  };
};
