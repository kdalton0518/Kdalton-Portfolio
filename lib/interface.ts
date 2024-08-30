export interface IExternalUrls {
  spotify: string;
}
export interface IFollowers {
  href?: null;
  total: number;
}
export interface IImagesEntity {
  height: number;
  url: string;
  width: number;
}

export interface IArtistsAPIResponse {
  external_urls: IExternalUrls;
  followers: IFollowers;
  genres?: string[] | null;
  href: string;
  id: string;
  images?: IImagesEntity[] | null;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ISpotifyArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ISpotifyAlbum {
  album_type: string;
  artists: ISpotifyAlbum[];
  available_markets: string[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImagesEntity[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ITracksAPIResponse {
  album: ISpotifyAlbum;
  artists: ISpotifyAlbum[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface IGitHubProfileResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: any;
  blog: string;
  location: string;
  email: any;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface IGitHubOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IGitHubLicense {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

export interface IGitHubRepositoriesAPIResponse {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IGitHubOwner;
  html_url: string;
  description?: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: IGitHubLicense;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface IContributionDay {
  contributionCount: number;
  date: string;
  shortDate: string;
}

export interface IWeek {
  contributionDays: IContributionDay[];
}

export interface IUserContributionDetails {
  contributions: IContributionDay[];
  name: string;
}

export interface IContributionCalendar {
  weeks: IWeek[];
}

export interface IContributionCountByDay {
  [day: string]: number;
}

export interface IEmailValidation {
  valid: boolean;
  block: boolean;
  disposable: boolean;
  domain: string;
  text: string;
  reason: string;
  risk: number;
  mx_host: string;
  possible_typo: any[];
  mx_ip: string;
  mx_info: string;
  last_changed_at: string;
}

/* Linkedin Interface */
export interface ILinkedinResponse {
  public_identifier: string;
  profile_pic_url: string;
  first_name: string;
  last_name: string;
  full_name: string;
  headline: string;
  summary: string;
  country: string;
  country_full_name: string;
  city: string;
  state: string;
  experiences: ILinkedInExperience[];
  education: ILinkedInEducation[];
  languages: string[];
  phone_numbers: any[];
  social_networking_services: any[];
  skills: string[];
  gender: any;
  birth_date: any;
}

export interface ILinkedInExperience {
  company: string;
  company_linkedin_profile_url: string;
  logo_url: string;
  job_titles: {
    starts_at: ILinkedInStartsAt;
    ends_at?: ILinkedInEndsAt;
    title: string;
    description?: string[];
    location?: string;
  }[];
}

export interface ILinkedInStartsAt {
  day: number;
  month: number;
  year: number;
}

export interface ILinkedInEndsAt {
  day: number;
  month: number;
  year: number;
}

export interface ILinkedInEducation {
  starts_at: ILinkedInStartsAt;
  ends_at: ILinkedInEndsAt;
  field_of_study: string;
  degree_name: string;
  school: string;
  school_linkedin_profile_url: any;
  description: any;
  logo_url: string;
  grade: any;
  activities_and_societies: any;
}

export interface ILinkedInVolunteerWork {
  starts_at: ILinkedInStartsAt;
  ends_at: ILinkedInEndsAt;
  title: string;
  cause: string;
  company: string;
  company_linkedin_profile_url: string;
  description?: string;
  logo_url: string;
}

export interface ILinkedInCertification {
  starts_at: ILinkedInStartsAt;
  ends_at: ILinkedInEndsAt;
  name: string;
  license_number?: string;
  display_source: string;
  authority: string;
  url: string;
}

export interface ITMDBData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating?: number;
}

/* ----------------------------------INSTAGRAM------------------------------ */

export enum MediaType {
  CarouselAlbum = "CAROUSEL_ALBUM",
  Image = "IMAGE",
  Video = "VIDEO",
}
export interface DetailedInstagramPost {
  id: string;
  permalink: string;
  caption: string;
  media_url: string;
  media_type: MediaType;
  timestamp: string;
  thumbnail_url?: string;
}

export interface Cursors {
  before: string;
  after: string;
}
export interface Paging {
  cursors: Cursors;
  next: string;
  previous: string;
}

export interface InstagramData {
  data: DetailedInstagramPost[];
  paging: Paging;
}
