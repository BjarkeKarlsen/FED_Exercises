import { stringify } from "querystring";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [auth, setAuth] = useState<any>({});
  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
