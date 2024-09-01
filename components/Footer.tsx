import Link from "next/link";
import socialMedia from "@content/socialMedia";
import {
  FadeContainer,
  opacityVariant,
  popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { HiOutlineQrcode } from "react-icons/hi";
import { BsDot } from "react-icons/bs";

export default function Footer({
  setShowQR,
  showQR,
}: {
  setShowQR: (value: boolean) => void;
  showQR: boolean;
}) {


  return (
    <footer className="w-screen text-gray-600 dark:text-gray-400/50 font-inter mb-14 print:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base"
      >

        <section className="grid grid-cols-3 gap-24 self-center">
          <div className="flex flex-col gap-8 capitalize">
            {navigationRoutes.slice(0, 4).map((text, index) => {
              if (text.toLowerCase() === 'home') {
                return (
                  <Link key={index} href="/" className="hover:text-black dark:hover:text-white w-fit">
                    {text}
                  </Link>
                );
              }
              return <FooterLink key={index} route={text} text={text} />;
            })}
          </div>
          <div className="flex flex-col gap-8 capitalize">
            {navigationRoutes
              .slice(4, 8)
              .map((route, index) => {
                let text = route;
                if (route === "rss") text = "RSS";
                return <FooterLink key={index} route={route} text={text} />;
              })}
          </div>
          <div className="flex flex-col gap-8 capitalize">
            {socialMedia.slice(0, 4).map((platform, index) => {
              return (
                <Link
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.p
                    className="hover:text-black dark:hover:text-white w-fit"
                    variants={popUp}
                  >
                    {platform.title}
                  </motion.p>
                </Link>
              );
            })}
          </div>
        </section>
        <motion.div
          variants={opacityVariant}
          className="flex items-center justify-between w-full gap-4 mt-5 "
        >
          <div className="relative flex items-center px-4 py-1 text-xs bg-white rounded-full shadow dark:bg-darkSecondary sm:text-sm">
            <BsDot className="-ml-2 text-green-500 w-7 h-7 animate-ping" />
            {/* <div className="flex items-center gap-1">
              {visitors?.totalVisitors ?? (
                <div className="w-10 h-3 bg-gray-300 rounded-full dark:bg-darkPrimary animate-pulse"></div>
              )}{" "}
              visitors in last {visitors?.days} days
            </div> */}
          </div>
          <div
            onClick={() => setShowQR(!showQR)}
            className="p-3 text-white transition-all bg-gray-700 rounded-full cursor-pointer active:scale-90 hover:scale-105"
          >
            <HiOutlineQrcode className="w-5 h-5 " />
          </div>
        </motion.div>

        <motion.div
          variants={opacityVariant}
          className="flex items-center justify-center gap-2 mt-5 text-black dark:text-white"
        >
          <span>Powered by</span>

          <Link
            target="_blank"
            aria-label="Next.js"
            rel="noreferrer"
            href="https://nextjs.org"
            className="font-semibold hover:underline"
          >
            Next.js
          </Link>
          <span>and</span>
          <Link
            target="_blank"
            aria-label="Vercel"
            rel="noreferrer"
            href="https://vercel.com"
            className="font-semibold hover:underline"
          >
            Vercel
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterLink({ route, text }: { route: string; text: string }) {
  return (
    <Link href={`/${route}`}>
      <motion.p
        className="hover:text-black dark:hover:text-white w-fit"
        variants={popUp}
      >
        {text}
      </motion.p>
    </Link>
  );
}