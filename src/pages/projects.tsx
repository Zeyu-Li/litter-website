import dynamic from "next/dynamic";
import { type NextPage } from "next";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

// import ProjectComponent with ssr: false
const ProjectComponent = dynamic(
  () => import("../components/ProjectComponent"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProjectComponent />
      </main>
      <Footer />
    </>
  );
};

export default Home;
