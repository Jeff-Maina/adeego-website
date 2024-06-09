import { features } from "../Data";

const FeatureCard = ({ feature, activeIndex }) => {
  return (
    <article className="p-8 flex flex-col gap-7 md:gap-16 lg:grid grid-cols-2 h-full">
      <div className="w-full h-full lg:flex items-center justify-end lg:px-10">
        <div className="w-full max-w-lg h-96 md:h-[34rem] bg-neutral-400">
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex items-center gap-1 md:gap-2 lg:hidden">
        {[...Array(features.length)].map((_, i) => (
          <button
            className={`h-2 md:h-3 ${
              i !== activeIndex ? "w-2 md:w-3" : "w-6 md:w-10"
            } rounded-full bg-neutral-500 origin-left transition-all duration-150`}
          ></button>
        ))}{" "}
      </div>

      <div className="flex flex-col gap-7 md:gap-16 lg:px-10 lg:justify-center">
        {feature.heading()}

        <p className="max-w-sm lg:max-w-md lg:pl-20">{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
