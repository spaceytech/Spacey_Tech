import { SENDTASK, TASKNAME, CLEARTASKDETAILS } from "./types";
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

export const clearTaskDetails = () => {
  return {
    type: CLEARTASKDETAILS,
    payload: ""
  };
};
