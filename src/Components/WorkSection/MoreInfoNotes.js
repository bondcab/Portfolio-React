import styles from "./MoreInfoNotes.module.css";
import { useState } from "react";

function MoreInfoNotes() {
  const [gitHovered, setGitHovered] = useState(false);
  const [siteHovered, setSiteHovered] = useState(false);

  function handleMouseOver1() {
    setGitHovered(true);
  }

  function handleMouseOut1() {
    setGitHovered(false);
  }

  function handleMouseOver2() {
    setSiteHovered(true);
  }

  function handleMouseOut2() {
    setSiteHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>ToDo List App</h2>
      <p className={styles.workText}>
        A ToDo list app created with React JS. Tried to imitate a sticky note
        style. Persistence enabled with local storage
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          HTML, CSS, JavaScript, React JS
        </p>
      </div>
      <div className={styles.linkContainer}>
        {gitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to ToDo List App Github repository
            </h4>
          </div>
        ) : null}
        {siteHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to ToDo List App live site
            </h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/ToDo-List-React"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonGithub}
            alt="github"
            src="github.svg"
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          />
        </a>
        <a
          href="https://cbond-todolist-application.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.pokemonLive}
            alt="pokedex-site-link"
            src="web.png"
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          />
        </a>
      </div>
    </div>
  );
}

export default MoreInfoNotes;
