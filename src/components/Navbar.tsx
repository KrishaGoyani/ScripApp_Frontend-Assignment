"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-top-left hide-on-sm">
          <i className="icon">🔲</i>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="navbar-top-center">
          <i className="icon">🔲</i>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="navbar-top-right hide-on-sm">
          <i className="icon">🔲</i>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div style={{ display: "flex", justifyContent: "start", gap: "1rem" }}>
          <div className="navbar-menu-icon" onClick={toggleMenu}>
            <i className="icon">☰</i>
          </div>
          <div>
            <img
              src="react-brands-solid.svg"
              style={{ width: 30 }}
              alt="logo"
            />
          </div>
        </div>

        <div className="navbar-logo">LOGO</div>

        <div className="navbar-icons">
          <Image
            alt="search-icon"
            src="/magnifying-glass-solid.svg"
            width={20}
            height={50}
          />
          <Image
            alt="heart-icon"
            src="heart-regular.svg"
            width={20}
            height={50}
          />
          <Image
            alt="shopping-icon"
            src="bag-shopping-solid.svg"
            width={20}
            height={50}
          />
          <Image
            alt="user-icon"
            src="user-regular.svg"
            width={20}
            height={50}
            className="sm-hidden"
          />

          <div>
            <select className="navbar-lang" name="eng">
              <option>ENG</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dropdown for small screens */}
      <div className={`dropdown-menu-nav ${menuOpen ? "open" : ""}`}>
        <nav className="navbar-links">
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </nav>
      </div>

      <div className="list-navbar">
        <nav className="navbar-links">
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
