import React from "react";
import introBanner from "../images/intro-banner.png";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h3 className="fw-extrabold blue-color">
              Why choose AFMSH ProHealth Clinic?
            </h3>
            <p className="fs-5">
              We have high-quality doctors who are ready to help you heal. We offer all kinds of medical treatments. 
              We have various research laboratories and medical expertise. AFMSH ProHealth Clinic ensures the best healthcare as 
              well as clinical service with exceptional personal care.
            </p>
            <p className="fs-5">
            The motto of AFMSH ProHealth Clinic is that caring for people is more than just healthcare. We prefer quality over everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
