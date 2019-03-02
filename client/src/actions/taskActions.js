import { SENDTASK } from "./types";
import axios from "axios";

export const sendTask = async () => {
  const res = await axios.post("/api/task");

  return {
    type: SENDTASK,
    payload: res.data
  };
};
