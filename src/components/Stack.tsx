import React from "react";

type BadgeCardProps = {
  src: string | null;
  alt: string;
  label: string;
};

type SectionProps = {
  title: string;
  items: BadgeCardProps[];
};

const BadgeCard = ({ src, alt, label }: BadgeCardProps) => (
  <div className="flex justify-center items-center space-x-4 bg-gradient-to-b from-sky-900 via-gray-900 to-black shadow px-4 py-2 rounded-lg">
    {src !== null ? (
      <div>
        {" "}
        <img className="w-8 h-8" src={src} alt={alt} />{" "}
      </div>
    ) : (
      ""
    )}

    <div>
      <span className="text-sm">{label}</span>
    </div>
  </div>
);

const Section = ({ title, items }: SectionProps) => (
  <div>
    <h3 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 mb-4 font-bold text-ellipsis text-lg text-transparent whitespace-nowrap overflow-hidden">
      {title}
    </h3>
    <div className="flex flex-wrap gap-4 p-4">
      {items.map((item, index) => (
        <BadgeCard key={index} {...item} />
      ))}
    </div>
  </div>
);

const Stack = () => {
  const frontendItems = [
    {
      src: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
      alt: "React",
      label: "React",
    },
    {
      src: "https://img.icons8.com/?size=100&id=eETV3RNHVrWA&format=png&color=000000",
      alt: "Vue",
      label: "Vue",
    },
    {
      src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      alt: "Tailwind",
      label: "Tailwind",
    },
    {
      src: "https://img.icons8.com/?size=100&id=nvrsJYs7j9Vb&format=png&color=000000",
      alt: "Next.js",
      label: "Next.js",
    },
    {
      src: "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
      alt: "TypeScript",
      label: "TypeScript",
    },
  ];

  const backendItems = [
    {
      src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      alt: "Node",
      label: "Node",
    },
    {
      src: "https://img.icons8.com/?size=100&id=Y9Kxy8Xl1id8&format=png&color=000000",
      alt: "AWS Lambda",
      label: "AWS Lambda",
    },
  ];

  const awsServicesItems = [
    {
      src: "https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg",
      alt: "API Gateway",
      label: "API Gateway",
    },
    {
      src: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg",
      alt: "DynamoDB",
      label: "DynamoDB",
    },
    {
      src: "https://icon.icepanel.io/AWS/svg/Analytics/OpenSearch-Service.svg",
      alt: "OpenSearch",
      label: "OpenSearch",
    },
    {
      src: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg",
      alt: "S3",
      label: "S3",
    },
    {
      src: "https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg",
      alt: "AWS Amplify",
      label: "AWS Amplify",
    },
  ];

  const otherItems = [
    // Laravel
    {
      src: null,
      alt: "Laravel",
      label: "Laravel",
    },
    // Laravel Nova
    {
      src: null,
      alt: "Laravel Nova",
      label: "Laravel Nova",
    },
    // WordPress
    {
      src: null,
      alt: "WordPress",
      label: "WordPress",
    },
    // Phalcon PHP
    {
      src: null,
      alt: "Phalcon PHP",
      label: "Phalcon PHP",
    },
    // Symfony
    {
      src: null,
      alt: "Symfony",
      label: "Symfony",
    },
    // PHP
    {
      src: null,
      alt: "PHP",
      label: "PHP",
    },
    // MySQL
    {
      src: null,
      alt: "MySQL",
      label: "MySQL",
    },
    // Azure
    {
      src: null,
      alt: "Azure",
      label: "Azure",
    },
    // Digital Ocean
    {
      src: null,
      alt: "Digital Ocean",
      label: "Digital Ocean",
    },
    // Git gub
    {
      src: null,
      alt: "GitHub",
      label: "GitHub",
    },
    // Bitbucket
    {
      src: null,
      alt: "Bitbucket",
      label: "Bitbucket",
    },
  ];

  const softwareEngineeringItems = [
    // Agile
    {
      src: null,
      alt: "Agile",
      label: "Agile",
    },
    // Scrum
    {
      src: null,
      alt: "Scrum",
      label: "Scrum",
    },
    // TDD
    {
      src: null,
      alt: "TDD",
      label: "TDD",
    },
    // DDD
    {
      src: null,
      alt: "DDD",
      label: "DDD",
    },
    // CI/CD
    {
      src: null,
      alt: "CI/CD",
      label: "CI/CD",
    },
    // SOLID
    {
      src: null,
      alt: "SOLID",
      label: "SOLID",
    },
    // Clean Code
    {
      src: null,
      alt: "Clean Code",
      label: "Clean Code",
    },
    // Hexagonal Architecture
    {
      src: null,
      alt: "Hexagonal Architecture",
      label: "Hexagonal Architecture",
    },
    // Microservices
    {
      src: null,
      alt: "Microservices",
      label: "Microservices",
    },
    // CQRS
    {
      src: null,
      alt: "CQRS",
      label: "CQRS",
    },
    // Event Driven
    {
      src: null,
      alt: "Event Sourcing",
      label: "Event Sourcing",
    },
    // Infrastructure as Code
    {
      src: null,
      alt: "IaC",
      label: "IaC",
    },
    // DevOps
    {
      src: null,
      alt: "DevOps",
      label: "DevOps",
    },
    // Cloud Computing
    {
      src: null,
      alt: "Cloud Computing",
      label: "Cloud Computing",
    },
    // Serverless
    {
      src: null,
      alt: "Serverless",
      label: "Serverless",
    },
    // ISO 27001
    {
      src: null,
      alt: "ISO 27001",
      label: "ISO 27001",
    },
  ];

  return (
    <div className="space-y-6 mx-auto mt-4 px-4 container">
      <header>
        <h2 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 font-bold text-3xl text-transparent">
          Stack
        </h2>
      </header>
      <Section title="Frontend" items={frontendItems} />
      <Section title="Backend" items={backendItems} />
      <Section title="Key AWS Services I've Used" items={awsServicesItems} />
      <Section
        title="Technologies I've Had the Opportunity to Work With
"
        items={otherItems}
      />

      <Section
        title="Key Software Engineering Concepts in Practice"
        items={softwareEngineeringItems}
      />
    </div>
  );
};

export default Stack;
