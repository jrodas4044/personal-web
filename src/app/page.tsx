import Head from "next/head";
import type { Metadata } from "next";
import Image from "next/image";
import Partners from "@/components/Partners";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";
import Badges from "@/components/badges";

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

      <div
        style={bannerStyle}
        className="flex flex-col justify-center items-center w-screen h-screen"
      >
        <div className="flex flex-col justify-center items-center space-y-4 mx-auto container">
          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="Profile picture"
            className="rounded-full overflow-hidden"
          />
          <h1 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 px-4 font-bold text-3xl text-center text-transparent md:text-5xl">
            Jonhathan Rolando Rodas Lopez
          </h1>
          <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 text-gray-400">
            <h2 className="text-2xl text-center">👨‍💻 Software Developer</h2>
            <span className="md:block hidden"> | </span>
            <h2 className="text-2xl text-center">🕵️‍♂️ Police Scientist</h2>
          </div>
          <div className="flex flex-wrap space-x-4 md:space-x-8">
            <div>
              <a
                href="https://blog.jonhathanrodas.com/"
                className="block hover:bg-indigo-500 bg-gradient-to-r from-emerald-500 to-blue-800 px-4 py-2 rounded-2xl w-[150px] font-bold text-center text-white"
              >
                Blog
              </a>
            </div>
            <div>
              <a className="block hover:bg-indigo-500 bg-gradient-to-r from-emerald-500 to-blue-800 px-4 py-2 rounded-2xl w-[150px] font-bold text-center text-white">
                CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="flex flex-wrap space-x-4 space-y-12 mx-auto py-12 container">
          <div className="px-4 py-2 w-full md:w-1/2">
            <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mb-6 font-bold text-2xl text-transparent">
              Software Full Stack
            </h3>
            <span className="text-gray-400">
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

          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              src="/cyber.png"
              alt="Cyberseguridad"
              width={400}
              height={400}
            />
          </div>

          <div className="flex-1 py-2 rounded-md text-white">
            <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mb-4 font-bold text-2xl text-transparent">
              Digital Forensics
            </h3>
            <span className="text-gray-400">
              I represent a unique blend of expertise in software development
              and forensic science. As a developer, I craft cutting-edge
              technological solutions, while as a forensic investigator, I
              provide a keen, critical perspective on security and business risk
              prevention.
              <p className="mt-4">
                My studies in Police Sciences at the Universidad de Occidente,
                Antonio Beristain extension, complement my technical experience,
                enabling me to design systems that are not only efficient and
                scalable but also take into account comprehensive security in
                both cyberspace and the physical world.
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

      <Badges />

      <Stack />

      <Partners />

      <Footer />
    </main>
  );
}
