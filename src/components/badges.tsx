import Image from "next/image";

type BadgeCardProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

const BadgeCard = ({ href, src, alt, title, description }: BadgeCardProps) => (
  <div className="flex-shrink-0 p-2 w-[300px] h-[350px]">
    <a
      href={href}
      target="_blank"
      className="flex flex-col items-center bg-gradient-to-b from-sky-900 via-gray-900 to-black rounded-md w-full h-full overflow-hidden tems-center"
    >
      <Image src={src} width={150} height={150} alt={alt} />
      <div className="px-4 pb-4">
        <h3 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 mb-2 font-bold text-lg text-transparent">
          {title}
        </h3>
        <p className="text-xs">{description}</p>
      </div>
    </a>
  </div>
);

const Badges = () => {
  const badges = [
    {
      href: "https://www.credly.com/badges/8b8f7a84-64a5-47de-a300-c8c8238e2f2b/public_url",
      src: "/badges/serverlees.png",
      alt: "Badge AWS Knowledge: Serverless",
      title: "AWS Knowledge: Serverless",
      description:
        "Earners of this badge have developed technical skills and knowledge of AWS serverless concepts and services with a focus on AWS Lambda and Amazon API Gateway.",
    },
    {
      href: "https://www.credly.com/badges/8b8f7a84-64a5-47de-a300-c8c8238e2f2b/public_url",
      src: "/badges/AWSKnowledgeArchitectingBadge.png",
      alt: "Badge AWS Knowledge: Architecting",
      title: "AWS Knowledge: Architecting",
      description:
        "Earners of this badge have developed technical skills and knowledge of AWS concepts and services with a focus on designing solutions on AWS using best practices.",
    },
    {
      href: "https://www.credly.com/badges/d22104fe-af69-415d-b096-86d1db463f3c/public_url",
      src: "/badges/AWS KnowledgeCloudEssentialsBadge.png",
      alt: "Badge AWS Knowledge: Cloud Essentials",
      title: "AWS Knowledge: Cloud Essentials",
      description:
        "Earners of this badge have developed knowledge of foundational AWS Cloud concepts with a focus on AWS Compute, Storage, Networking and Database services, security, architecture, pricing, and support.",
    },
    {
      href: "https://platzi.com/p/elefanteweb/ruta/14993-ciberseguridad-empresas/diploma/detalle/",
      src: "/badges/route-ciber.avif",
      alt: "Ciberseguridad para Gerentes y Directivos",
      title: "Platy Route: Cybersecurity for Managers and Executives",
      description:
        "The certification courses address various business information threats, covering topics like security strategy, cyberattack prevention, social engineering, and team protection. Each module combines theory with practical sessions, helping me understand concepts and develop real-world skills.",
    },
    {
      href: "https://www.credly.com/earner/earned/badge/2b8db2ef-a69f-4ae9-b10b-7848ad01132e",
      src: "/badges/CloudPractitionerBadge.png",
      alt: "Badge AWS Cloud Quest: Cloud Practitioner",
      title: "AWS Cloud Quest: Cloud Practitioner",
      description:
        "Earners of this badge have demonstrated basic solution building knowledge using AWS services and have a fundamental understanding of AWS Cloud concepts. Badge earners have acquired hands-on experience with compute, networking, database and security services.",
    },
  ];

  return (
    <div className="mx-auto px-4 container">
      <h2 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 mb-4 font-bold text-2xl text-ellipsis text-transparent whitespace-nowrap overflow-hidden">
        Digital Badges and Certifications
      </h2>
      <div className="bg-slate-800 shadow-xl custom-scrollbar p-4 rounded-lg scroll-container">
        <div className="flex justify-center items-center scroll-content">
          {badges.map((badge, index) => (
            <BadgeCard key={index} {...badge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badges;
