// Page Components START----------

import {
  FadeContainer,
  headingFromLeft,
  opacityVariant
} from "@content/FramerMotionVariants";

import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Metadata from "@components/MetaData";
import React from "react";
import SkillSection from "@components/Home/SkillSection";
import generateSitemap from "@lib/sitemap";
import { getAllPostsMeta } from "@lib/sanityContent";
import { motion } from "framer-motion";
import pageMeta from "@content/meta";

export default function Home() {
  return (
    <>
      <Metadata
        title="Dalton Kimmerly"
        description={pageMeta.home.description}
        previewImage={pageMeta.home.image}
        keywords={pageMeta.home.keywords}
      />
      <div className="relative max-w-4xl mx-auto dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl">
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={FadeContainer}
          viewport={{ once: true }}
          className="grid min-h-screen py-15 place-content-center"
        >
          <div className="relative flex flex-col items-center w-full gap-10 mx-auto">

            <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
              <div className="flex flex-col gap-1">
                <motion.h1
                  variants={opacityVariant}
                  className="text-5xl font-bold lg:text-6xl font-sarina pb-4"
                >
                  Dalton Kimmerly
                </motion.h1>
                <motion.p
                  variants={opacityVariant}
                  className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
                >
                  Senior Full Stack Engineer | Data Processing Expert
                </motion.p>
              </div>

              <motion.p
                variants={opacityVariant}
                className=" text-[#474747] dark:text-gray-300 font-medium text-sm md:text-base text-center padding-4"
              >
              Turning Dreams into Reality, just like Steve Jobs says "Stay Hungry, Stay Foolish" This is our motto
              </motion.p>
            </div>

            <Link
              href={process.env.RESUME_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 transition-transform border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-white dark:hover:bg-neutral-800 active:scale-95"
            >
              <FiDownload />
              <p>Resume</p>
            </Link>
          </div>
        </motion.section>

        <div>
          <SkillSection />
        </div>
      </div>
    </>
  );
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full my-2 text-2xl sm:text-3xl font-bold text-left font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}

export async function getStaticProps() {
  const blogs = await getAllPostsMeta(3);

  await generateSitemap();

  return {
    props: { blogs },
  };
}
