"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Initial Consultation & Requirement Gathering",
    description:
      "We begin with a comprehensive consultation to understand your business needs, followed by gathering detailed project requirements to align our strategy with your vision",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Consultation & Requirement
      </div>
    ),
  },
  {
    title: "Project Proposal & Design Phase",
    description:
      "After understanding your requirements, we present a detailed project proposal outlining scope, timeline, and costs, followed by creating wireframes and mockups for your approval.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/work/design.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Development & Regular Updates",
    description:
      "Our skilled developers build your project using the latest technologies, while maintaining open communication and providing regular updates to ensure alignment with your expectations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/work/development.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Deployment & Maintenance",
    description:
      "We conduct thorough testing for quality assurance, carefully ensuring every feature meets the highest standards of functionality and performance. Following this, we prepare for a seamless launch through detailed planning and optimization, ensuring a smooth user experience. Additionally, we provide ongoing support to address any issues that arise and to enhance the project's long-term success through continuous monitoring and updates.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/work/deployment.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

function WorkingProcess() {
  return (
    <div className="py-10 ">
      <div className="text-center mb-10">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Our working process
        </p>
      </div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WorkingProcess;
