import React from "react";
import { testimonials } from "@/data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="">
          <div className="mb-4 w-full text-center lg:text-left">
            <h3 className="text-lg font-semibold text-secondary">
              {testimonial.name}
            </h3>
            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
          </div>
          <p className="text-foreground-accent text-center lg:text-left">
            &quot;{testimonial.message}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
