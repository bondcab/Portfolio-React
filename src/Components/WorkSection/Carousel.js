import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Carousel.module.css";
import { useState } from "react";

function Carousel() {
  const [carouselPlaying, setCarouselPlaying] = useState(true);

  function handleReactBondButtonClick() {
    setCarouselPlaying(false);
  }

  function handlePokemonButtonClick() {
    setCarouselPlaying(false);
  }

  function handleMeetButtonClick() {
    setCarouselPlaying(false);
  }

  function handleNotesButtonClick() {
    setCarouselPlaying(false);
  }

  function handleAngularButtonClick() {
    setCarouselPlaying(false);
  }

  function handleChatButtonClick() {
    setCarouselPlaying(false);
  }

  function handleApiButtonClick() {
    setCarouselPlaying(false);
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
      <Slider>
        <Slide index={0}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handleReactBondButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
          </div>
          <a
            href="https://mybond-flix.netlify.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.bondFlixImageOverlay}
              onClick={() => console.log("Clicked")}
            ></div>
          </a>
        </Slide>
        <Slide index={1}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handlePokemonButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
          </div>
          <div className={styles.pokemonImageOverlay}></div>
        </Slide>
        <Slide index={2}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handleMeetButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
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
            <div
              className={styles.carouselButton}
              onClick={handleNotesButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
          </div>
          <div className={styles.notesImageOverlay}></div>
        </Slide>
        <Slide index={4}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handleAngularButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
          </div>
          <div className={styles.angularImageOverlay}></div>
        </Slide>
        <Slide index={5}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handleChatButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
          </div>
          <div className={styles.chatImageOverlay}></div>
        </Slide>
        <Slide index={6}>
          <div className={styles.buttonContainer}>
            <div
              className={styles.carouselButton}
              onClick={handleApiButtonClick}
            ></div>
            <p className={styles.buttonText}>More Info</p>
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
