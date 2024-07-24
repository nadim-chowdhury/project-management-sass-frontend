import Link from "next/link";

const Dashboard = () => {
  // Mock data for demonstration
  const projects = [
    { id: 1, name: "Project 1", description: "Description for Project 1" },
    { id: 2, name: "Project 2", description: "Description for Project 2" },
    { id: 3, name: "Project 3", description: "Description for Project 3" },
  ];

  const tasks = [
    { id: 1, title: "Task 1", description: "Description for Task 1" },
    { id: 2, title: "Task 2", description: "Description for Task 2" },
    { id: 3, title: "Task 3", description: "Description for Task 3" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          {/* Projects section */}
          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-blue-600">
                    {project.name}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tasks section */}
          <section className="mt-8">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Tasks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white shadow-md rounded-lg p-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-green-600">
                    {task.title}
                  </h3>
                  <p className="text-gray-600">{task.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="flex justify-between">
            <Link href="/dashboard">
              <a className="text-gray-500 hover:text-gray-900 px-4 py-2 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.25.56L5.47 11.03a.75.75 0 1 1 1.06-1.06l3.25 3.25 3.25-3.25a.75.75 0 0 1 1.06 1.06l-4 4A.75.75 0 0 1 10 16l5.25-.01a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-.5a.75.75 0 0 1 .75-.75L10 16l-3.25-3.25a.75.75 0 0 1 1.06-1.06l3.25 3.25 3.25-3.25a.75.75 0 1 1 1.06 1.06l-4 4A.75.75 0 0 1 10 20l5.25-.01A1.75 1.75 0 0 0 17 18.25v-11.5A1.75 1.75 0 0 0 15.25 5H4.75A1.75 1.75 0 0 0 3 6.75v11.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-11.5a.75.75 0 0 0-.75-.75H10z"
                  />
                </svg>
                <span>Dashboard</span>
              </a>
            </Link>
            <Link href="/projects">
              <a className="text-gray-500 hover:text-gray-900 px-4 py-2 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  />
                </svg>
                <span>Projects</span>
              </a>
            </Link>
            <Link href="/tasks">
              <a className="text-gray-500 hover:text-gray-900 px-4 py-2 flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                  />
                </svg>
                <span>Tasks</span>
              </a>
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
