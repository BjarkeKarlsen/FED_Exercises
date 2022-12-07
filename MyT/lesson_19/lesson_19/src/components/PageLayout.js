import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function PageLayout() {
  return (
    <>
      <h1>Solution to fetching weather data</h1>
      <Navbar />
      <Outlet />
      <footer> Created by My-Thanh Thi Le</footer>
    </>
  );
}
