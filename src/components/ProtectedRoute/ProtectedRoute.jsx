import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../pages/constants";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = appRoutes.HOME_PAGE,
  children,
}) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
