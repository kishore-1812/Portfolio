import React, { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { BreakpointProvider, Breakpoint } from "react-socks";
import "../Styles/Navbar.css";

const Navbar = () => {
  // usestate for desktop navbar
  const [navbar, setNavbar] = useState(false);
  const change_onscroll = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    change_onscroll();
    window.addEventListener("scroll", change_onscroll);
  });
  // usestate for tab and mob navbar
  const [togglenav, setTogglenav] = useState(false);
  const switchNav = () => {
    setTogglenav(!togglenav);
  };
  return (
    <BreakpointProvider>
      <Breakpoint
        className={togglenav ? "mob_tab_nav mob_tab_alt" : "mob_tab_nav"}
        medium
        down
      >
        <nav>
          <div
            onClick={switchNav}
            className={togglenav ? "hamburger open" : "hamburger"}
          >
            <div id="ham_top"></div>
            <div id="ham_mid"></div>
            <div id="ham_bot"></div>
          </div>
          {togglenav && (
            <div className="nav-list">
              <ul id="mob_nav_lst">
                <li className="nav_item">
                  <a href="#about_me" className="nav_menu_link">About</a>
                </li>
                <li className="nav_item">
                  <a href="#work" className="nav_menu_link">Portfolio</a>
                </li>
                <li className="nav_item">
                  <a href="#contact_cont" className="nav_menu_link">Contact</a>
                </li>
                <li className="nav_item">
                  <button id="mb_resumebtn"><a href="https://drive.google.com/file/d/11cBpB-3DYO9R8LoSm0I9aK3cHNNJrAED/view?usp=sharing" target={"_blank"}  rel="noreferrer" id="mb_resume_name">Resume</a></button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </Breakpoint>
      <Breakpoint large up>
        <div className={navbar ? "navbar_scroll" : "navbar"}>
          <Scrollspy
            className="nav_flex"
            items={["about_me", "work", "contact_cont"]}
            currentClassName="active"
          >
            <li>
              <a href="#about_me" className="nav_menu_link menu-scrollhover">About</a>
            </li>
            <li>
              <a href="#work" className="nav_menu_link menu-scrollhover">Portfolio</a>
            </li>
            <li>
              <a href="#contact_cont" className="nav_menu_link menu-scrollhover">Contact</a>
            </li>
            <li>
              <button id="resumebtn"><a href="https://drive.google.com/file/d/11cBpB-3DYO9R8LoSm0I9aK3cHNNJrAED/view?usp=sharing" download target={"_blank"}  rel="noreferrer" id="resume_name">Resume</a></button>
            </li>
          </Scrollspy>
        </div>
      </Breakpoint>
    </BreakpointProvider>
  );
};

export default Navbar;
