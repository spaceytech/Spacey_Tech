import { USERREGISTER } from "./types";
import axios from "axios";

export const userRegister = async data => {
  const res = await axios.post("/auth/register", data);
  console.log(res.data);
  return {
    type: USERREGISTER,
    payload: res.data
  };
};
