"use client";

import { useState } from "react";

const TimeTracking = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task A", loggedTime: 0 },
    { id: 2, name: "Task B", loggedTime: 0 },
    { id: 3, name: "Task C", loggedTime: 0 },
  ]);

  const logTime = (taskId, time) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, loggedTime: task.loggedTime + time }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Time Tracking
      </h2>
      {tasks.map((task) => (
        <div key={task.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-blue-600">{task.name}</h3>
          <p className="text-gray-600">Logged Time: {task.loggedTime} hours</p>
          <div className="mt-2">
            <button
              onClick={() => logTime(task.id, 1)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2 focus:outline-none"
            >
              Log 1 Hour
            </button>
            <button
              onClick={() => logTime(task.id, 2)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md mr-2 focus:outline-none"
            >
              Log 2 Hours
            </button>
            {/* Add more logging options as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeTracking;
