import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div>
      <Navbar
        fluid={true}
        rounded={false}
        className="sticky top-0 shadow-md bg-white"
      >
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            alt="Fattylee"
            width="80px"
            height="80px"
            className="mr-3 h6"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>

        <Navbar.Toggle className="hover:text-green-500 md:hover:text-green-500" />

        <Navbar.Collapse>
          <Navbar.Link className="hover:text-green-500 md:hover:text-green-500">
            <Link to="/">Home</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-green-500 md:hover:text-green-500">
            <Link to="/manager">Manager</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-green-500 md:hover:text-green-500">
            <Link to="/game">Boardgame</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-green-500 md:hover:text-green-500">
            <Link to="/manager">Login</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
