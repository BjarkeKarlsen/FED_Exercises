import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }: { allowedRoles: any }) => {
  const { auth } = useAuth();
  const location = useLocation();
  //return auth?.roles?.find((roles: string) => allowedRoles?.includes(roles)) ? (
  return allowedRoles?.includes(auth[2]) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
