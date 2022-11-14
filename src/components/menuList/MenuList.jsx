import React from "react";
import "./menuList.scss";

export default function MenuList({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menulist " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </div>
  );
}
