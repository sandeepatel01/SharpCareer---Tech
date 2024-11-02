"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function TrainignSection() {
  const trainigPrograms = [
    {
      title: "Project based learning Program",
      description:
        "Our Project-Based Learning Program offers hands-on experience, mentorship, and real-world skill development in field of web development,Data Analytics and Machine Learning",
      slug: "project-based-learning-program",
      isFeatured: true,
    },
    {
      title: "Master DSA Concepts with Personalized Mentorship!",
      description:
        "Join our DSA Doubt Support for personalized sessions to clarify your Data Structures and Algorithms questions effectively and confidently with expert guidance.",
      slug: "master-dsa-concepts-with-personalized-mentorship",
      isFeatured: true,
    },
    {
      title: "Placement Support Join the Biggest Placement Support Community",
      description:
        "Join our placement support community for personalized off-campus job updates and tailored resume assistance!",
      slug: "placement-support",
      isFeatured: true,
    },
    {
      title: "Expert Resume and Mock Interview Services",
      description:
        "Boost placements with tailored resume building and mock interview preparation for student success!",
      slug: "expert-resume-and-mock-interview-services",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED Training Programs
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Our Training Programs
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect
            items={trainigPrograms.map((training) => ({
              title: training.title,
              description: training.description,
              link: `/training/${training.slug}`,
              isFeatured: training.isFeatured,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Training Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrainignSection;
