import React from "react";
import PageBanner from "../component/PageBanner";
import About from "../component/About";
import aboutbg from "../images/pinban.jpg";

import "./AboutUs.css"; // ✅ page-specific styling (optional)

function AboutUs() {
  return (
    <div className="about-us-page">
      <PageBanner
        title="About Us"
        bgImage={aboutbg}
      />

      <About />
    </div>
  );
}

export default AboutUs;

