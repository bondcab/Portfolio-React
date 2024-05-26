import styles from "./MoreInfoMeet.module.css";
import { useState } from "react";

function MoreInfoMeet() {
  const [meetGitHovered, setMeetGitHovered] = useState(false);
  const [meetSiteHovered, setMeetSiteHovered] = useState(false);

  function handleMouseOver6() {
    setMeetGitHovered(true);
  }

  function handleMouseOut6() {
    setMeetGitHovered(false);
  }

  function handleMouseOver7() {
    setMeetSiteHovered(true);
  }

  function handleMouseOut7() {
    setMeetSiteHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>Meetup App</h2>
      <p className={styles.workText}>
        A serverless, progressive web application (PWA) built with React using a
        test-driven development (TDD) technique. The application uses the Google
        Calendar API to fetch upcoming events
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          CSS, JavaScript, React, AWS Lambda, Google Calendar API, OAuth2, Data
          Visualisation (Recharts)
        </p>
      </div>
      <div className={styles.linkContainer}>
        {meetGitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to Meetup app Github repository
            </h4>
          </div>
        ) : null}
        {meetSiteHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>Link to Meetup app live site</h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/Meet"
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
          href="https://bondcab.github.io/Meet/"
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

export default MoreInfoMeet;
