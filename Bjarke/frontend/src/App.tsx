import "./styles/global.css";
import { SetupInterceptors } from "./utils/Axios-utils";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Middelware/RequireAuth";
import LoginPage from "./Pages/Login.page";
import Manager from "./Pages/GameInfo.page";
import Game from "./Pages/Game.page";
import GameId from "./Pages/GameId.page";
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
          <Route path="game" element={<Game />} />
          <Route path="game/:gameId" element={<GameId />} />

          {/*private routes */}
          <Route element={<RequireAuth allowedRoles={["Manager"]} />}>
            <Route path="manager" element={<Manager />} />
          </Route>

          {/*catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
