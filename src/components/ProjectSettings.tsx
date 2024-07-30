"use client";

import { useState } from "react";

const ProjectSettings = () => {
  const [projectSettings, setProjectSettings] = useState({
    permissions: {
      view: true,
      edit: false,
    },
    notifications: true,
    integrations: ["Slack", "Discord"],
  });

  const handlePermissionChange = (e) => {
    setProjectSettings({
      ...projectSettings,
      permissions: {
        ...projectSettings.permissions,
        [e.target.name]: e.target.checked,
      },
    });
  };

  const handleNotificationChange = (e) => {
    setProjectSettings({
      ...projectSettings,
      notifications: e.target.checked,
    });
  };

  const handleIntegrationChange = (integration:any, checked:any) => {
    const updatedIntegrations = checked
      ? [...projectSettings.integrations, integration]
      : projectSettings.integrations.filter((int) => int !== integration);
    setProjectSettings({
      ...projectSettings,
      integrations: updatedIntegrations,
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Project Settings
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Permissions
          </label>
          <div className="flex items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="view"
                checked={projectSettings.permissions.view}
                onChange={handlePermissionChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">View</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="edit"
                checked={projectSettings.permissions.edit}
                onChange={handlePermissionChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Edit</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Notifications
          </label>
          <input
            type="checkbox"
            checked={projectSettings.notifications}
            onChange={handleNotificationChange}
            className="mt-1 form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Integrations
          </label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={projectSettings.integrations.includes("Slack")}
                onChange={(e) =>
                  handleIntegrationChange("Slack", e.target.checked)
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Slack</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                checked={projectSettings.integrations.includes("Discord")}
                onChange={(e) =>
                  handleIntegrationChange("Discord", e.target.checked)
                }
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Discord</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSettings;
