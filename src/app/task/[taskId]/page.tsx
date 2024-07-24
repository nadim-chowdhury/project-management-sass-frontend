import TimeTracking from "@/components/TimeTracking";
import ProjectAnalytics from "@/components/ProjectAnalytics";
import GanttChart from "@/components/GanttChart";

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-6">
        {/* Other project/task details */}
        <h1 className="text-3xl font-bold text-gray-800">Project Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimeTracking />
          <ProjectAnalytics />
        </div>
        <GanttChart />
      </main>
    </div>
  );
};

export default ProjectPage;
