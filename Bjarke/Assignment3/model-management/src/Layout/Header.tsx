import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/Home.page";
import LoginPage from "../Pages/Login.page";

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
                to="/rq-super-heroes"
              >
                RQ Super Heroes
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
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
