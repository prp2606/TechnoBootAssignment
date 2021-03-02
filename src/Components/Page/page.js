import React from "react";
import "./page.css";
import bg1 from "../../Images/bg1.jpg";
import bg2 from "../../Images/bg2.jpg";

const Page = () => {
  return (
    <div id="page">
      <div id="frontLine">
        <h1>
          Education Needs <br /> Complete Solution
        </h1>
      </div>
      <div id="frontLineText">
        <p>
          A small river named Duden flows by their place and supplies it with
          <br />
          the necessary regelialia
        </p>
      </div>
      <button className="btn" id="contactUs">
        Contact Us
      </button>
    </div>
  );
};

export default Page;
