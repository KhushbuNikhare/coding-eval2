import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    to: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Products",
    to: "/products",
    id: "header-link-products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  //map through the link ad display it in header
  return (
    <div style={{ backgroundColor: "grey", padding: "20px" }}>
      {links.map(({ title, to }, index) => {
        return (
          <NavLink key={index} to={to}>
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};
