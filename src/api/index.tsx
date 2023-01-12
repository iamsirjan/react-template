import { baseUrl } from "../config";
import axios from "axios";
import { UserProps } from "../pages/types";



export const getUsers = () => {
  return axios.get<UserProps[]>(`${baseUrl}/users`);
};

export const deleteUsers = (userId:number) => {
  return axios.delete(`${baseUrl}/users/${userId}`);
};

export const editUsers = (userId:number) => {
  return axios.patch(`${baseUrl}/users/${userId}`);
};
