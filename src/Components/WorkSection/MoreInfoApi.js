import styles from "./MoreInfoApi.module.css";
import { useState } from "react";

function MoreInfoApi() {
  const [gitHovered, setGitHovered] = useState(false);

  function handleMouseOver1() {
    setGitHovered(true);
  }

  function handleMouseOut1() {
    setGitHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>Rest API</h2>
      <p className={styles.workText}>
        The server-side component of a James Bond movies web application. The
        web application will provide users with access to information about
        different Bond films, directors, and lead actors. Users will be able to
        sign up, update their personal information, and create a list of their
        favorite movies
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          MongoDB, Express.JS, Node.JS, JavaScript
        </p>
      </div>
      <div className={styles.linkContainer}>
        {gitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to BondFlix API Github repository
            </h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/myBondFlix"
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
      </div>
    </div>
  );
}

export default MoreInfoApi;
