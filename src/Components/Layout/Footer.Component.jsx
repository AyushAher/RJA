import React from "react";
import "./Footer.css";

export const FooterComponent = () => {
  return (
    <footer>
      <div className="title">
        <p>Rajendra Jaigude and Associates</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="d-flex">
            <img src="" alt="" />
            <p>
              <a href="mailto:raju_jaigude26@rediffmail.com">
                raju_jaigude26@rediffmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <img src="" alt="" />
            <p>
              356, 1st floor, Narsinhparsad Society,
              <br />
              Nr. Ramanbaug Highschool, Shaniwar Peth,
              <br />
              Pune.
              <br />
              PIN - 411030.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <img src="" alt="" />
            <p>
              <a href="tel:+919762223397">9762223397</a>
              <a href="tel:+919226107410">9226107410</a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <img src="" alt="" />
            <p>020-24435664</p>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="copyRight">
          <p>&#169;2020 Rajendra Jaigude And Associates</p>
        </div>
        <div className="developedBy">
          <p>Developed By: Ramson Developers</p>
        </div>
      </div>
    </footer>
  );
};
