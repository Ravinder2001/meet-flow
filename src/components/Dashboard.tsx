import React from "react";
import { cn } from "../lib/utils";
import type { FC } from "react";

const Dashboard: FC = () => {
  const sampleData = [
    { id: 1, name: "Project A", status: "Active" },
    { id: 2, name: "Project B", status: "Pending" },
    { id: 3, name: "Project C", status: "Completed" },
  ];

  return (
    <div className={cn("min-h-screen p-6 bg-gray-100")}>
      <h1 className={cn("text-3xl font-bold mb-6")}>Dashboard</h1>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6")}>
        {sampleData.map((item: any) => (
          <div key={item.id} className={cn("bg-white p-4 rounded-lg shadow-md")}>
            <h2 className={cn("text-xl font-semibold")}>{item.name}</h2>
            <p className={cn("text-gray-600")}>Status: ${item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
