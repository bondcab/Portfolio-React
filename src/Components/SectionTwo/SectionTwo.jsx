import { useState, useRef, useEffect } from "react";
import styles from "./SectionTwo.module.css";

function SectionTwo({ setAbout, setHome, setContact, setWork }) {
  const [visible, setVisible] = useState(false);
  const domRefAbout = useRef();

  useEffect(() => {
    const currentRef = domRefAbout.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (visible) {
      setHome(false);
      setAbout(true);
      setContact(false);
      setWork(false);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [domRefAbout, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div className={styles.aboutPageContainer}>
      <div
        className={
          visible ? styles.aboutContainer : styles.aboutContainerReveal
        }
      >
        <div className={styles.sectionContainer}>
          <div className={styles.aboutSectionContainer}>
            <h2 className={styles.about} id="#sectionTwo">
              About
            </h2>
            <div className={styles.aboutTextContainer}>
              <div className={styles.aboutTextSubContainer}>
                <p className={styles.aboutText}>
                  Hello, I'm Chris, a detail oriented and organised professional
                  with a background in 3D animation and IT support. Now
                  exploring web development, my autonomy, patience, and
                  problem-solving skills equip me to create efficient and
                  visually engaging web solutions. I'm eager to bring my
                  strengths to your team, offering a reliable and independent
                  perspective for your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutSkillsContainer}>
            <h2 className={styles.about}>Skills</h2>
            <div className={styles.skillsContainer}>
              <div className={styles.skillTechnologies}>
                <div className={styles.frontEndSkills}>
                  <h2 className={styles.frontEnd} ref={domRefAbout}>
                    Front-End
                  </h2>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>HTML</p>
                    <img
                      src="html.png"
                      alt="html logo"
                      className={styles.htmlIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>CSS</p>
                    <img
                      src="css.png"
                      alt="css logo"
                      className={styles.cssIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>JavaScript</p>
                    <img
                      src="javascript.png"
                      alt="JavaScript logo"
                      className={styles.jsIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>TypeScript</p>
                    <img
                      src="typescript.png"
                      alt="TypeScript logo"
                      className={styles.tsIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>Bootstrap</p>
                    <img
                      src="bootstrap.jpeg"
                      alt="Bootstrap logo"
                      className={styles.bootstrapIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>React</p>
                    <img
                      src="reactLogo.png"
                      alt="React logo"
                      className={styles.reactIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>Redux</p>
                    <img
                      src="redux.png"
                      alt="Redux logo"
                      className={styles.reduxIcon}
                    />
                  </div>
                </div>
                <div className={styles.backEndSkills}>
                  <h2>Back-End</h2>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>MongoDB</p>
                    <img
                      src="mongodb.png"
                      alt="MongoDB logo"
                      className={styles.mongoIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>REST API</p>
                    <img
                      src="rest.png"
                      alt="API icon"
                      className={styles.apiIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>Node.JS</p>
                    <img
                      src="node.png"
                      alt="NodeJS logo"
                      className={styles.nodeIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>Mongoose</p>
                    <img
                      src="mongoose.png"
                      alt="Mongoose logo"
                      className={styles.mongooseIcon}
                    />
                  </div>
                  <div className={styles.skill}>
                    <p className={styles.skillsText}>AWS</p>
                    <img
                      src="awsLogo.png"
                      alt="AWS logo"
                      className={styles.awsIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
