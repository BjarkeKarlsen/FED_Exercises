import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/Home.page";
import LoginPage from "../Pages/Login.page";
import Manager from "../Pages/Manager.page";
import Job from "../Pages/Job.page";
import Model from "../Pages/Model.page";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <Router>
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
            <Navbar.Link
              className="hover:text-green-500 md:hover:text-green-500"
              href="/"
            >
              Home
            </Navbar.Link>

            <Navbar.Link
              className="hover:text-green-500 md:hover:text-green-500"
              href="/manager"
            >
              Manager
            </Navbar.Link>

            <Navbar.Link
              className="hover:text-green-500 md:hover:text-green-500"
              href="/model"
            >
              Model
            </Navbar.Link>

            <Navbar.Link
              className="hover:text-green-500 md:hover:text-green-500"
              href="/job"
            >
              Job
            </Navbar.Link>

            <Navbar.Link
              className="hover:text-green-500 md:hover:text-green-500"
              href="/login"
            >
              Login
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/manager" element={<Manager />}></Route>
          <Route path="/job" element={<Job />}></Route>
          <Route path="/model" element={<Model />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Header;

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
