import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  // animate opacity on load
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    // animate border bottom on load from left to right
    <header className="border-anim fixed top-0 z-50 w-full bg-gradient-to-b from-primary/40 to-transparent backdrop-blur-sm">
      <div className="m-auto flex max-w-[88em] flex-1 items-center justify-between px-16 -sm:px-4">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/icon.png"
              alt="Tinkering Penguin Logo"
              title="Tinkering Penguin Logo"
              className="spinMe my-4 h-12 w-12 transition-all duration-[1.5s]"
            />
          </Link>
        </div>
        <div
          className={`${
            loaded ? "opacity-100" : "opacity-0"
          } flex items-center transition-opacity duration-700 `}
        >
          <MobileNav />
          {/* list of nav elements */}
          <ul className="flex items-center text-2xl font-light text-secondary -sm:hidden">
            <li className="mx-4">
              <nav>
                <Link href="/" title="Home">
                  Home
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link href="/#contact" title="Contact">
                  Contact
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link href="/projects" title="Projects">
                  Projects
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link href="/resume" title="Resume">
                  Resume
                </Link>
              </nav>
            </li>
            <li className="mx-4">
              <nav>
                <Link
                  href="https://blog.andrewli.site/"
                  target="_blank"
                  title="Blog"
                >
                  Blog
                </Link>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
