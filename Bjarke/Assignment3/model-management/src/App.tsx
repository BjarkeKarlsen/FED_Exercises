import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/global.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./Layout/Header";
import Meta from "./Layout/Meta";
import LoginPage from "./Pages/Login.page";
import AuthProvider from "./utils/authprovider";
import { Admin } from "react-admin";
import { ToastContainer, toast } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  const [token, setToken] = useState();
  // if (!token) {
  //   return element={<LoginPage setToken={setToken} />}/>;
  // }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Admin loginPage={LoginPage} authProvider={AuthProvider} /> */}
      <ToastContainer />
      <Meta />
      <Header />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
