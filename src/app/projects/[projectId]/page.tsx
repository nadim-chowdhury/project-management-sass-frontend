import { GetServerSideProps } from "next";
import api from "@/utils/api";
import ProjectDetails from "@/components/ProjectDetails";

const ProjectPage = ({ project }: any) => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <ProjectDetails project={project} />
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { projectId } = context.params;
//   try {
//     const response = await api.get(`/projects/${projectId}`);
//     const project = response.data;
//     return {
//       props: { project },
//     };
//   } catch (error) {
//     console.error("Error fetching project:", error);
//     return {
//       notFound: true,
//     };
//   }
// };

export default ProjectPage;
