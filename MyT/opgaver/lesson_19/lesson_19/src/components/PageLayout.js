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
//1The Outlet component alone allows nested routes to render their element content out and anything else the layout route is rendering, i.e. navbars, sidebars, specific layout components, etc.
