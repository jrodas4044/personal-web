import Head from "next/head";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jonhathan Rolando Rodas López",
  description: "Software Developer - Personal Blog",
  applicationName: "Jonhathan Rolando Blog",
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

export default function Home() {
  const bannerStyle = {
    backgroundImage: "url(/bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jonhathan Rolando Rodas López",
          "image": "https://www.jonhathanrodas.com/profile.jpg",
          "jobTitle": "Desarrollador Full Stack",
          "url": "https://www.jonhathanrodas.com"
        }
      `,
          }}
        />
      </Head>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex flex-col justify-center items-center space-y-4 mx-auto container">
          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="Profile picture"
            className="border-8 border-sky-950 shadow-2xl rounded-full overflow-hidden"
          />
          <h1 className="bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 px-4 font-bold text-3xl text-center text-transparent md:text-5xl">
            Jonhathan Rolando Rodas Lopez
          </h1>
          <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-1text-gray-400 sp">
            <h2 className="text-2xl text-center">👨‍💻 Software Developer</h2>
            <span className="md:block hidden"> | </span>
            <h2 className="text-2xl text-center">🕵️‍♂️ Police Scientist</h2>
          </div>
          <div className="flex flex-wrap space-x-4 md:space-x-8">
            <div>
              <a
                href="https://blog.jonhathanrodas.com/"
                className="block border-2 border-sky-900 hover:bg-indigo-500 bg-gradient-to-r from-gray-950 to-sky-950 px-4 py-2 rounded-2xl w-[150px] font-bold text-center text-white transition duration-300 ease-in-out"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
}
