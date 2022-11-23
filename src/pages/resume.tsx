import dynamic from "next/dynamic";
import { type NextPage } from "next";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

// import ResumeDoc with ssr: false
const ResumeDoc = dynamic(() => import("../components/resume/resume"), {
  ssr: false,
});

const Resume: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <div
          id="resume"
          className="min-h-screen w-screen bg-primary p-12 pt-[25vh]"
        >
          <div className="m-auto max-w-4xl">
            <h1 className="mb-12 text-7xl font-bold text-secondary underline -sm:text-5xl">
              Resume:
            </h1>
            <ResumeDoc />
            <p className="mt-12 text-5xl text-secondary -sm:text-2xl ">
              Direct link to my resume{" "}
              <Link
                href="/resume.pdf"
                className="text-accentDark transition-all hover:text-buttonHover hover:underline"
              >
                here
                <FaExternalLinkAlt className="ml-2 inline-block h-6 w-6 text-accentDark -sm:h-4 -sm:w-4" />
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
