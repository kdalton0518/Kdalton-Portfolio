import Code from "./Code";
import CodeSandbox from "./CodeSandbox";
import CodeTitle from "./CodeTitle";
import Danger from "./Danger";
import EmbedBlog from "./EmbedBlog";
import Figcaption from "./Figcaption";
import LinkedInEmbed from "./LinkedInEmbed";
import NextAndPreviousButton from "./NextAndPreviousButton";
import Pre from "./Pre";
import Step from "./Step";
import Tip from "./Tip";
import UrlMetaInfo from "./UrlMetaInfo";
import Warning from "./Warning";
import YouTube from "./YouTube";

const MDXComponents = {
  Figcaption,
  Warning,
  Danger,
  CodeTitle,
  Tip,
  Step,
  CodeSandbox,
  NextAndPreviousButton,
  YouTube,
  EmbedBlog,
  UrlMetaInfo,
  LinkedInEmbed,
  pre: Pre,
  code: Code,
};

export default MDXComponents;
