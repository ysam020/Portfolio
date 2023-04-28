import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DialpadRoundedIcon from "@mui/icons-material/DialpadRounded";

export const sidebarData = [
  {
    id: 1,
    icon: <AddHomeOutlinedIcon />,
    name: "Home",
    url: "banner",
    ariaLabel: "home",
  },
  {
    id: 2,
    icon: <SchoolOutlinedIcon />,
    name: "Education",
    url: "education",
    ariaLabel: "education",
  },
  {
    id: 3,
    icon: <CodeRoundedIcon />,
    name: "Technologies",
    url: "technologies",
    ariaLabel: "technologies",
  },
  {
    id: 4,
    icon: <AssignmentOutlinedIcon />,
    name: "Projects",
    url: "projects",
    ariaLabel: "projects",
  },
  {
    id: 5,
    icon: <DialpadRoundedIcon />,
    name: "Contact",
    url: "contact",
    ariaLabel: "contact",
  },
];
