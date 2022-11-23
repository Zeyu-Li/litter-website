import { type NextPage } from "next";
import Link from "next/link";
import Button from "../components/common/Button";
import Header from "../components/common/Header";
import Title from "../components/SEO/Title";

import { default as PiratePenguin } from "../../public/vector/pirate.svg";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const eyepatch: HTMLElement | null = document.querySelector(
      ".pirate_svg__eyepatch"
    );
    const eyepatchPath: HTMLElement | null = document.querySelector(
      ".pirate_svg__eyepatchPath"
    );
    if (eyepatch) {
      eyepatch.style.cursor = "pointer";
    }
    if (eyepatchPath) {
      eyepatchPath.onclick = () => {
        router.push("/supersecret/secret");
      };
    }
  }, []);
  return (
    <>
      <Title title="Tinkering Penguin | Lost in Antarctica" />
      <Header />
      <main className="backgroundPile flex min-h-screen items-center justify-center bg-primary">
        <div className="m-auto flex max-w-4xl justify-center p-8 text-4xl -sm:flex-col">
          <div>
            <h1 className="my-8 text-7xl font-bold text-secondary -sm:my-4 -sm:text-5xl">
              Page 404
            </h1>
            <h2 className="my-8 text-5xl text-secondary/80 -sm:my-4 -sm:text-3xl">
              This page must{"'"}ve been stolen by a pirate 🦜
            </h2>
            <Link href="/">
              <Button text={"Take me Home →"} />
            </Link>
          </div>
          <div className="flex h-[40vh] w-[40vh] items-center justify-center">
            <PiratePenguin className="pageIcons" />
          </div>
        </div>
      </main>
    </>
  );
};
export default Custom404;
