import React from "react";
import photo from "../imag.jpg";
import linkedin from "../linkedin.png";
import github from "../git1.png";
import download from "../download.jpg";

function About() {
  return (
    <div id="aboutPage" className="aboutPage">
      <div className="main-about">
        <h1>About </h1>
        <div className="alignment">
          <img className="photo" src={photo} alt="photo...." />
          <div className="text1">
            <h4>
              I'm Silambarasu but you can just call me Silambu.
              <br />
              <br />
            </h4>
            <p>
              For several years now, I have focused my career path and academic
              pursuits on learning and developing those all-important skills
              necessary to be great in full stack development. As a personal
              mission, I strive to empower and improve other's outlooks and
              circumstances.
              <br /> <br />
              I believe that being genuine and nurturing, along with
              professional and driven, is an essential combination for people in
              my field. I possess programming, software development and data
              analysis skills. Additionally, my abilities extend to leadership
              and collaboration with proficiency in critical thinking. <br />
              <br />
              Working with people from diverse backgrounds has provided me with
              a deep understanding and awareness of differences in both
              individuals and organizations.
            </p>
          </div>
        </div>
      </div>
      <div className="social">
        <p className="para ">GitHub</p>
        <a href="https://github.com/silambuas" target="_blank">
          <div className="text-hover">
            <img className="github" src={github} alt="Github...." />
          </div>
        </a>
        <p className="para">LinkedIn</p>
        <a href="https://www.linkedin.com/in/silambarasu-a/" target="_blank">
          <div className="text-hover">
            <img className="linkedin" src={linkedin} alt="Linkedin...." />
          </div>
        </a>
        <p className="para">Resume</p>
        <a href="#" target="_blank">
          <div className="text-hover">
            <img className="resume" src={download} alt="Resume...." />
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
