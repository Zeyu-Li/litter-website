import Link from "next/link";
import CounterAnalytics from "./common/CounterAnalytics";
import { Parallax } from "react-parallax";
import { MdWeb } from "react-icons/md";
import { FaExternalLinkAlt, FaGamepad, FaGithub } from "react-icons/fa";

interface SingleProjectProps {
  title?: string;
  link?: string;
  img?: string;
  description?: React.ReactNode;
  strength?: number;
  github?: string;
  demo?: string;
  isGame?: boolean;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  title,
  link,
  img,
  description,
  strength = 100,
  github,
  demo,
  isGame,
}) => {
  return (
    <div className="pb-12">
      <h2 className="text-5xl font-bold italic text-secondary -sm:text-3xl">
        {title}
      </h2>
      {img && link && title ? (
        <div className="mt-12 h-[40vh] w-[40vw] -xl:h-[20vh] -sm:h-[15vh] -sm:w-[80vw]">
          <Link href={link} target="_blank" className="pt-4">
            <Parallax
              bgImage={img}
              bgImageAlt={`${title} thumbnail`}
              strength={strength}
              className="z-[1] h-[40vh] w-[40vw] rounded-xl -xl:h-[20vh] -sm:h-[15vh] -sm:w-[80vw]"
            />
          </Link>
        </div>
      ) : null}
      {description && (
        <p className="my-4 text-3xl text-secondary/80 -sm:text-2xl">
          {description}
        </p>
      )}
      {github && (
        <div>
          <Link
            href={github}
            target="_blank"
            className="text-4xl text-accentDark transition-all hover:text-buttonHover hover:underline -sm:text-2xl"
          >
            {/* github fa icon */}
            <FaGithub className="m-4 inline" size={48} />
            Source Code
          </Link>
        </div>
      )}
      {demo && (
        <div>
          <Link
            href={demo}
            target="_blank"
            className="text-4xl text-accentDark transition-all hover:text-buttonHover hover:underline -sm:text-2xl"
          >
            {/* github fa icon */}
            {isGame ? (
              <FaGamepad className="m-4 inline" size={48} />
            ) : (
              <MdWeb className="m-4 inline" size={48} />
            )}
            Demo
          </Link>
        </div>
      )}
    </div>
  );
};

const ProjectComponent: React.FC = () => {
  return (
    <div
      id="projects"
      className="min-h-screen w-screen bg-primary p-12 pt-[20vh]"
    >
      <div className="m-auto max-w-4xl">
        <h1 className="text-7xl font-bold text-secondary underline -sm:text-5xl">
          Projects:
        </h1>
        <div className="pt-12 -sm:pt-6">
          {/* TODO: Conspire coming soon */}
          {/* <SingleProject
            title="Conspire.ai"
            link="https://conspire.ai/"
            alt="Conspire.ai"
            img="/images/conspire.png"
            strength={200}
          /> */}
          <SingleProject
            title="Spinning Donut"
            link="https://www.youtube.com/watch?v=D26bLJ9ut88"
            img="/images/projects/donut.webp"
            description="Spinning ASCII Donut in Python🍩"
          />

          <CounterAnalytics />
          <SingleProject
            title="Chatter"
            link="https://chatter-zeyu-li.vercel.app/"
            img="/images/projects/chatter.png"
            description={
              <>
                A realtime chat website <br />
                {">"} Using React, Firebase, JavaScript
              </>
            }
            github="https://github.com/Zeyu-Li/chatter"
            demo="https://chatter-zeyu-li.vercel.app/"
          />
          <SingleProject
            title="Lua Runner"
            description={
              <>
                A NPM Typescript module that runs Lua with over{" "}
                <b>2,000 downloads</b>
                <br />
                {">"} Using TypeScript, Webassembly
              </>
            }
            github="https://github.com/Zeyu-Li/lua-runner"
            demo="https://www.npmjs.com/package/lua-runner"
          />
          <SingleProject
            title="Django Ecommerce"
            link="https://github.com/Zeyu-Li/django_ecommerce_app"
            img="/images/projects/django.png"
            description={
              <>
                An ecommerce website build on Django and Bootstrap with login
                and shopping cart (connected to Stripe) <br />
                {">"} Using Python (Django), Stripe, JavaScript, CSS, HTML,
                Bootstrap
              </>
            }
            github="https://github.com/Zeyu-Li/django_ecommerce_app"
          />
          <SingleProject
            title="Attacked from Above"
            link="https://github.com/Zeyu-Li/django_ecommerce_app"
            img="/images/projects/game.png"
            description={
              <>
                An atmospheric isometric game with aliens. Play demo now online
                at the link below. <br />
                {">"} Using C#, Blender, Adobe Illustrator, Unity
              </>
            }
            github="https://github.com/Zeyu-Li/innovator-jam-2021"
            demo="https://andrewli.itch.io/attacked-from-above"
            isGame
          />

          <p className="my-4 text-3xl text-secondary -sm:text-2xl">
            Over 150 projects/repos on{" "}
            <Link
              href="https://github.com/Zeyu-Li"
              target="_blank"
              className="text-3xl text-accentDark transition-all hover:text-buttonHover hover:underline -sm:text-2xl"
            >
              My Github
              <FaExternalLinkAlt className="ml-2 inline-block h-6 w-6 text-accentDark hover:text-buttonHover -sm:h-4 -sm:w-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
