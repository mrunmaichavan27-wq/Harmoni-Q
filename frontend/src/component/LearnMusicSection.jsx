import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnMusicSection.css";
import piano from "../images/piano.png";

const LearnMusicSection = () => {
  return (
    <section className="learn-section py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT TEXT SIDE */}
          <div className="col-md-6">
            <h6 className="fw-bold text-uppercase theme-color mb-3">
              Fun & Easy
            </h6>

            <h1 className="fw-bold display-5 mb-4">
              Learn music interactively anytime, anywhere
            </h1>

            <p className="text-secondary mb-3">
              Learn and practice music from home at your own pace using
              interactive and easy-to-use tools designed for all skill levels.
            </p>

            <p className="text-secondary mb-3">
              Play virtual instruments like Piano and Groovepad, record your
              creations, and track your progress with a personalized profile.
            </p>

            <p className="text-secondary mb-4">
              Our smart technology listens to your performance and provides
              real-time feedback on pitch, timing, and accuracy—helping you
              improve faster and play with confidence.
            </p>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={piano}
              alt="Virtual piano illustration"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearnMusicSection;