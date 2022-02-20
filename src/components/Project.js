import React from "react";

const projects = [
  {
    title: "Starlight - Band booking website",
    duration: "Duration : Ongoing (06/2021 - present)",
    desc: `Starlight is a band booking website which is made using Next.Js to
    improve SEO. Admin panel has different roles to update the frontend
    website and this is built using React.Js. We stored the data in MongoDB
    and to access the data we made REST apis using Node.Js. Finally it's
    deployed in the AWS platform. For running builds we use Jenkins.`
},
  {
    title: "Portfolio Website using ReactJS",
    duration: "Duration : 23 days (04/2021 - 05/2021)",
    desc: `This portfolio website is created using ReactJS. This is a
    responsive website which supports all devices and also includes
    particles, transitions and animations.`
},
  {
    title: "Plant Disease Detection using CNN",
    duration: "Duration : 30 days (03/2021 - 03/2021)",
    desc: `The overall objective of the system is to detect the infected leaf
    of plant in a short period of time. The proposed system will use a
    custom Convolutional Neural Network (CNN) to classify whether the
    given image of plant leaf is affected by disease or not.`
},
  {
    title: "YouTube spam comment removal using Machine Learning",
    duration: "Duration : 4 months (10/2020 - 01/2021)",
    desc: `To delete YouTube spam comments by a bot. So that every day the bot
    checks the comments, if the comments are spam comments it
    automatically deletes that comment from YouTube channel using OAuth
    API.`
},
  {
    title: "Real Time Object Detection",
    duration: "Duration : 3 months (10/2018 - 12/2018)",
    desc: `To start learning about machine learning, I decided to do an
    existing project called Real Time Object Detection. So that I can
    get practical knowledge about Machine Learning.`
},
  {
    title: "Text Editor using Python",
    duration: "Duration : 2 months (08/2018 - 09/2018)",
    desc: `It is a text editor like notepad with all shortcut options. It was
    created with python (TKinter – GUI development library) which helps
    to edit text with less size of memory and the size of this text
    editor is too small when compared to other text editors.`
},
]

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
        {projects.map(project => <div className="project-list">
          <h4>{project.title}</h4>
          <h6>{project.duration}</h6>
          <p>
            {project.desc}
          </p>
        </div>)}
      </div>
    </div>
  );
}

export default Project;
