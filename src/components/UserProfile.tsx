"use client";

import { useState } from "react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Developer",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  });

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update user profile
    console.log("Updating profile:", userProfile);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        User Profile
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={userProfile.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userProfile.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              name="bio"
              value={userProfile.bio}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Avatar URL
            </label>
            <input
              type="url"
              name="avatarUrl"
              value={userProfile.avatarUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
