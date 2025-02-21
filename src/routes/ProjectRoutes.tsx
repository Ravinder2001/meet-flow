import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Dashboard from "../components/Dashboard";
import Login from "../pages/Login";
import type { FC } from "react";

const ProjectRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <div className="text-center p-4">Profile</div>
          </PrivateRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path="*"
        element={
          <PublicRoutes>
            <div className="text-center p-4">404 Not Found</div>
          </PublicRoutes>
        }
      />
    </Routes>
  );
};

export default ProjectRoutes;
