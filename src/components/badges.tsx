import Image from "next/image";

const Badges = () => {
  const bannerStyle = {
    backgroundImage: "url(/bg1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bannerStyle} className="bg-gray-900 pt-12 pb-8">
      <div className="mx-auto container">
        <h3 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 font-bold text-2xl text-transparent">
          Digital Badges and Certifications
        </h3>

        <div className="flex sm:flex-row flex-col items-stretch sm:space-x-6 space-y-6 sm:space-y-0 p-8">
          <a
            href="https://www.credly.com/badges/8b8f7a84-64a5-47de-a300-c8c8238e2f2b/public_url"
            target="_blank"
            className="flex flex-col flex-1 items-center bg-gray-800 rounded-md overflow-hidden"
          >
            <Image
              src={"/badges/AWSKnowledgeArchitectingBadge.png"}
              width={150}
              height={150}
              alt="Badge"
            />
            <div className="px-4 pb-4">
              <h2 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mb-2 font-bold text-lg text-transparent">
                AWS Knowledge: Architecting
              </h2>
              <p className="text-xs">
                Earners of this badge have developed technical skills and
                knowledge of AWS concepts and services with a focus on designing
                solutions on AWS using best practices.
              </p>
            </div>
          </a>

          <a
            href="https://www.credly.com/badges/d22104fe-af69-415d-b096-86d1db463f3c/public_url"
            target="_blank"
            className="flex flex-col flex-1 items-center bg-gray-800 rounded-md overflow-hidden"
          >
            <Image
              src={"/badges/AWS KnowledgeCloudEssentialsBadge.png"}
              width={150}
              height={150}
              alt="Badge"
            />
            <div className="px-4 pb-4">
              <h2 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mb-2 font-bold text-lg text-transparent">
                AWS Knowledge: Cloud Essentials
              </h2>
              <p className="text-xs">
                Earners of this badge have developed knowledge of foundational
                AWS Cloud concepts with a focus on AWS Compute, Storage,
                Networking and Database services, security, architecture,
                pricing, and support.
              </p>
            </div>
          </a>

          <a
            href="https://www.credly.com/earner/earned/badge/2b8db2ef-a69f-4ae9-b10b-7848ad01132e"
            target="_blank"
            className="flex flex-col flex-1 items-center bg-gray-800 rounded-md h-full overflow-hidden"
          >
            <Image
              src={"/badges/CloudPractitionerBadge.png"}
              width={150}
              height={150}
              alt="Badge AWS Cloud Quest: Cloud Practitioner"
            />
            <div className="px-4 pb-4">
              <h2 className="bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-800 mb-2 font-bold text-lg text-transparent">
                AWS Cloud Quest: Cloud Practitioner
              </h2>
              <p className="text-xs">
                Earners of this badge have demonstrated basic solution building
                knowledge using AWS services and have a fundamental
                understanding of AWS Cloud concepts. Badge earners have acquired
                hands-on experience with compute, networking, database and
                security services.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Badges;
