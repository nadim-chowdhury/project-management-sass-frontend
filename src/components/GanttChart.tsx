import React from "react";
// import { Gantt } from "react-gantt-chart"; // Ensure this matches your library's import
// import "react-gantt-chart/dist/index.css"; // Import the necessary CSS

const GanttChart = () => {
  const steps = [
    {
      id: "step1",
      name: "Task 1",
      start: new Date("2023-01-01"),
      end: new Date("2023-01-15"),
    },
    {
      id: "step2",
      name: "Task 2",
      start: new Date("2023-01-05"),
      end: new Date("2023-01-20"),
    },
    {
      id: "step3",
      name: "Task 3",
      start: new Date("2023-01-10"),
      end: new Date("2023-01-25"),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gantt Chart</h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        {/* <Gantt steps={steps} /> */}
      </div>
    </div>
  );
};

export default GanttChart;
