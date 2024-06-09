import { socialLinks } from "./Data";
import RotatingButton from "./RotatingButton";

const androidSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-8"
    viewBox="0 0 24 24"
    id="android"
  >
    <path
      fill="#fff"
      d="M3.5 8A1.5 1.5 0 0 0 2 9.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 3.5 8zm17 0A1.5 1.5 0 0 0 19 9.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 20.5 8zm-3 0h-11a.5.5 0 0 0-.5.5V17a2 2 0 0 0 2 2v3.5a1.5 1.5 0 0 0 3 0V19h2v3.5a1.5 1.5 0 0 0 3 0V19a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.5-.5zM6 6.46a.5.5 0 0 0 .5.54h10.97a.5.5 0 0 0 .5-.54 6 6 0 0 0-2.43-4.28l.88-1.42a.5.5 0 0 0-.85-.53l-.88 1.42a5.85 5.85 0 0 0-5.38 0L8.42.24a.5.5 0 1 0-.85.53l.88 1.41A6 6 0 0 0 6 6.46zM14.5 4a.5.5 0 1 1-.5.5.5.5 0 0 1 .5-.5zm-4.5.5a.5.5 0 1 1-.5-.5.5.5 0 0 1 .5.5z"
    />
  </svg>
);

const iossvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    id="apple"
    fill="#fff"
    className="size-6"
  >
    <g fill-rule="evenodd">
      <path
        d="M11.6218,4.7571c-0.0193291,-2.02332 1.65317,-2.99846 1.72865,-3.04467c-0.939167,-1.37684 -2.40442,-1.56532 -2.92624,-1.58735c-1.24564,-0.125075 -2.431,0.734352 -3.06342,0.734352c-0.630702,0 -1.60726,-0.7153 -2.63953,-0.694961c-1.35921,0.0188997 -2.61125,0.789063 -3.31105,2.00483c-1.41025,2.44865 -0.360481,6.07511 1.01479,8.0616c0.671226,0.970026 1.47351,2.06429 2.52553,2.02476c1.0148,-0.0397892 1.39689,-0.654453 2.62078,-0.654453c1.22488,0 1.56888,0.654453 2.64224,0.634268c1.08898,-0.0196037 1.78139,-0.990762 2.44848,-1.96475c0.771157,-1.12822 1.0887,-2.22035 1.10719,-2.27707c-0.0234604,-0.0085233 -2.12539,-0.815491 -2.14743,-3.23655v0Z"
        transform="translate(.745 3.743)"
      />
      <path
        d="M2.49696,2.55553c0.559066,-0.677623 0.934193,-1.61793 0.831414,-2.55553c-0.804695,0.031969 -1.78039,0.537152 -2.3568,1.21266c-0.51813,0.599437 -0.97158,1.55665 -0.848624,2.47462c0.897671,0.0697992 1.81466,-0.455431 2.37401,-1.13175v0Z"
        transform="translate(7.857)"
      />
    </g>
  </svg>
);
const CTA = () => {
  return (
    <main
      id="cta"
      className="w-full h-screen flex flex-col items-center justify-center gap-6 lg:gap-14 xl:gap-20 bg-neutral-100"
    >
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-14 xl:gap-20 h-[70%]">
        {" "}
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <p className=" uppercase tracking-tight font-semibold">
            Start shoppig today
          </p>
          <h1 className="tracking-tighter text-4xl md:text-5xl lg:text-7xl font-vest-b text-center">
            Ready to Fill Your <br /> Pantry?
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <button className="bg-green-600 rounded-full p-4 lg:min-h-16 text-white px-8 flex items-center gap-4 font-medium">
            Adeego for Android
            {androidSvg}
          </button>
          <button className="bg-black rounded-full p-4 lg:min-h-16 text-white px-8 flex items-center justify-center gap-4 font-medium">
            Adeego for IOS
            {iossvg}
          </button>
        </div>
      </div>

      <div className="lg:ml-auto lg:px-10">
        <div className="flex flex-col justify-center text-center lg:text-right  gap-3">
          <p>Get in touch</p>
          <div className="flex items-center gap-4 justify-center lg:justify-end">
            {socialLinks.map((link, i) => (
              <a href="">{link.icon()}</a>
            ))}
          </div>
          <a href="">adeego@gmail.com</a>
          <a href="">+25473245678</a>
        </div>
      </div>
    </main>
  );
};

export default CTA;
