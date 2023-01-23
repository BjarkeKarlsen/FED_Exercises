import axios from "axios";
import { useEffect, useState } from "react";

export default axios.create({ baseURL: "http://localhost:4001" });

export const getallLists = async (id) => {
  id = id || "";
  return await axios.get(`${baseUrl}/${id}`);
};

export const addList = async (list) => {
  return await axios.post(baseUrl, list);
};

export const editList = async (id, list) => {
  return await axios.put(`${baseUrl}/${id}`, list);
};

export const deleteList = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
