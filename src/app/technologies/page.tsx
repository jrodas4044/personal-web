import Badges from "@/components/badges";
import Stack from "@/components/Stack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techologies Stack  - Jonhathan Rolando Rodas López",
  description:
    "Since 2014, I have forged my path as a software developer, covering all aspects of the software lifecycle: from programming and testing to architectural design and project management. My career has focused on web technologies such as PHP, JavaScript, and TypeScript, evolving in recent years towards serverless cloud-native applications with AWS.",
  applicationName: "Jonhathan Rolando Personal Page",
  authors: [
    {
      name: "Jonhathan Rolando Rodas López",
      url: "https://jonhathan.com",
    },
  ],
  keywords: [
    "Jonhathan Rodas",
    "Desarrollador Full Stack",
    "Desarrollador de Software",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Aplicaciones Serverless",
    "AWS",
    "Criminalística Digital",
    "Seguridad Cibernética",
    "Ciencias Policiales",
    "Vue.js",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "OpenSearch",
    "AWS Amplify",
    "Laravel",
    "Symfony",
    "WordPress",
    "MySQL",
    "PostgreSQL",
    "Azure",
    "Digital Ocean",
    "Policiólogo Corporativo",
    "Investigación Forense",
  ],
};

export default function Technologies() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-950 via-teal-950 to-sky-950 py-24">
        <div className="mx-auto mb-8 px-4 container">
          <h3 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 my-4 mb-2 font-bold text-4xl text-transparent">
            Tech Stack and Tools I've Utilized
          </h3>
          <p>
            With over a decade of experience, primarily in backend development
            and more recently as a full stack developer, I have worked with a
            wide range of technologies, from implementing robust server-side
            services to creating dynamic and modern user interfaces. My passion
            for technology drives me to continually update my skills, ensuring
            that the solutions I develop are not only efficient and scalable but
            also at the forefront of a constantly evolving technological
            landscape.
          </p>
        </div>

        <Badges />

        <Stack />
      </div>
    </>
  );
}
