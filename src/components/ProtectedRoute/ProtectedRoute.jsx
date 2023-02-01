import { appRoutes } from "pages";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = appRoutes.HOME_PAGE,
  children,
}) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
