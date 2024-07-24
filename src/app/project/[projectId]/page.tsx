import { useParams } from "next/navigation";
import Chat from "@/components/Chat";

const ProjectPage = () => {
  const params = useParams();
  const { projectId } = params;

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-6">
        {/* Other project/task details */}
        <h1 className="text-3xl font-bold text-gray-800">Project Details</h1>
        <p>Project ID: {projectId}</p>
        {/* Render chat component */}
        <Chat projectId={projectId} />
      </main>
    </div>
  );
};

export default ProjectPage;
