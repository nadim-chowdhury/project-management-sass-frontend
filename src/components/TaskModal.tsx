"use client";

import { useState } from "react";

const TaskModal = ({ task }:any) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="mt-2 text-xs text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        View Details
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-xl font-semibold">{task.title}</h3>
                <button
                  onClick={toggleModal}
                  className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-gray-600 text-sm">{task.description}</p>
                {/* Add more task details here */}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  onClick={toggleModal}
                  className="text-sm bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskModal;
