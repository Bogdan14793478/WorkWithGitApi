import axios from "axios";

const baseURL = `${process.env.REACT_APP_URL_SERVER_ADRESS}`;

export const axiosInstance = axios.create({
  baseURL,
  responseType: "json",
});

const myToken = "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";

axiosInstance.interceptors.request.use((request) => {
  if (myToken != null && request.headers) {
    request.headers.Authorization = `token ${myToken}`;
    return request;
  }
  return request;
});
