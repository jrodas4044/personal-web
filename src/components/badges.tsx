"use client";
import { useRef, useEffect, useState } from "react";
import Head from "next/head";

import Image from "next/image";

type BadgeCardProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
};

const BadgeCard = ({ href, src, alt, title, description }: BadgeCardProps) => (
  <div className="flex-shrink-0 p-2 w-[300px]">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-gradient-to-b from-sky-900 via-gray-900 to-black p-4 rounded-md w-full h-full overflow-hidden"
    >
      <Image
        src={src}
        width={150}
        height={150}
        alt={`Badge de ${alt}`}
        className="py-2"
      />
      <h3 className="px-2 font-bold text-center text-white text-xl">{title}</h3>
    </a>
  </div>
);

const Badges = () => {
  const badges = [
    {
      href: "https://www.credly.com/earner/earned/badge/e3458315-8ba4-43d7-85b5-b46ce41d133f",
      src: "/badges/CAPC.png",
      alt: "Cybersecurity Awareness - CAPC",
      title: "Cybersecurity Awareness - CAPC",
      description:
        "The holders of this badge have validated and demonstrated a comprehensive understanding of cybersecurity principles and best practices. This badge highlights the individual’s ability to recognize and address common cyber threats, implement effective protective measures, and contribute to a secure digital environment. ",
    },
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
      title: "Platzy Route: Cybersecurity for Managers and Executives",
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId: number;
    let lastScrollPosition = scrollElement.scrollLeft;

    const scroll = () => {
      if (isInteracting) {
        lastScrollPosition = scrollElement.scrollLeft;
      } else {
        if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
          scrollElement.scrollLeft = 0;
        } else {
          scrollElement.scrollLeft += 1;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  const handleInteractionStart = () => setIsInteracting(true);
  const handleInteractionEnd = () => setIsInteracting(false);
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: badges.map((badge, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: badge.title,
        description: badge.description,
        url: badge.href,
        image: badge.src,
      },
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <div className="mx-auto px-4 container">
        <h2 className="bg-clip-text bg-gradient-to-r from-cyan-300 to-green-400 mb-4 font-bold text-2xl text-ellipsis text-transparent whitespace-nowrap overflow-hidden">
          Digital Badges and Certifications
        </h2>
        <div className="relative bg-slate-800 shadow-xl custom-scrollbar p-4 rounded-lg overflow-hidden scroll-container">
          <div className="top-0 bottom-0 fade-edge-left left-0 z-10 absolute w-24"></div>
          <div className="top-0 fade-edge-right right-0 bottom-0 z-10 absolute w-24"></div>
          <div ref={scrollRef} className="infinite-scroll-wrapper">
            <div className="infinite-scroll-content">
              {badges.map((badge, index) => (
                <BadgeCard key={index} {...badge} />
              ))}
              {badges.map((badge, index) => (
                <BadgeCard key={`duplicate-${index}`} {...badge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
