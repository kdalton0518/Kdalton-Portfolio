import {
  IContributionCalendar,
  IContributionCountByDay,
  IContributionDay,
  IGitHubProfileResponse,
  IGitHubRepositoriesAPIResponse,
  IUserContributionDetails,
  IWeek,
} from "./interface";

import { GithubRepo } from "./types";
import moment from "moment";

const headers = new Headers({
  Authorization: `token ${process.env.GITHUB_TOKEN}`,
});

// its for /api/stats/github
export async function fetchGithub(): Promise<IGitHubProfileResponse> {
  const requestOptions: RequestInit = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(
      "https://api.github.com/users/dev-of-future",
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Error fetching GitHub data: " + response.statusText);
    }
    const data = await response.json(); // Await the JSON promise
    return data as IGitHubProfileResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/* Retrieves the number of stars and forks for the user's repositories on GitHub. */
export async function getGithubStarsAndForks() {
  try {
    // Fetch user's repositories from the GitHub API
    const res = await fetch(
      "https://api.github.com/users/dev-of-future/repos?per_page=100",
      { headers }
    );
    const userRepos: IGitHubRepositoriesAPIResponse[] = await res.json();

    // filter those repos that are not forked
    const mineRepos: GithubRepo[] = userRepos.filter(
      (repo: GithubRepo) => !repo.fork
    );

    // Calculate the total number of stars for the user's repositories
    const githubStars = mineRepos.reduce(
      (accumulator: number, repository: GithubRepo) => {
        return accumulator + repository["stargazers_count"];
      },
      0
    );

    // Calculate the total number of forks for the user's repositories
    const forks = mineRepos.reduce(
      (accumulator: number, repository: GithubRepo) => {
        return accumulator + repository["forks_count"];
      },
      0
    );

    return { githubStars, forks };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getGithubContribution() {
  const now = moment();
  const from = moment(now).subtract(30, "days").utc().toISOString();
  // also include the next day in case our server is behind in time with respect to GitHub
  const to = moment(now).add(1, "days").utc().toISOString();
  const q = {
    query: `
              query userInfo($LOGIN: String!, $FROM: DateTime!, $TO: DateTime!) {
                user(login: $LOGIN) {
                  name
                  contributionsCollection(from: $FROM, to: $TO) {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }
            `,
    variables: {
      LOGIN: "dev-of-future",
      FROM: from,
      TO: to,
    },
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(q),
    headers,
  });
  const apiResponse = await response.json();

  const userData: IUserContributionDetails = {
    contributions: [],
    name: apiResponse.data.user.name,
  };

  const weeks =
    apiResponse.data.user.contributionsCollection.contributionCalendar.weeks;
  weeks.map((week: IWeek) =>
    week.contributionDays.map((contributionDay: IContributionDay) => {
      contributionDay.shortDate = moment(contributionDay.date, moment.ISO_8601)
        .date()
        .toString();
      userData.contributions.push(contributionDay);
    })
  );

  const contributionCountByDayOfWeek = calculateMostProductiveDayOfWeek(
    apiResponse.data.user.contributionsCollection.contributionCalendar
  );

  return { ...userData, contributionCountByDayOfWeek };
}

// Function to calculate the productive data by days
function calculateMostProductiveDayOfWeek(
  contributionCalendar: IContributionCalendar
): { day: string; count: number }[] {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const contributionCountByDayOfWeek: IContributionCountByDay = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
  };

  for (const week of contributionCalendar.weeks) {
    for (const day of week.contributionDays) {
      const date = new Date(day.date);
      const dayOfWeek = daysOfWeek[date.getUTCDay()];
      contributionCountByDayOfWeek[dayOfWeek] += day.contributionCount;
    }
  }

  const sortedData = Object.entries(contributionCountByDayOfWeek)
    .sort((a, b) => daysOfWeek.indexOf(a[0]) - daysOfWeek.indexOf(b[0]))
    .map(([day, count]) => ({ day, count }));

  const sunday = sortedData.shift();

  if (sunday) {
    sortedData.push(sunday);
  }

  return sortedData;
}
