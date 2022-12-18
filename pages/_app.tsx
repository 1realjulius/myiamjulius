import "../styles/globals.css";
import "../styles/social-tooltips.css";
import "../styles/custom-btns.css";
import "../styles/confetti-btn.scss";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import NavMenu from "../components/nav-menu";
import Link from "next/link";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../public/Fonts/PolySans-Bulky.woff2" });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <div className="fixed top-4 right-4 z-50">
        <NavMenu />
      </div>
      <div className="absolute top-4 left-4 z-20 flex flex-col items-start">
        <div className="flex flex-col items-center">
          <Link
            href="/"
            className="relative h-[40px] w-[40px] object-contain md:h-[48px] md:w-[48px]"
          >
            <h1 className="font-PolySansBulky text-2xl text-[#828282] hover:underline hover:decoration-[#828282] md:text-3xl">
              iamjulius
            </h1>
          </Link>
        </div>
      </div>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
