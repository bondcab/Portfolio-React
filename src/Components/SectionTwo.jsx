function SectionTwo() {
  return (
    <div className="aboutPageContainer">
      <div className="aboutContainer">
        <div className="aboutTextContainer">
          <p className="aboutText">
            Hello, I'm Chris—a detail-oriented and organized professional with a
            background in 3D animation and IT support. Now exploring web
            development, my autonomy, patience, and problem-solving skills equip
            me to create efficient and visually engaging web solutions. I'm
            eager to bring my strengths to your team, offering a reliable and
            independent perspective for your projects.
          </p>
        </div>
        <div className="skillsContainer">
          {/* <h2 className="skillsHeading">Skills</h2> */}
          <div className="skillTechnologies">
            <div className="frontEndSkills">
              <h2 className="frontEnd">Front-End</h2>
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
                <img
                  src="reactLogo.png"
                  alt="React logo"
                  className="reactIcon"
                />
              </div>
            </div>
            <div className="backEndSkills">
              <h2>Back-End</h2>
              <div className="skill">
                <p className="skillsText">MongoDB</p>
                <img
                  src="mongodb.png"
                  alt="MongoDB logo"
                  className="mongoIcon"
                />
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
      </div>
    </div>
  );
}

export default SectionTwo;
