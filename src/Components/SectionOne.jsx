import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./SectionOne.module.css";

function SectionOne({
  setAbout,
  setHome,
  setContact,
  setWork,
  setWorkClicked,
  workClicked,
  homeClicked,
  contactClicked,
  aboutClicked,
  work,
}) {
  const [visible, setVisible] = useState(true);
  const domRefHome = useRef();

  function handleProjectClick() {
    setHome(false);
    setAbout(false);
    setContact(false);
    setWork(true);
    setWorkClicked(true);

    function clickReset() {
      setWorkClicked(false);
    }

    setTimeout(clickReset, 500);
  }

  useEffect(() => {
    const currentRef = domRefHome.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (visible) {
      setHome(true);
      setAbout(false);
      setContact(false);
      setWork(false);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [domRefHome, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div
      className={
        visible
          ? styles.landingPageContainer
          : styles.landingPageContainerReveal
      }
      id="#sectionOne"
    >
      <div className={styles.sectionOneTextContainer}>
        <h1 className={styles.sectionOneHeading} ref={domRefHome}>
          Hello World
        </h1>
        <h2 className={styles.sectionOneSlogan}>
          My name is Chris Bond. I am a web developer from the UK
        </h2>
        <p className={styles.sectionOneText}>Check out some of my code below</p>

        <Link
          to="#sectionThree"
          smooth={true}
          duration={500}
          offset={-100}
          id={
            homeClicked || workClicked || aboutClicked || contactClicked
              ? styles.navbarButtonCopy
              : null
          }
          className={styles.projectsButton}
          onClick={handleProjectClick}
        >
          Projects
        </Link>
      </div>
      <div className={styles.profilePicContainer}>
        <img
          src="portrait.jpeg"
          alt="profile Pic"
          className={styles.profileImagePic}
        />
      </div>
      <div className={styles.sectionOneWhite}></div>
      <div className={styles.sectionOneGrey}></div>
    </div>
  );
}

export default SectionOne;
