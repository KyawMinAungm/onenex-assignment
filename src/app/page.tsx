import Button from "@/components/Button";
import HeroHighlight from "@/components/HeroHighlight";
import Typewriter from "@/components/TypeWriter";

import Link from "next/link";
import React from "react";

export default function Home() {
  const words = [
    "OPPORTUNITIES",
    "GROWTH",
    "EXPERIENCES",
    "ACCESSIBILITY",
    "WHAT'S NEXT",
  ];
  return (
    <div className="">
      <section className="bg-black">
        <HeroHighlight>
          <div className="w-full h-screen ">
            <div className="flex flex-col items-center justify-center h-full gap-10">
              <h3 className="text-outline-white text-transparent text-4xl md:text-7xl ">
                CREATING
              </h3>
              <Typewriter words={words} />
            </div>
          </div>
        </HeroHighlight>
      </section>

      <section className="h-screen text-4xl px-6 md:px-20 pt-20 bg-linear-to-b from-black to bg-primary">
        We are a full-service tech company designing and building impactful digital products, brands, and meaningful experiences.
      </section>

      <section className="bg-linear-to-b from-primary min-h-screen to-black w-full flex items-center flex-col justify-center gap-10 ">
        <div className="text-2xl md:text-4xl lg:text-6xl text-center mx-6 lg:mx-20">
          <p className="text-outline-white text-transparent mb-4">
            TURN YOUR IDEA INTO
          </p>
          <p className="text-white">BUSINESS SOLUTIONS</p>
        </div>
        <Link href="/contact-us">
          <Button
            bg="transparent"
            fg="white"
            label="GET IN TOUCH"
            className="hover:bg-white hover:text-primary"
          />
        </Link>
      </section>
    </div>
  );
}
