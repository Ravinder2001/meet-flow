import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import type { FC } from "react";
const ProjectRoutes = lazy(() => import("./routes/ProjectRoutes"));

const App: FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error, info) => console.error("Error:", error, info)}>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <ProjectRoutes />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
