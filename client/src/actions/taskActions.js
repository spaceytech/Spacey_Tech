import { SENDTASK, TASKNAME, CLEARTASKDETAILS, GETTASKS } from "./types";
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

export const getTasks = async () => {
  const res = await axios.get("/api/get_tasks");
  console.log(res.data);
  return {
    type: GETTASKS,
    payload: res.data.tasks
  };
};
