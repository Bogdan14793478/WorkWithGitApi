import { axiosInstance } from "./axios";

export async function getDataUser(user, page) {
  if (page > 1) {
    return await axiosInstance.get(`/search/users?q=${user}+page:%${page}`);
  }
  return await axiosInstance.get(`/search/users?q=${user}`);
}

export async function getCurrentUser(user) {
  return await axiosInstance.get(`/users/${user}`);
}

export async function getCurrentRepos(user) {
  return await axiosInstance.get(`/users/${user}/repos`);
}
