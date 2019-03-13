import {
  USERREGISTER,
  BECOME_TASKER,
  TASKER_DETAIL,
  EDITTASKERDETAILS
} from "./types";
import axios from "axios";

export const userRegister = async data => {
  const res = await axios.post("/auth/register", data);
  console.log(res.data);
  return {
    type: USERREGISTER,
    payload: res.data
  };
};

export const become_tasker = () => {
  return {
    type: BECOME_TASKER,
    payload: true
  };
};

export const tasker_details = async data => {
  console.log(data);
  return {
    type: TASKER_DETAIL,
    payload: data
  };
};

export const edit_tasker_details = async data => {
  const skills = { ...data };

  console.log(skills);
  return {
    type: EDITTASKERDETAILS,
    payload: skills
  };
};

export const send_tasker_details = async (details, id) => {
  const data = {
    ...details,
    id
  };

  const res = await axios.post("/api/save_tasker_details", data);
  console.log(res.data);
};
