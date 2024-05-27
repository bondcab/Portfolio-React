import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Carousel.module.css";
import { useState } from "react";

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
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handleReactBondButtonClick}
            >
              More Info
            </button>
          </div>
          <a
            href="https://mybond-flix.netlify.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.bondFlixImageOverlay}></div>
          </a>
        </Slide>
        <Slide index={1}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handlePokemonButtonClick}
            >
              More Info
            </button>
          </div>
          <div className={styles.pokemonImageOverlay}></div>
        </Slide>
        <Slide index={2}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handleMeetButtonClick}
            >
              More Info
            </button>
          </div>
          <a
            href="https://github.com/bondcab/myBondFlix-client"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.meetImageOverlay}></div>
          </a>
        </Slide>
        <Slide index={3}>
          <div className={styles.buttonContainer}>
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
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handleAngularButtonClick}
            >
              More Info
            </button>
          </div>
          <div className={styles.angularImageOverlay}></div>
        </Slide>
        <Slide index={5}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handleChatButtonClick}
            >
              More Info
            </button>
          </div>
          <div className={styles.chatImageOverlay}></div>
        </Slide>
        <Slide index={6}>
          <div className={styles.buttonContainer}>
            <button
              className={styles.carouselButton}
              onClick={handleApiButtonClick}
            >
              More Info
            </button>
          </div>
          <div className={styles.apiImageOverlay}></div>
        </Slide>
      </Slider>
      <div className={styles.dotContainer}>
        <DotGroup />
      </div>
    </CarouselProvider>
  );
}
export default Carousel;
