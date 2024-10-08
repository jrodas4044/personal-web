import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Jonhathan Rolando Rodas López",
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

export default function AboutMe() {
  return (
    <>
      <div
        className="bg-gradient-to-r from-gray-950 via-teal-950 to-sky-950 py-24"
        id="aboutMe"
      >
        <div className="flex flex-wrap space-x-4 space-y-12 mx-auto container">
          <div className="px-4 py-2 w-full md:w-1/2">
            <h3 className="bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-800 mb-6 font-bold text-2xl text-transparent">
              Full Stack Developer
            </h3>
            <span className="text-white">
              <p>
                Since 2014, I have forged my path as a software developer,
                covering all aspects of the software lifecycle: from programming
                and testing to architectural design and project management. My
                career has focused on web technologies such as PHP, JavaScript,
                and TypeScript, evolving in recent years towards serverless
                cloud-native applications with AWS.
              </p>

              <p className="pt-4">
                This diverse experience has allowed me to constantly adapt,
                combining solid fundamentals with the latest innovations to
                create efficient and scalable solutions.
              </p>
            </span>
          </div>

          <div className="flex md:flex-1 justify-center items-center w-full">
            <Image
              src="/dev.png"
              width={400}
              height={400}
              alt="Developer"
              className="rounded-lg"
            />
          </div>

          <div className="md:flex justify-center items-center hidden w-full md:w-1/2">
            <Image
              src="/cyber.png"
              alt="Cyberseguridad"
              width={400}
              height={400}
            />
          </div>

          <div className="flex-1 py-2 rounded-md text-white">
            <h3 className="bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-800 mb-4 font-bold text-2xl text-transparent">
              Digital Forensics
            </h3>
            <span className="text-white">
              <p className="mt-4">
                My studies in Police Sciences at the Universidad de Occidente de
                Guatemala, complement my technical experience, enabling me to
                design systems that are not only efficient and scalable but also
                take into account comprehensive security in both cyberspace and
                the physical world.
              </p>
              <p className="mt-4">
                This unique combination enables me to craft solutions
                specifically tailored to each company’s needs, with a
                comprehensive focus on risk management.
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
