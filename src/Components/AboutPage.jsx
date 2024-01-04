function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <div className="aboutContainer">
        <div className="aboutTextContainer">
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
      </div>
    </div>
  );
}

export default AboutPage;
