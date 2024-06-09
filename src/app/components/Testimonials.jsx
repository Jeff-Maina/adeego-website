"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { TestimonialsData } from "./Data";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const moveForward = () =>
    setActiveTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % TestimonialsData.length
    );
  const moveBackward = () =>
    setActiveTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + TestimonialsData.length) % TestimonialsData.length
    );
  return (
    <main className="px-8 flex flex-col gap-8 lg:gap-16 lg:flex-row lg:grid-cols-2  m-auto max-w-7xl w-full lg:h-screen lg:justify-center lg:pt-14">
      <div className="flex flex-col gap-8 lg:w-2/4">
        <div className="flex flex-col gap-4 lg:gap-10">
          <h1 className="tracking-tighter text-4xl md:text-5xl lg:text-7xl font-vest-b">
            Our Happy
            <br /> Clients
          </h1>
          <p className="max-w-48 md:max-w-sm md:text-xl text-neutral-600">
            Hear from our satisfied customers and see how we've made a
            difference in their lives.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              moveBackward();
            }}
          >
            <ArrowLeft size={30} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              moveForward();
            }}
          >
            <ArrowRight size={30} />
          </button>
        </div>

        <div className="mt-10">
          {TestimonialsData.map(
            (testimonial, i) =>
              i === activeTestimonialIndex && (
                <TestimonialCard key={i} testimonial={testimonial} />
              )
          )}
        </div>
      </div>
      <div className="w-2/4 h-full lg:flex hidden">
        <div className="w-full max-w-4xl h-[70vh] bg-neutral-200"></div>
      </div>
    </main>
  );
};

export default Testimonials;
