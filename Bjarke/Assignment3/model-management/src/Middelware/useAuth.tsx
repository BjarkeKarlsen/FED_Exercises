import { useContext } from "react";
import AuthContext from "../Context/AuthProvider";

const useAuth = () => {
  return useContext<any>(AuthContext);
};

export default useAuth;
