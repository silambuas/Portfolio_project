import React from "react";

function Project() {
  return (
    <div id="Main-project" className="Main-project">
      <div className="project-h1">
        <h1>
          {" "}
          <br />
          <br />
          Projects
          <br />
        </h1>
      </div>

      <div className="project">
        <div className="project-list">
          <h4>Portfolio Website using ReactJS</h4>
          <h6>Duration : 45 days (04/2021 - 05/2021)</h6>
          <p>
            This portfolio website is created using ReactJS. This is a
            responsive website which supports all devices and also includes
            particles, transitions and animations.
          </p>
        </div>
        <div className="project-list">
          <h4>Plant Disease Detection using CNN</h4>
          <h6>Duration : 1 month (03/2021 - 03/2021)</h6>
          <p>
            The overall objective of the system is to detect the infected leaf
            of plant in a short period of time. The proposed system will use a
            custom Convolutional Neural Network (CNN) to classify whether the
            given image of plant leaf is affected by disease or not.
          </p>
        </div>
        <div className="project-list">
          <h4>YouTube spam comment removal using Machine Learning</h4>
          <h6>Duration : 4 months (10/2020 - 01/2021)</h6>
          <p>
            To delete YouTube spam comments by a bot. So that every day the bot
            checks the co mments, if the comments are spam comments it
            automatically deletes that comment from YouTube channel using OAuth
            API.
          </p>
        </div>
        <div className="project-list">
          <h4>Real Time Object Detection</h4>
          <h6>Duration : 3 months (10/2018 - 12/2018)</h6>
          <p>
            To start learning about machine learning, I decided to do an
            existing project called Real Time Object Detection. So that I can
            get practical knowledge about Machine Learning.
          </p>
        </div>
        <div className="project-list">
          <h4>Text Editor using Python</h4>
          <h6>Duration : 2 months (08/2018 - 09/2018)</h6>
          <p>
            It is a text editor like notepad with all shortcut options. It was
            created with python (TKinter – GUI development library) which helps
            to edit text with less size of memory and the size of this text
            editor is too small when compared to other text editors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
