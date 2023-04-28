import React from "react";
import { Link } from "react-scroll";
import "../styles/sidebar.css";
import { IconButton, Tooltip } from "@mui/material";
import { sidebarData } from "../assets/data/SidebarData";

const Sidebar = () => {
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
            offset={0}
            duration={300}
          >
            <span key={link.id}>
              <Tooltip title={link.name} enterDelay={300} placement="right">
                <IconButton
                  style={{ color: "#000" }}
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </IconButton>
              </Tooltip>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
