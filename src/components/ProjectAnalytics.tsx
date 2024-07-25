"use client";

import { useState } from "react";

const ProjectAnalytics = () => {
  const [projectProgress] = useState(60); // Example: Project progress percentage

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Project Analytics
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold text-blue-600">
          Project Progress
        </h3>
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mr-4">
            <span className="text-4xl font-bold text-blue-600">
              {projectProgress}%
            </span>
          </div>
          <div>
            <p className="text-gray-600">Overall Project Progress</p>
            {/* Add more detailed progress indicators */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
