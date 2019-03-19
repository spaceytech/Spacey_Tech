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
  DELETEUSER
} from "./types";
import axios from "axios";

export const delete_user = async () => {
  const res = await axios.get("/auth/deactivate");

  return {
    type: DELETEUSER,
    payload: ""
  };
};

export const success_tasker_register = async id => {
  const res = await axios.post("/auth/tasker_success", { id });
  return {
    type: TASKER_REGISTER_SUCCESS,
    payload: true
  };
};

export const auth_user = async () => {
  const res = await axios.get("/auth/users");
  console.log(res.data);
  return {
    type: AUTHUSER,
    payload: res.data
  };
};

export const logout_user = async () => {
  const res = await axios.get("/auth/logout");
  return {
    type: LOGOUT,
    payload: ""
  };
};

export const save_edit = async (data, id) => {
  console.log(id);
  const res = await axios.post(`/auth/edit/${id}`, data);

  return {
    type: SAVEEDIT,
    payload: res.data
  };
};

export const userRegister = async data => {
  const res = await axios.post("/auth/register", data);
  console.log(res.data);
  return {
    type: USERREGISTER,
    payload: res.data
  };
};

export const userLogin = async data => {
  const res = await axios.post("/auth/signin", data);
  console.log(res.data);
  return {
    type: USERLOGIN,
    payload: res.data
  };
};

export const login_status = async () => {
  return {
    type: LOGINSTATUS,
    payload: true
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
