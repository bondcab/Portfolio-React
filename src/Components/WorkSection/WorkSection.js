import { useState, useRef, useEffect } from "react";
import styles from "./WorkSection.module.css";
import Carousel from "./Carousel";
import MoreInfoReact from "./MoreInfoReact";
import MoreInfoPokemon from "./MoreInfoPokemon";
import MoreInfoMeet from "./MoreInfoMeet";
import MoreInfoNotes from "./MoreInfoNotes";
import MoreInfoAngular from "./MoreInfoAngular";
import MoreInfoChat from "./MoreInfoChat";
import MoreInfoApi from "./MoreInfoApi";

function WorkSection({ setAbout, setHome, setContact, setWork }) {
  const [visible, setVisible] = useState(false);
  const domRefWork = useRef();

  const [moreInfoClicked, setMoreInfoClicked] = useState(false);
  const [infoReact, setInfoReact] = useState(false);
  const [infoPokemon, setInfoPokemon] = useState(false);
  const [infoMeet, setInfoMeet] = useState(false);
  const [infoNotes, setInfoNotes] = useState(false);
  const [infoAngular, setInfoAngular] = useState(false);
  const [infoChat, setInfoChat] = useState(false);
  const [infoApi, setInfoApi] = useState(false);
  const [carouselPlaying, setCarouselPlaying] = useState(true);

  function handleBackgroundClick() {
    setInfoReact(false);
    setInfoPokemon(false);
    setInfoMeet(false);
    setInfoNotes(false);
    setInfoAngular(false);
    setInfoChat(false);
    setInfoApi(false);
    setMoreInfoClicked(false);
    setCarouselPlaying(true);
  }

  useEffect(() => {
    const currentRef = domRefWork.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (visible) {
      setHome(false);
      setAbout(false);
      setContact(false);
      setWork(true);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [domRefWork, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div className={styles.workSectionContainer}>
      {infoReact ? (
        <div className={styles.container}>
          <MoreInfoReact />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoPokemon ? (
        <div className={styles.container}>
          <MoreInfoPokemon />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoMeet ? (
        <div className={styles.container}>
          <MoreInfoMeet />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoNotes ? (
        <div className={styles.container}>
          <MoreInfoNotes />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoAngular ? (
        <div className={styles.container}>
          <MoreInfoAngular />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoChat ? (
        <div className={styles.container}>
          <MoreInfoChat />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}
      {infoApi ? (
        <div className={styles.container}>
          <MoreInfoApi />
          {moreInfoClicked ? (
            <div
              className={styles.background}
              onClick={handleBackgroundClick}
            ></div>
          ) : null}
        </div>
      ) : null}

      <section
        className={visible ? styles.workSection : styles.workSectionReveal}
      >
        <div className={styles.workHeadingContainer}>
          <h1 className={styles.workHeading} id="#workSection">
            Work
          </h1>
        </div>
        <div className={styles.workSlideContainer} ref={domRefWork}>
          <Carousel
            setInfoReact={setInfoReact}
            setMoreInfoClicked={setMoreInfoClicked}
            setInfoPokemon={setInfoPokemon}
            setInfoMeet={setInfoMeet}
            setInfoNotes={setInfoNotes}
            setInfoAngular={setInfoAngular}
            setInfoChat={setInfoChat}
            setInfoApi={setInfoApi}
            carouselPlaying={carouselPlaying}
            setCarouselPlaying={setCarouselPlaying}
          />
        </div>
      </section>
    </div>
  );
}

export default WorkSection;
