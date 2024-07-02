import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Carousel.module.css";

function Carousel({
  setInfoReact,
  setMoreInfoClicked,
  setInfoPokemon,
  setInfoMeet,
  setInfoNotes,
  setInfoAngular,
  setInfoChat,
  setInfoApi,
  carouselPlaying,
  setCarouselPlaying,
}) {
  function handleReactBondButtonClick() {
    console.log("More info react clicked");
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoReact(true);
  }

  function handlePokemonButtonClick() {
    console.log("More info pokemon clicked");
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoPokemon(true);
  }

  function handleMeetButtonClick() {
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoMeet(true);
  }

  function handleNotesButtonClick() {
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoNotes(true);
  }

  function handleAngularButtonClick() {
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoAngular(true);
  }

  function handleChatButtonClick() {
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoChat(true);
  }

  function handleApiButtonClick() {
    setCarouselPlaying(false);
    setMoreInfoClicked(true);
    setInfoApi(true);
  }

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={55}
      totalSlides={7}
      className={styles.carousel}
      isPlaying={carouselPlaying}
      interval={5000}
    >
      <Slider id="#sectionThree">
        <Slide index={0}>
          <div className={styles.bondFlixImageOverlay}>
            <a
              href="https://mybond-flix.netlify.app/login"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>

            <button
              className={styles.carouselButton}
              onClick={handleReactBondButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
        <Slide index={1}>
          <div className={styles.pokemonImageOverlay}>
            <a
              href="https://bondcab.github.io/Pokemon_App/"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handlePokemonButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
        <Slide index={2}>
          <div className={styles.meetImageOverlay}>
            <a
              href="https://bondcab.github.io/Meet/"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handleMeetButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
        <Slide index={3}>
          <div className={styles.notesImageOverlay}>
            <a
              href="https://cbond-todolist-application.netlify.app"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handleNotesButtonClick}
            >
              More Info
            </button>
          </div>
          <div className={styles.notesImageOverlay}></div>
        </Slide>
        <Slide index={4}>
          <div className={styles.angularImageOverlay}>
            <a
              href="https://bondcab.github.io/myBondFlix-Angular-client/welcome"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handleAngularButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
        <Slide index={5}>
          <div className={styles.chatImageOverlay}>
            <a
              href="https://github.com/bondcab/Chat_Away"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handleChatButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
        <Slide index={6}>
          <div className={styles.apiImageOverlay}>
            <a
              href="https://github.com/bondcab/myBondFlix-API"
              target="_blank"
              rel="noreferrer"
              className={styles.siteLink}
            >
              <div className={styles.bondLink}></div>
            </a>
            <button
              className={styles.carouselButton}
              onClick={handleApiButtonClick}
            >
              More Info
            </button>
          </div>
        </Slide>
      </Slider>
      <div className={styles.dotContainer}>
        <DotGroup />
      </div>
    </CarouselProvider>
  );
}
export default Carousel;
