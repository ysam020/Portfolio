import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const iconStyles = {
  width: "50px !important",
  height: "50px !important",
  margin: "15px !important",
  color: "#283E44",
};

export const socialData = [
  {
    id: 1,
    icon: <GitHubIcon sx={iconStyles} />,
    name: "Github",
    url: "https://github.com/ysam020",
  },
  {
    id: 2,
    icon: <LinkedInIcon sx={iconStyles} />,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ysam090/",
  },
];
