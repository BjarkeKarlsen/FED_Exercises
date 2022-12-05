import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }: { allowedRoles: any }) => {
  const { auth } = useAuth();
  const location = useLocation();

  //   return auth?.roles?.find((role: string) => allowedRoles?.includes(role)) ? (
  return allowedRoles?.includes(localStorage.getItem("role")) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
