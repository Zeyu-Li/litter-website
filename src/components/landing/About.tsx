import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="abstractSvg2 flex min-h-screen w-screen flex-row items-center bg-primary py-[15vh] pl-[30vw] pr-[20vw] -sm:pr-2"
    >
      <div>
        <h3 className="text-7xl font-bold text-secondary -sm:text-5xl">
          <span className="text-accentDark">Me</span>
          .<wbr />
          about()
        </h3>
        <div className="pt-24">
          <p className="text-5xl text-secondary -sm:text-2xl">
            I{"'"}m a{" "}
            <span className="animate-gradient bg-gradient-to-r from-highlight via-blue-500 to-green-400 bg-clip-text font-bold text-transparent">
              creative
            </span>{" "}
            who likes to tinker with all things tech and business
          </p>
        </div>
        <div className="pt-24">
          <p className="text-4xl text-secondary/80 -sm:text-2xl">
            Follow my blog for tech and business insights{" "}
            <Link
              href="https://blog.antarcticsolutions.ca/"
              title="Antarctic Solutions Blog"
              target="_blank"
              className="text-accentDark transition-all hover:text-buttonHover hover:underline "
            >
              here
              <FaExternalLinkAlt className="ml-2 inline-block h-8 w-8 text-accentDark -sm:h-4 -sm:w-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
