import Link from "next/link";

const RotatingButton = () => {
  const word = "Dive Into Shopping Today";
  const circ_word = Array.from(word).map((char, i) => (
    <div
      key={i}
      style={{
        transform: `rotate(${i * 12}deg) translateX(-50%)`,
        transformOrigin: "bottom center",
      }}
      className={`absolute font-mono uppercase font-semibold text-sm h-[80%] max-w-fit bottom-2/4`}
    >
      {char}
    </div>
  ));
  return (
    <a href="#cta">
      <div className="size-[4.5rem] rounded-full bg-black relative">
        <div className="absolute w-full h-full rounded-full flex flex-col items-center justify-center text-white font-semibold tracking-tighter uppercase text-sm">
          <span>Get app</span>
        </div>
        <div className="relative w-full h-full grid place-items-center animate-spin transition-all !duration-[3000ms]">
          {circ_word}
        </div>
      </div>
    </a>
  );
};

export default RotatingButton;
