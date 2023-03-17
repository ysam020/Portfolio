import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import DialpadRoundedIcon from "@mui/icons-material/DialpadRounded";

export const sidebarData = [
  {
    id: 1,
    icon: <HomeRoundedIcon />,
    name: "Home",
    url: "#banner",
    ariaLabel: "home",
  },
  {
    id: 2,
    icon: <SchoolIcon />,
    name: "Education",
    url: "#education",
    ariaLabel: "education",
  },
  {
    id: 3,
    icon: <CodeRoundedIcon />,
    name: "Technologies",
    url: "#technologies",
    ariaLabel: "technologies",
  },
  {
    id: 4,
    icon: <AssignmentRoundedIcon />,
    name: "Projects",
    url: "#projects",
    ariaLabel: "projects",
  },
  {
    id: 5,
    icon: <DialpadRoundedIcon />,
    name: "Contact",
    url: "#contact",
    ariaLabel: "contact",
  },
];
