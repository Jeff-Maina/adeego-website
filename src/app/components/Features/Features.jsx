"use client";

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { features } from "../Data";
import FeatureCard from "./FeatureCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveForward = () =>
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  const moveBackward = () =>
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  return (
    <>
      <main className="w-full flex flex-col gap-10 max-w-7xl m-auto">
        <div className="w-full h-[80vh]">
          <AnimatePresence>
            {features.map(
              (feature, i) =>
                i === activeIndex && (
                  <motion.div className="w-full h-full" key={i}>
                    <FeatureCard activeIndex={activeIndex} feature={feature} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-2 items-center justify-end px-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              moveBackward();
            }}
            className="size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              moveForward();
            }}
            className="size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center"
          >
            <ArrowRight />
          </button>
        </div>
      </main>
    </>
  );
};

export default Features;
