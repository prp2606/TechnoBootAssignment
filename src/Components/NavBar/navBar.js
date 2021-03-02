import React, { useState } from "react";
import "./navBar.css";

const NavBar = () => {
  const [classname1, setClassname1] = useState("hamBurger");
  const [classname2, setClassname2] = useState("dropUp");

  const openMenu = () => {
    if (classname1 === "hamBurger") {
      setClassname1("hamBurger open");
      setClassname2("dropDown");
    } else {
      setClassname1("hamBurger");
      setClassname2("dropUp");
    }
  };

  return (
    <nav id="navigation">
      <ul id="navLinks">
        <li id="home">
          <a href="#">
            <p className="active">Home</p>
          </a>
        </li>
        <li id="about">
          <a href="#">
            <p>About</p>
          </a>
        </li>
        <li id="courses">
          <a href="#">
            <p>Courses</p>
          </a>
        </li>
        <li id="staff">
          <a href="#">
            <p>Staff</p>
          </a>
        </li>
        <li id="blog">
          <a href="#">
            <p>Blog</p>
          </a>
        </li>
        <li id="contact">
          <a href="#">
            <p>Contact</p>
          </a>
        </li>
      </ul>
      <div className={classname1} onClick={openMenu}>
        <div className="hamBurgerBtn" id="slide1"></div>
        <div className="hamBurgerBtn" id="slide2"></div>
        <div className="hamBurgerBtn" id="slide3"></div>
      </div>

      <ul className={classname2}>
        <li id="home">
          <a href="#">
            <p className="active">Home</p>
          </a>
        </li>
        <li id="about">
          <a href="#">
            <p>About</p>
          </a>
        </li>
        <li id="courses">
          <a href="#">
            <p>Courses</p>
          </a>
        </li>
        <li id="staff">
          <a href="#">
            <p>Staff</p>
          </a>
        </li>
        <li id="blog">
          <a href="#">
            <p>Blog</p>
          </a>
        </li>
        <li id="contact">
          <a href="#">
            <p>Contact</p>
          </a>
        </li>
      </ul>

      <div id="search">
        <i class="fa fa-search icon"></i>
        <input class="input-field" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default NavBar;
