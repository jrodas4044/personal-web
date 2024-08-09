import Head from 'next/head';
import Script from 'next/script'
import Image from "next/image";
import Partners from "@/components/Partners";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jonhathan Rolando Rodas López",
  description: "Software Developer - Personal Blog",
  applicationName: "Jonhathan Rolando Blog",
  authors: [{
    name: "Jonhathan Rolando Rodas López",
    url: "https://jonhathan.com",
  }],
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
  "Investigación Forense"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jonhathan Rolando Rodas López",
          "image": "https://www.jonhathanrodas.com/profile.jpg",
          "jobTitle": "Desarrollador Full Stack",
          "url": "https://www.jonhathanrodas.com"
        }
      `}} />
    </Head>

      <div
        style={bannerStyle}
        className="w-screen h-screen flex flex-col items-center justify-center"
      >
        <div className="flex flex-col space-y-4 items-center justify-center container mx-auto">
           <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="Profile picture"
            className="rounded-full overflow-hidden "
          />
          <h1
            className="text-3xl md:text-5xl px-4 text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800"
          >
            Jonhathan Rolando Rodas Lopez
          </h1>
          <div className="flex items-center justify-center flex-wrap space-x-4 space-y-4 text-gray-400">

            <h2 className="text-2xl  text-center">
              👨‍💻 Software Developer
            </h2>
            <span className="hidden md:block"> | </span>
            <h2 className="text-2xl  text-center">
              🕵️‍♂️ Policiólogo Corporativo
            </h2>
          </div>
        <div className="flex flex-wrap space-x-4 md:space-x-8">
          <div>
            <a className="block w-[150px] px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-800 text-white text-center font-bold hover:bg-indigo-500">Blog</a>
          </div>
          <div>
            <a className="block w-[150px] px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-800 text-white text-center font-bold hover:bg-indigo-500">CV</a>
          </div>
        </div>
      </div>
    </div>

      <div className="bg-gray-900">

        <div className="flex flex-wrap space-x-4 space-y-12 container mx-auto py-12 ">
          <div className="w-full md:w-1/2 px-4 py-2">
            <h3 className="mb-6 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
              Desarrollador Full Stack
            </h3>
            <span className="text-gray-400">
              <p>Desde 2014, he forjado mi camino como desarrollador de software, abarcando todos los aspectos del ciclo de vida del software: desde la programación y las pruebas, hasta el diseño arquitectónico y la gestión de proyectos. Mi trayectoria se ha centrado en tecnologías web como PHP, JavaScript y TypeScript, evolucionando en los últimos años hacia aplicaciones serverless nativas de la nube con AWS.</p>

            <p className="pt-4">Esta experiencia diversa me ha permitido adaptarme constantemente, combinando fundamentos sólidos con las últimas innovaciones para crear soluciones eficientes y escalables.</p>

            </span>
          </div>

          <div className="w-full md:flex-1 flex items-center justify-center">
            <Image
              src="/dev.png"
              width={400}
              height={400}
              alt="Developer"
              className="rounded-lg"
            />
          </div>

          <div className="flex items-center justify-center w-full md:w-1/2 ">
            <Image
              src="/cyber.png"
              alt="Cyberseguridad"
              width={400}
              height={400}
            />
          </div>

          <div className="flex-1    text-white  py-2 rounded-md">
            <h3 className="mb-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-800">
              Criminalística Digital
            </h3>
            <span className="text-gray-400">
 Encarno una convergencia única entre el desarrollo de software y las ciencias forenses. Como desarrollador, creo soluciones tecnológicas innovadoras; como investigador, aporto una perspectiva crítica en seguridad y prevención de riesgos a nivel de negocio.
              <p className="mt-4">Mis estudios en <strong>Ciencias Policiales</strong> en la Universidad de Occidente ext. Antonio Beristain. Complementan mi experiencia técnica, permitiéndome diseñar sistemas que no solo son eficientes y escalables, sino que también consideran la seguridad integral en el ciberespacio y el mundo físico.</p>
              <p className="mt-4">Esta singular combinación me capacita para construir soluciones basadas en las necesidades específicas de cada empresa, con un enfoque holístico en la gestión de riesgos.
              </p>
            </span>
          </div>
        </div>
      </div>

      <Stack/>

      <Partners/>

      <Footer/>
    </main>
  );
}
