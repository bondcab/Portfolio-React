import styles from "./MoreInfoChat.module.css";
import { useState } from "react";

function MoreInfoChat() {
  const [gitHovered, setGitHovered] = useState(false);

  function handleMouseOver1() {
    setGitHovered(true);
  }

  function handleMouseOut1() {
    setGitHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>Chat Away</h2>
      <p className={styles.workText}>
        A chat app for mobile devices built using React Native. The app will
        provide users with a chat interface and options to share images and
        their location
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          CSS, JavaScript, React Native, Expo, Google Firestore Database,
          Firebase Authentication, Gifted Chat Library
        </p>
      </div>
      <div className={styles.linkContainer}>
        {gitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to Chat Away Github repository
            </h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/chat-app"
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

export default MoreInfoChat;
