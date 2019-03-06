import { SEARCHTASKERS, CLEARSEARCHTASKERS } from "./types";
import axios from "axios";

export const searchTaskers = async data => {
  console.log(data);
  const res = await axios.get(
    `/api/search_tasker?task=${data.name}&size=${data.size}&address=${
      data.address
    }`
  );

  console.log(res.data);
  return {
    type: SEARCHTASKERS,
    payload: res.data
  };
};

export const clearSearchTaskers = () => {
  return {
    type: CLEARSEARCHTASKERS,
    payload: ""
  };
};
