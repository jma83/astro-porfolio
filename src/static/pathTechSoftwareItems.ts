import { type IconData } from "../types/Path.ts";

export const confluenceLogo: IconData = {
  src: "/images/path/tech/confluence_logo.webp",
  alt: "Confluence",
};

export const gitLogo: IconData = {
  src: "/images/path/tech/git_logo.png",
  alt: "Git",
};

export const svnLogo: IconData = {
  src: "/images/path/tech/svn_logo.png",
  alt: "SVN",
};

export const jiraLogo: IconData = {
  src: "/images/path/tech/jira_logo.png",
  alt: "Jira",
};

export const togglLogo: IconData = {
  src: "/images/path/tech/toggl_logo.png",
  alt: "Toggl",
};

export const trelloLogo: IconData = {
  src: "/images/path/tech/trello_logo.png",
  alt: "Trello",
};

export const msProject: IconData = {
  src: "/images/path/tech/ms-project_logo.png",
  alt: "Microsoft Project",
};

export const dockerLogo: IconData = {
  src: "/images/path/tech/docker_logo.png",
  alt: "Docker",
};

export const getPathTechSoftwareItems = () => [
  jiraLogo,
  confluenceLogo,
  trelloLogo,
  togglLogo,
  msProject,
  gitLogo,
  svnLogo,
  dockerLogo,
];
