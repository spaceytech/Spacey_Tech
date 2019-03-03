import { SEARCHTASKERS } from "./types";
import axios from "axios";

export const searchTaskers = async data => {
  console.log(data);
  const res = await axios.get(
    `/api/searchTasker?task=${data.name}&size=${data.size}&address=${
      data.address
    }`
  );

  console.log(res.data);
  return {
    type: SEARCHTASKERS,
    payload: res.data
  };
};
