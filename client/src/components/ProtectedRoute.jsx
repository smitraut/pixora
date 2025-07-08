import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo = "/auth" }) => {
  return isAllowed ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
