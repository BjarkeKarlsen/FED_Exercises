import { useEffect, useState } from "react";
import api from "./api.js";

const FetchAllLists = () => {
  const LOCAL_STORAGE_KEY = "lists";
  const [lists, setLists] = useState([]);

  //fetchLists
  const fetchLists = async () => {
    const response = await api.get("/lists");
    return response.data;
  };

  useEffect(() => {
    const getAllLists = async () => {
      const allLists = await fetchLists();
      if (allLists) setLists(allLists);
    };

    getAllLists();
  }, []);
};
export default FetchAllLists;
