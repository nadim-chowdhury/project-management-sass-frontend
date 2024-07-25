"use client";

import { useState } from "react";

const ThemeCustomization = () => {
  // Example: Theme customization settings state
  const [themeSettings, setThemeSettings] = useState({
    primaryColor: "#3182CE",
    secondaryColor: "#4A5568",
    textColor: "#1A202C",
    bgColor: "#FFFFFF",
  });

  const handleColorChange = (colorType, newValue) => {
    setThemeSettings({
      ...themeSettings,
      [colorType]: newValue,
    });
    // Implement logic to apply theme changes
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Theme Customization
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Primary Color
          </label>
          <input
            type="color"
            value={themeSettings.primaryColor}
            onChange={(e) => handleColorChange("primaryColor", e.target.value)}
            className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Secondary Color
          </label>
          <input
            type="color"
            value={themeSettings.secondaryColor}
            onChange={(e) =>
              handleColorChange("secondaryColor", e.target.value)
            }
            className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Text Color
          </label>
          <input
            type="color"
            value={themeSettings.textColor}
            onChange={(e) => handleColorChange("textColor", e.target.value)}
            className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Background Color
          </label>
          <input
            type="color"
            value={themeSettings.bgColor}
            onChange={(e) => handleColorChange("bgColor", e.target.value)}
            className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomization;
