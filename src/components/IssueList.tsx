"use client";

import { useState } from "react";
import IssueModal from "./IssueModal"; // Assuming you have a IssueModal component for issue details

const IssueList = () => {
  // Mock data for demonstration
  const initialIssues = [
    {
      id: "issue-1",
      title: "Bug in feature X",
      description: "Description for Issue 1",
      status: "open",
      priority: "high",
      assignedTo: "John Doe",
    },
    {
      id: "issue-2",
      title: "UI alignment issue",
      description: "Description for Issue 2",
      status: "inProgress",
      priority: "medium",
      assignedTo: "Jane Smith",
    },
    {
      id: "issue-3",
      title: "Performance problem",
      description: "Description for Issue 3",
      status: "resolved",
      priority: "low",
      assignedTo: "Sam Johnson",
    },
  ];

  const [issues, setIssues] = useState(initialIssues);

  const addIssue = (newIssue) => {
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Issue List</h2>
      {issues.map((issue) => (
        <div key={issue.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold text-blue-600">{issue.title}</h3>
          <p className="text-gray-600">{issue.description}</p>
          <div className="mt-2 flex items-center">
            <span
              className={`px-2 py-1 text-xs font-semibold text-white ${getStatusColor(
                issue.status
              )} rounded-md mr-2`}
            >
              {issue.status}
            </span>
            <span
              className={`px-2 py-1 text-xs font-semibold text-white ${getPriorityColor(
                issue.priority
              )} rounded-md mr-2`}
            >
              {issue.priority}
            </span>
            <span className="text-gray-600">
              Assigned to: {issue.assignedTo}
            </span>
          </div>
          <IssueModal issue={issue} /> {/* Render issue details modal */}
        </div>
      ))}
    </div>
  );
};

export default IssueList;

// Helper functions for status and priority colors
const getStatusColor = (status) => {
  switch (status) {
    case "open":
      return "bg-red-500";
    case "inProgress":
      return "bg-yellow-500";
    case "resolved":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-500";
    case "medium":
      return "bg-yellow-500";
    case "low":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};
