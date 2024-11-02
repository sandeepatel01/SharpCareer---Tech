"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { Button } from "../components/ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { Cover } from "@/components/ui/cover";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
    justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1
          className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center 
        mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800
         via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Sharpen your business online <br /> with <Cover>SharpCareer</Cover>
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Elevate your brand and boost sales with our cutting-edge design and
          development solutions. Let’s create success together—partner with us
          today!
        </p>
        <div className="mt-4">
          <Link href="/all-courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white font-bold dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
