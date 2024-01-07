function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <div className="aboutTextContainer">
        <p>
          Hello, I'm Chris—a detail-oriented and organized professional with a
          background in 3D animation and IT support. Now exploring web
          development, my autonomy, patience, and problem-solving skills equip
          me to create efficient and visually engaging web solutions. I'm eager
          to bring my strengths to your team, offering a reliable and
          independent perspective for your projects.
        </p>
      </div>
      <div className="skillsContainer">
        {/* <h2 className="skillsHeading">Skills</h2> */}
        <div className="skillTechnologies">
          <div className="frontEndSkills">
            <h3>Front-End</h3>
            <div className="skill">
              <p className="skillsText">HTML</p>
              <img src="html.png" alt="html logo" className="htmlIcon" />
            </div>
            <div className="skill">
              <p className="skillsText">CSS</p>
              <img src="css.png" alt="css logo" className="cssIcon" />
            </div>
            <div className="skill">
              <p className="skillsText">JavaScript</p>
              <img
                src="javascript.png"
                alt="JavaScript logo"
                className="jsIcon"
              />
            </div>
            <div className="skill">
              <p className="skillsText">TypeScript</p>
              <img
                src="typescript.png"
                alt="TypeScript logo"
                className="tsIcon"
              />
            </div>
            <div className="skill">
              <p className="skillsText">Bootstrap</p>
              <img
                src="bootstrap.jpeg"
                alt="Bootstrap logo"
                className="bootstrapIcon"
              />
            </div>
            <div className="skill">
              <p className="skillsText">React</p>
              <img src="reactLogo.png" alt="React logo" className="reactIcon" />
            </div>
          </div>
          <div className="backEndSkills">
            <h3>Back-End</h3>
            <div className="skill">
              <p className="skillsText">MongoDB</p>
              <img src="mongodb.png" alt="MongoDB logo" className="mongoIcon" />
            </div>
            <div className="skill">
              <p className="skillsText">REST API</p>
              <img src="rest.png" alt="API icon" className="apiIcon" />
            </div>
            <div className="skill">
              <p className="skillsText">Node.JS</p>
              <img src="node.png" alt="NodeJS logo" className="nodeIcon" />
            </div>
            <div className="skill">
              <p className="skillsText">Mongoose</p>
              <img
                src="mongoose.png"
                alt="Mongoose logo"
                className="mongooseIcon"
              />
            </div>
            <div className="skill">
              <p className="skillsText">AWS</p>
              <img src="awsLogo.png" alt="AWS logo" className="awsIcon" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="aboutContainer">
        <div className="skillsTextContainer">
          <h2>Skills</h2>
          <div></div>
          <div className="aboutTable">
            <div className="aboutHeadings">
              <h4 className="skillsHeading">Front-End</h4>
              <h4 className="yearsHeading">Back-End</h4>
              <h4 className="expertiseHeading">Testing</h4>
            </div>
            <div className="aboutSkill1">
              <p className="frontEnd">HTML</p>
              <p className="backEnd">MongoDB</p>
              <p className="testing">Test-Driven Development</p>
            </div>
            <div className="aboutSkill1">
              <p className="frontEnd">CSS</p>
              <p className="backEnd">RESTful APIs</p>
              <p className="testing">Behaviour-Driven Development</p>
            </div>
            <div className="aboutSkill1">
              <p className="frontEnd">JavaScript</p>
              <p className="backEnd">Node.JS</p>
              <p className="testing">Jest-Cucumber</p>
            </div>
            <div className="aboutSkill1">
              <p className="frontEnd">TypeScript</p>
              <p className="backEnd">CORs</p>
              <p className="testing">Beginner</p>
            </div>
            <div className="aboutSkill1">
              <p className="frontEnd">Bootstrap</p>
              <p className="backEnd">JSON</p>
              <p className="testing">Postman</p>
            </div>
          </div>
        </div>
      </div>
      <div className="downloadContainer">
        <a href="resume.pdf" download>
          <button className="downloadButton">Download my CV</button>
        </a>
      </div> */}
    </div>
  );
}

export default AboutPage;
