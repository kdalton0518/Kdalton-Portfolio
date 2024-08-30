import { FadeContainer, opacityVariant } from "@content/FramerMotionVariants";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import AnimatedHeading from "@components/FramerMotion/AnimatedHeading";
import AnimatedText from "@components/FramerMotion/AnimatedText";
import GitHubActivityGraph from "@components/GitHubActivityGraph";
import GitHubCalendar from "react-github-calendar";
import MetaData from "@components/MetaData";
import PageTop from "@components/PageTop";
import React from "react";
import StatsCard from "@components/Stats/StatsCard";
import fetcher from "@lib/fetcher";
import pageMeta from "@content/meta";
import { useDarkMode } from "@context/darkModeContext";
import useSWR from "swr";

type Stats = {
  title: string;
  value: string;
};

export default function Stats() {
  const { isDarkMode } = useDarkMode();
  const { data: github } = useSWR("/api/stats/github", fetcher);

  const stats: Stats[] = [
    {
      title: "GitHub Repos",
      value: github?.repos,
    },
    {
      title: "GitHub Gists",
      value: github?.gists,
    },
    {
      title: "GitHub Followers",
      value: github?.followers,
    },
    {
      title: "GitHub Stars",
      value: github?.githubStars,
    },
    {
      title: "GitHub Forked",
      value: github?.forks,
    },
  ];

  return (
    <>
      <MetaData
        title={pageMeta.stats.title}
        description={pageMeta.stats.description}
        previewImage={pageMeta.stats.image}
        keywords={pageMeta.stats.keywords}
      />

      <section className="pageTop font-inter">
        <PageTop pageTitle="Statistics">
          <p>
            These are my personal statistics about my Github.
          </p>
        </PageTop>

        {/* Blogs and github stats */}
        <AnimatedDiv
          className="grid xs:grid-cols-2 sm:!grid-cols-3 xl:!grid-cols-4 gap-5 my-10"
          variants={FadeContainer}
        >
          {stats.map((stat) => (
            <StatsCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
        </AnimatedDiv>

        <div className="font-barlow mb-10">
          <AnimatedHeading
            variants={opacityVariant}
            className="text-3xl font-bold capitalize sm:text-4xl text-neutral-900 dark:text-neutral-200"
          >
            GitHub Contribution
          </AnimatedHeading>
          <AnimatedText
            variants={opacityVariant}
            className="my-4 text-gray-700 dark:text-gray-300"
          >
            The following is my GitHub contribution graph which shows my coding
            activity and productivity on the platform.
          </AnimatedText>
          <GitHubCalendar
            style={{
              maxWidth: "100% !important",
            }}
            username="dev-of-future"
            colorScheme={isDarkMode ? "dark" : "light"}
          />
        </div>
        
        <GitHubActivityGraph />

      </section>
    </>
  );
}
