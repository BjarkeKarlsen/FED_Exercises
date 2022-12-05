import "./styles/global.css";
import { SetupInterceptors } from "./utils/Axios-utils";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Middelware/RequireAuth";
import LoginPage from "./Pages/Login.page";
import Manager from "./Pages/Manager.page";
import Job from "./Pages/Job.page";
import JobId from "./Pages/JobId.page";
import Model from "./Pages/Model.page";
import Unauthorized from "./Pages/Unauthorized";
import Layout from "./Layout/Layout";
import Missing from "./Pages/Missing.Page";

function App() {
  SetupInterceptors();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*public routes */}
          <Route path="login" element={<LoginPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/*private routes */}
          <Route element={<RequireAuth allowedRoles={["Model", "Manager"]} />}>
            <Route path="job" element={<Job />} />
            <Route path="job/:jobId" element={<JobId />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["Manager"]} />}>
            <Route path="manager" element={<Manager />} />
            <Route path="model" element={<Model />} />
          </Route>

          {/*catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
