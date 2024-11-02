"use client";
import serviceData from "@/service/services.json";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function ServiceSection() {
  const featuredServices = serviceData.services.filter(
    (service: Service) => service.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2
          className="text-base text-teal-600 font-semibold tracking-wide
         uppercase"
        >
          FEATURED SERVICES
        </h2>
        <p
          className="mt-2 text-3xl leading-8 font-extrabold tracking-tight
         text-white sm:text-4xl"
        >
          Our Specialization
        </p>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredServices.map((service: Service) => (
            <div key={service.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white
               dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    src={service.image}
                    alt="image"
                    height="400"
                    width="400"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {service.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {service.description}
                  </p>

                  <Link href={`/services/${service.slug}`} className="mt-4">
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/all-courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700
           bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
}

export default ServiceSection;
