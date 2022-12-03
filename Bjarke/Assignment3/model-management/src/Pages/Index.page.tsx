import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <>
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
    </>
  );
};

export default IndexPage;
