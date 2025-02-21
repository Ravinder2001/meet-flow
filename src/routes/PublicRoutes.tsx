import React from "react";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

const PublicRoutes = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default PublicRoutes;
