import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import DialpadRoundedIcon from "@mui/icons-material/DialpadRounded";
import "../styles/sidebar.css";
import { IconButton, Tooltip } from "@mui/material";

const sidebarData = [
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

const useStyles = makeStyles((theme) => ({
  icon: { color: "#000 !important" },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className="navrail">
      <div className="navrail-icons">
        {sidebarData.map((link) => (
          <Link
            key={link.id}
            activeClass="active"
            to={link.url}
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            <span key={link.id}>
              <Tooltip title={link.name} enterDelay={300} placement="right">
                <IconButton
                  className={classes.icon}
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
              {/* <p>{link.name}</p> */}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
