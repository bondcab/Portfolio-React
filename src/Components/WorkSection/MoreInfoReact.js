import styles from "./MoreInfoReact.module.css";
import { useState } from "react";

function MoreInfoReact() {
  const [reactGitHovered, setReactGitHovered] = useState(false);
  const [reactSiteHovered, setReactSiteHovered] = useState(false);
  const [bondCaseStudyHovered, setBondCasyStudyHovered] = useState(false);

  function handleMouseOver4() {
    setReactGitHovered(true);
  }

  function handleMouseOut4() {
    setReactGitHovered(false);
  }

  function handleMouseOver5() {
    setReactSiteHovered(true);
  }

  function handleMouseOut5() {
    setReactSiteHovered(false);
  }

  function handleMouseOver11() {
    setBondCasyStudyHovered(true);
  }

  function handleMouseOut11() {
    setBondCasyStudyHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>myBond Flix App (React)</h2>
      <p className={styles.workText}>
        In this project, I crafted the frontend of the James Bond Movies App
        with ReactJS. Collaborating seamlessly with the Rest API project, I
        successfully delivered a comprehensive full-stack application utilizing
        the MERN stack
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          CSS, JavaScript, React
        </p>
      </div>
      <div className={styles.linkContainer}>
        {reactGitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to myBond Flix React app Github repository
            </h4>
          </div>
        ) : null}
        {reactSiteHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to myBond Flix React app live site
            </h4>
          </div>
        ) : null}
        {bondCaseStudyHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>Link to myBond Flix case study</h4>
          </div>
        ) : null}
        <a
          href="https://github.com/bondcab/myBondFlix-client"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonGithub}
            alt="github"
            src="github.svg"
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}
          />
        </a>
        <a
          href="https://mybond-flix.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonLive}
            alt="pokedex-site-link"
            src="web.png"
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}
          />
        </a>
        <a
          href="https://mybondflix-casestudy.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.caseStudy}
            alt="myBondFlix case study"
            src="document.png"
            onMouseOver={handleMouseOver11}
            onMouseOut={handleMouseOut11}
          />
        </a>
      </div>
    </div>
  );
}

export default MoreInfoReact;
