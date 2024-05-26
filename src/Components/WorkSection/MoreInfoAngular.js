import styles from "./MoreInfoAngular.module.css";
import { useState } from "react";

function MoreInfoAngular() {
  const [gitHovered, setGitHovered] = useState(false);
  const [siteHovered, setSiteHovered] = useState(false);

  function handleMouseOver6() {
    setGitHovered(true);
  }

  function handleMouseOut6() {
    setGitHovered(false);
  }

  function handleMouseOver7() {
    setSiteHovered(true);
  }

  function handleMouseOut7() {
    setSiteHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>myBond Flix App (Angular)</h2>
      <p className={styles.workText}>
        In this project I undertook the redesign of myBond Flixs front-end using
        Angular, infusing a modern touch to elevate user interactions
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          HTML, CSS, JavaScript, TypeScript, Angular
        </p>
      </div>
      <div className={styles.linkContainer}>
        {gitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to myBond Flix Angular app Github repository
            </h4>
          </div>
        ) : null}
        {siteHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to myBond Flix Angular app live site
            </h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/myBondFlix-Angular-client"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonGithub}
            alt="github"
            src="github.svg"
            onMouseOver={handleMouseOver6}
            onMouseOut={handleMouseOut6}
          />
        </a>
        <a
          href="https://bondcab.github.io/myBondFlix-Angular-client/welcome"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonLive}
            alt="pokedex-site-link"
            src="web.png"
            onMouseOver={handleMouseOver7}
            onMouseOut={handleMouseOut7}
          />
        </a>
      </div>
    </div>
  );
}

export default MoreInfoAngular;
