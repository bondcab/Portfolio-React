import styles from "./MoreInfoPokemon.module.css";
import { useState } from "react";

function MoreInfoPokemon() {
  const [pokemonGitHovered, setPokemonGitHovered] = useState(false);
  const [pokemonSiteHovered, setPokemonSiteHovered] = useState(false);

  function handleMouseOver1() {
    setPokemonGitHovered(true);
  }

  function handleMouseOut1() {
    setPokemonGitHovered(false);
  }

  function handleMouseOver2() {
    setPokemonSiteHovered(true);
  }

  function handleMouseOut2() {
    setPokemonSiteHovered(false);
  }

  return (
    <div className={styles.moreInfo}>
      <h2 className={styles.projectTitles}>Pokedex App</h2>
      <p className={styles.workText}>
        A small web application built with HTML, CSS, and JavaScript that loads
        data from an external API and enables the viewing of data points in
        detail
      </p>
      <div className={styles.center}>
        <p className="technologies">
          <span className={styles.bold}>Technologies Used: </span>
          <br></br>
          HTML, CSS, JavaScript
        </p>
      </div>
      <div className={styles.linkContainer}>
        {pokemonGitHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>
              Link to Pokedex app Github repository
            </h4>
          </div>
        ) : null}
        {pokemonSiteHovered ? (
          <div className={styles.pokemonGitPopup}>
            <h4 className={styles.popupText}>Link to Pokedex app live site</h4>
          </div>
        ) : null}

        <a
          href="https://github.com/bondcab/Pokemon_App"
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
          href="https://bondcab.github.io/Pokemon_App/"
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

export default MoreInfoPokemon;
