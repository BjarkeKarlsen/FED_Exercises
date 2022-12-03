import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/Home.page";
import LoginPage from "../Pages/Login.page";
import Manager from "../Pages/Manager.page";
import Job from "../Pages/Job.page";
import Model from "../Pages/Model.page";

const Header = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex border-b">
            <li className="-mb-px mr-1">
              <Link
                className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                to="/manager"
              >
                Manager
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                to="/job"
              >
                Job
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                to="/model"
              >
                Model
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/super-heroes">
          <SuperHeroesPage />
        </Route>
        <Route path="/rq-super-heroes/:heroId">
          <RQSuperHeroPage />
        </Route>
        <Route path="/rq-super-heroes">
          <RQSuperHeroesPage />
        </Route>
        <Route path="/rq-parallel">
          <ParallelQueriesPage />
        </Route>
        <Route path="/rq-dynamic-parallel">
          <DynamicParallelPage heroIds={[1, 3]} />
        </Route>
        <Route path="/rq-dependent">
          <DependentQueriesPage email="vishwas@example.com" />
        </Route>
        <Route path="/rq-paginated">
          <PaginatedQueriesPage />
        </Route> */}
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
