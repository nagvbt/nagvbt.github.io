import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const socialDetails = [
  {
    name: "linkedin",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/nagvbt/",
  },
  {
    name: "github",
    icon: GitHubIcon,
    link: "https://github.com/nagvbt",
  },
  {
    name: "twitter",
    icon: TwitterIcon,
    link: "https://twitter.com/NagVbt",
  },
  {
    name: "facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/people/Nag-Vbt/100023898528104/",
  },
];

const getHoverIconColor = (site) => {
  switch (site) {
    case "linkedin":
      return "#0a66c2";
    case "github":
      return "purple";
    case "twitter":
      return "#289CED";
    case "facebook":
      return "#1272E3";
    default:
      return "blue";
  }
};

export default function Socials() {
  const { isDarkTheme } = useColorMode();
  return (
    <div>
      {socialDetails.map((cn) => {
        return (
          <a
            href={cn.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cn.classname}
          >
            <cn.icon
              sx={{
                color: isDarkTheme ? "white" : "black",
                fontSize: 35,
                marginTop: 1,
                marginBottom: 2,
                marginRight: 1,
                "&:hover": {
                  color: `${getHoverIconColor(cn.name)}`,
                },
              }}
            />
          </a>
        );
      })}
    </div>
  );
}
