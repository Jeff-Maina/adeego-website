import Image from "next/image";
import WordAnim from "./components/WordAnim";
import RotatingButton from "./components/RotatingButton";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="py-8 lg:py-0 flex flex-col gap-20 md:gap-28">
      <div className="lg:h-screen w-full">
        <div className="w-full lg:h-[85%] lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-10 lg:gap-16 px-8 lg:w-full lg:h-full lg:items-end lg:justify-center">
            <div className="font-vest-b text-4xl md:text-5xl lg:text-7xl lg:max-w-2xl tracking-tighter">
              <WordAnim />
              Delivered to Your Doorstep.
            </div>
            <div className="w-full max-w-2xl">
              <p className="max-w-sm">
                Experience the ease of online grocery shopping with our
                extensive range of fresh, high-quality products. From farm-fresh
                produce to pantry essentials, we deliver everything you need
                right to your doorstep.
              </p>
            </div>
            <div className="ml-4 lg:hidden">
              <RotatingButton />
            </div>
          </div>
          <div className="hidden lg:flex flex-col justify-center h-full w-full">
            <div className="w-full max-w-3xl h-[80%] bg-neutral-200"></div>
          </div>
        </div>
        <div className="w-full lg:grid grid-cols-3 lg:h-[15%]  hidden px-16">
          <div className="w-full flex items-center">
            <p>
              Creative agency in Houston. <br /> Made with loads of love and
              dedication in Houston, TX.
            </p>
          </div>
          <div className="w-full grid place-items-center">
            <RotatingButton />
          </div>
          <div className="w-full flex items-center justify-end text-right">
            <p>
              Bringing fresh ideas and innovative technology <br /> to your
              online grocery shopping experience.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Features />
      </div>
      <Testimonials />
      <CTA />
    </main>
  );
}
