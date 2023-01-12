import Axios from "axios";
import { CORESERVICE } from "../utils/prefix";

export const loginAPI = async ({ userId, password }) => {
  const request = `${CORESERVICE}`;

  const response = await Axios.post(request);

  return response;
};

export const logoutAPI = async ({ sessionId }) => {
  const request = `${CORESERVICE}`;

  const response = await Axios.post(request);

  return response;
};
