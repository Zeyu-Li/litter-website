import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Title from "../../components/SEO/Title";

import { default as CoinPenguin } from "../../../public/vector/coin.svg";

const Secret: NextPage = () => {
  const router = useRouter();
  const [clickedCoin, setClickedCoin] = useState(false);

  const clickCoin = () => {
    if (clickedCoin) {
      router.push("https://github.com/Zeyu-Li/litter-website");
    }
    setClickedCoin(!clickedCoin);
  };

  return (
    <>
      <Title title="Tinkering Penguin | Lost in Antarctica" />
      <Header />
      <main className="backgroundPile flex min-h-screen items-center justify-center bg-primary">
        <div className="m-auto flex max-w-4xl justify-center p-8 text-4xl -sm:flex-col">
          <div className="flex h-[40vh] w-[40vh] items-center justify-center">
            <CoinPenguin
              className={`pageIcons mr-10 cursor-pointer ${
                clickedCoin ? "rollCoin" : ""
              }`}
              onClick={clickCoin}
            />
          </div>
          <div>
            <h1 className="my-8 text-7xl font-bold text-red-600 -sm:my-4 -sm:text-5xl">
              Secret???
            </h1>
            <h2 className="my-8 text-5xl text-secondary/80 -sm:my-4 -sm:text-3xl">
              Good job! You got a Penguin Bottom Coin🪙
            </h2>
            <Link href="/">
              <Button text={"Take me Home →"} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Secret;
