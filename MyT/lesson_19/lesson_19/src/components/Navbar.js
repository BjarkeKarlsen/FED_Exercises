import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/city">Weather with City&nbsp;</NavLink>
      <NavLink to="/country">Weather with Country and Zip&nbsp;</NavLink>
    </nav>
  );
}
