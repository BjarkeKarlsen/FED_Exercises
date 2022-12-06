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
            <Link to="/model">Model</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-green-500 md:hover:text-green-500">
            <Link to="/job">Job</Link>
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

{
  /* <ul className="flex flex-row">
<li>
  <Link
    className="flex-row hover:text-green-500 md:hover:text-green-500 border-4"
    to="/"
  >
    Home
  </Link>
</li>
<li>
  <Link
    className="flex-row hover:text-green-500 md:hover:text-green-500"
    to="/manager"
  >
    Manager
  </Link>
</li>
<li>
  <Link
    className="flex-row hover:text-green-500 md:hover:text-green-500"
    to="/model"
  >
    Model
  </Link>
</li>
<li>
  <Link
    className="flex-row hover:text-green-500 md:hover:text-green-500"
    to="/job"
  >
    Job
  </Link>
</li>
<li>
  <Link
    className="flex-row hover:text-green-500 md:hover:text-green-500"
    to="/login"
  >
    Login
  </Link>
</li>
</ul> */
}

//    <Route path="/super-heroes">
//           <SuperHeroesPage />
//         </Route>
//         <Route path="/rq-super-heroes/:heroId">
//           <RQSuperHeroPage />
//         </Route>
//         <Route path="/rq-super-heroes">
//           <RQSuperHeroesPage />
//         </Route>
//         <Route path="/rq-parallel">
//           <ParallelQueriesPage />
//         </Route>
//         <Route path="/rq-dynamic-parallel">
//           <DynamicParallelPage heroIds={[1, 3]} />
//         </Route>
//         <Route path="/rq-dependent">
//           <DependentQueriesPage email="vishwas@example.com" />
//         </Route>
//         <Route path="/rq-paginated">
//           <PaginatedQueriesPage />
//         </Route>
