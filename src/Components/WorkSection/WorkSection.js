import { useState, useRef, useEffect } from "react";
import styles from "./WorkSection.module.css";
import Carousel from "./Carousel";
import MoreInfoReact from "./MoreInfoReact";

function WorkSection({ setAbout, setHome, setContact, setWork }) {
  const [visible, setVisible] = useState(true);
  const domRefWork = useRef();

  const [moreInfoClicked, setMoreInfoClicked] = useState(false);
  const [infoReact, setInfoReact] = useState(false);

  function handleBackgroundClick() {
    console.log("Background clicked");
    setInfoReact(false);
    setMoreInfoClicked(false);
  }

  useEffect(() => {
    const currentRef = domRefWork.current;

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => setVisible(entry.isIntersecting));
    // });

    if (currentRef) {
      // observer.observe(currentRef);
    }

    if (visible) {
      setHome(false);
      setAbout(false);
      setContact(false);
      setWork(true);
    }

    return () => {
      if (currentRef) {
        // observer.unobserve(currentRef);
      }
    };
  }, [domRefWork, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div className={styles.workSectionContainer}>
      {moreInfoClicked ? (
        <div className={styles.container}>
          <MoreInfoReact setInfoReact={setInfoReact} />
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
        <div className={styles.workSlideContainer}>
          <Carousel
            setInfoReact={setInfoReact}
            setMoreInfoClicked={setMoreInfoClicked}
          />
        </div>
      </section>
    </div>
  );
}

export default WorkSection;
