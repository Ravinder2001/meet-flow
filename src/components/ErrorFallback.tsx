import React from "react";
import type { FC } from "react";
import type { FallbackProps } from "react-error-boundary";

const ErrorFallback: FC<FallbackProps> = ({ error }: FallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Something went wrong</h1>
        <p className="text-gray-600">{error.message}</p>
        <p className="text-gray-600 mt-2">Please try refreshing the page or contact support.</p>
      </div>
    </div>
  );
};

export default ErrorFallback;
