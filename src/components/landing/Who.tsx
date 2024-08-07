import dynamic from "next/dynamic";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { useIntersection } from "react-use";
import CounterAnalytics from "../common/CounterAnalytics";

// import Typing with ssr: false
const Typing = dynamic(() => import("./who/Typing.js"), {
  ssr: false,
});

const Who: React.FC = () => {
  const [scrolledAbout, setScrolledAbout] = useState(false);
  const aboutIntersectionRef = useRef(null);
  const aboutIntersection = useIntersection(aboutIntersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  if (
    aboutIntersection &&
    aboutIntersection.intersectionRatio > 0.75 &&
    !scrolledAbout
  )
    setScrolledAbout(true);

  return (
    // animate border bottom on load from left to right
    <div
      id="who"
      className="flex min-h-screen w-screen flex-row items-center bg-secondary py-[15vh] pl-[30vw] pr-[20vw] -sm:pr-2"
    >
      {/* once scrolled in bounce animate webp of wave.webm in */}
      <div
        className={`absolute top-[102%] right-0 h-64 w-64 ${
          scrolledAbout ? "bounceInRight" : "translate-x-[16rem]"
        }`}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/animations/wave.webm" type="video/webm" />
        </video>
      </div>
      <div className={scrolledAbout ? "fadeIn" : "opacity-0"}>
        <h3 className="text-7xl font-bold text-primary -sm:text-5xl">
          <span className="text-accent">Me</span>
          .<wbr />
          who()
        </h3>
        <h4 className="pt-12 text-5xl leading-[4rem] text-primary -sm:pt-6 -sm:text-2xl">
          I can code <Typing />
        </h4>
        {/* list of employment */}
        <ul className="list-disc pl-12 pt-12 -sm:pt-6">
          <li className="mt-4 text-5xl leading-[4rem] text-primary -sm:text-2xl">
            <p>SWE AI</p>
            <Link
              href="https://www.intuit.com/"
              title="Intuit website"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              @Intuit
            </Link>
          </li>
          <li
            className="text-5xl leading-[4rem] text-primary -sm:text-2xl"
            ref={aboutIntersectionRef}
          >
            <p>Former Full Stack Developer</p>
            <Link
              href="https://zerorampup.com/"
              title="Zero RampUp"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              @Zero RampUp
              {/* open link fa icon */}
              <FaExternalLinkAlt className="ml-2 inline-block h-8 w-8 text-accent -sm:h-4 -sm:w-4" />
            </Link>
          </li>
          <li className="mt-4 text-5xl leading-[4rem] text-primary -sm:text-2xl">
            <p>Formerly Research Assistant</p>
            <Link
              href="https://www.ualberta.ca/index.html"
              title="UAlberta website"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              @UofA
            </Link>
          </li>
        </ul>
        <div className="pt-24 -sm:pt-12">
          <p className="text-5xl text-primary -sm:text-2xl">
            You might also know me from the donut video🍩
            <Link
              href="https://www.youtube.com/watch?v=D26bLJ9ut88"
              title="Spinning ASCII Donut"
              target="_blank"
              className="text-accent transition-all hover:text-buttonHover hover:underline "
            >
              <FaExternalLinkAlt className="ml-2 inline-block h-8 w-8 text-accent -sm:ml-0 -sm:h-4  -sm:w-4" />
            </Link>
          </p>

          <CounterAnalytics />
        </div>
      </div>
    </div>
  );
};
export default Who;
