import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "./Layout/Header";
import Meta from "./Layout/Meta";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Meta />
      <Header />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
