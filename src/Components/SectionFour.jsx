import { useState, useRef, useEffect } from "react";

function SectionFour({ setAbout, setHome, setContact, setWork }) {
  const [visible, setVisible] = useState(false);
  const domRefContact = useRef();

  useEffect(() => {
    const currentRef = domRefContact.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (visible) {
      setHome(false);
      setAbout(false);
      setContact(true);
      setWork(false);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [domRefContact, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div
      className={
        visible ? "contactPageContainer" : "contactPageContainerReveal"
      }
      id="#sectionFour"
    >
      <div className="contactInfoContainer">
        <div className="infoContainer">
          <h2 className="contact" ref={domRefContact}>
            Contact
          </h2>

          <p className="contactInfoText">
            <span className="bold">Phone:</span>{" "}
            <span className="hidden">...</span>07787541167
          </p>
          <p className="contactInfoText">
            <span className="bold">Email:</span>{" "}
            <span className="hidden">...</span>
            cbond.email@gmail.com
          </p>
          <p className="contactInfoText">
            <span className="bold">LinkedIn:</span>{" "}
            <span className="hidden">...</span>
            <a href="https://www.linkedin.com/in/cabond/">
              <img
                src="linkedin.svg"
                alt="linkedin-logo"
                className="linkedinLogoContact"
              />
            </a>
          </p>
          <p className="contactInfoText">
            <span className="bold">GitHub:</span>{" "}
            <span className="hidden">...</span>
            <a href="https://github.com/bondcab">
              <img
                src="github.svg"
                alt="github-logo"
                className="githubLogoContact"
              />
            </a>
          </p>
        </div>
      </div>

      <div className="downloadContainer">
        <a href="resume.pdf" download>
          <button className="downloadButton">Download my CV</button>
        </a>
      </div>
      <div className="contactColourContainers">
        <div className="contactWhiteOne"></div>
        <div className="contactWhiteTwo"></div>
        <div className="greyContainer">
          <div className="contactGreyOne"></div>
          <div className="contactGreyTwo"></div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
