import React from "react";
import "./upperNav.css";
import send from "../../Images/send.png";
import phone from "../../Images/phone.png";

const UpperNav = () => {
  return (
    <div id="upperNav">
      <div id="brandName">
        <a href="#">
          <h1>FOX.</h1>
          <h4>UNIVERSITY</h4>
        </a>
      </div>
      <div id="contacts">
        <div id="mail">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=pratikravindrapatil2606@gmail.com"
            target="_blank"
          >
            <img src={send} alt="Email" />
          </a>

          <div className="info">
            <h3>Email</h3>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=pratikravindrapatil2606@gmail.com"
              target="_blank"
            >
              <p>youremail@gmail.com</p>
            </a>
          </div>
        </div>
        <div id="call">
          <a href="tel: +1235235598">
            <img src={phone} alt="Phone" />
          </a>
          <div className="info">
            <h3>Call</h3>
            <a href="tel: +1235235598">
              <p>Call Us: +1235 2355 98</p>
            </a>
          </div>
        </div>
      </div>
      <button className="btn" id="applyNow">
        Apply now
      </button>
    </div>
  );
};

export default UpperNav;
