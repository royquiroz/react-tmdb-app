import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const tabs = [
  {
    name: "Peliculas",
    route: "/movie"
  },
  {
    name: "Series",
    route: "/tv"
  }
];

export default function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <img
          src="https://skempin.github.io/reactjs-tmdb-app/images/tmdb.svg"
          className="logo"
          alt="logo"
        />
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          {tabs.map((tab, i) => (
            <NavLink key={i} className="navbar-item" to={tab.route}>
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
