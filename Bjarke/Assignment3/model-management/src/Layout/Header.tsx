import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../Pages/Home.page";
import LoginPage from "../Pages/Login.page";
import "../styles/Header.css";

const Header = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
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
