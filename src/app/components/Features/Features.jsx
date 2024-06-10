"use client";

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { features } from "../Data";
// import FeatureCard from "./FeatureCard";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// const Features = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const moveForward = () => {
//     const newIndex = (activeIndex + 1) % features.length;
//     setActiveIndex(newIndex);
//   };
//   const moveBackward = () =>
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + features.length) % features.length
//     );
//   return (
//     <>
//       <main className="w-full flex flex-col gap-10 max-w-7xl m-auto">
//         <div className="w-full h-[80vh]">
//           {features.map(
//             (feature, i) =>
//               i === activeIndex && (
//                 <motion.div className="w-full h-full" key={i}>
//                   <FeatureCard activeIndex={activeIndex} feature={feature} />
//                 </motion.div>
//               )
//           )}
//         </div>

//         <div className="flex gap-2 items-center justify-end px-8">
//           <div
//             onClick={(e) => {
//               e.preventDefault();
//               moveBackward();
//             }}
//             className="size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center"
//           >
//             <ArrowLeft />
//           </div>
//           <div
//             onClick={(e) => {
//               e.preventDefault();
//               moveForward();
//             }}
//             className="size-16 md:size-20 rounded-full border border-green-600 text-black grid place-items-center"
//           >
//             <ArrowRight />
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Features;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeatureCard from "./FeatureCard";
import { useEffect, useState } from "react";

const FeaturesCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <main className="w-full flex flex-col gap-10 max-w-7xl m-auto lg:h-screen justify-center">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {features.map((feature, i) => {
            return (
              <CarouselItem>
                <FeatureCard feature={feature} key={i} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div>
          <CarouselPrevious className="size-20 border border-green-500 hover:bg-green-200" />
          <CarouselNext className="size-20 border border-green-500 hover:bg-green-200" />
        </div>
        <div className="flex items-center gap-1 w-full justify-center mt-6">
          {features.map((feature, i) => {
            return (
              <div
                className={`${
                  i + 1 === current ? "w-10" : "w-2"
                } h-2 rounded-full bg-green-500 transition-all duration-200`}
              ></div>
            );
          })}
        </div>
      </Carousel>
    </main>
  );
};

export default FeaturesCarousel;
