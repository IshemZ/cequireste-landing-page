import React from "react";

import { heroDetails } from "@/data/hero";
import Simulator from "./Simulator";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto lg:mx-0">
            {heroDetails.heading}
          </h1>
          <p className="mt-4 text-foreground max-w-lg mx-auto lg:mx-0">
            {heroDetails.subheading}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto lg:mx-0">
            <button className="bg-primary hover:bg-primary-accent text-white font-semibold py-3 px-6 rounded-full transition-colors">
              Calcule mes vrais revenus
            </button>
          </div>
        </div>
        <div className="flex-1 max-w-md mx-auto lg:mx-0">
          <Simulator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
