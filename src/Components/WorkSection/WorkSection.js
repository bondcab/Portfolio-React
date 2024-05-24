import { useState, useRef, useEffect } from "react";
import styles from "./WorkSection.module.css";
import Carousel from "./Carousel";
import MoreInfo from "./MoreInfo";

function SectionThreeRedo({ setAbout, setHome, setContact, setWork }) {
  const [pokemonGitHovered, setPokemonGitHovered] = useState(false);
  const [pokemonSiteHovered, setPokemonSiteHovered] = useState(false);
  const [apiGitHovered, setApiGitHovered] = useState(false);
  const [reactGitHovered, setReactGitHovered] = useState(false);
  const [reactSiteHovered, setReactSiteHovered] = useState(false);
  const [meetGitHovered, setMeetGitHovered] = useState(false);
  const [meetSiteHovered, setMeetSiteHovered] = useState(false);
  const [chatGitHovered, setChatGitHovered] = useState(false);
  const [angularGitHovered, setAngularGitHovered] = useState(false);
  const [angularSiteHovered, setAngularSiteHovered] = useState(false);
  const [apiDocHovered, setApiDocHovered] = useState(false);
  const [bondCaseStudyHovered, setBondCasyStudyHovered] = useState(false);

  const pokemonHover = true;
  const apiHover = true;
  const reactHover = true;
  const meetHover = true;
  const chatHover = true;
  const angularHover = true;

  const [visible, setVisible] = useState(true);
  const domRefWork = useRef();

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

  function handleMouseOver0() {
    setApiDocHovered(true);
  }

  function handleMouseOut0() {
    setApiDocHovered(false);
  }

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

  function handleMouseOver3() {
    setApiGitHovered(true);
  }

  function handleMouseOut3() {
    setApiGitHovered(false);
  }

  function handleMouseOver4() {
    setReactGitHovered(true);
  }

  function handleMouseOut4() {
    setReactGitHovered(false);
  }

  function handleMouseOver5() {
    setReactSiteHovered(true);
  }

  function handleMouseOut5() {
    setReactSiteHovered(false);
  }

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

  function handleMouseOver8() {
    setChatGitHovered(true);
  }

  function handleMouseOut8() {
    setChatGitHovered(false);
  }

  function handleMouseOver9() {
    setAngularGitHovered(true);
  }

  function handleMouseOut9() {
    setAngularGitHovered(false);
  }

  function handleMouseOver10() {
    setAngularSiteHovered(true);
  }

  function handleMouseOut10() {
    setAngularSiteHovered(false);
  }

  function handleMouseOver11() {
    setBondCasyStudyHovered(true);
  }

  function handleMouseOut11() {
    setBondCasyStudyHovered(false);
  }

  return (
    <div className={styles.workSectionContainer}>
      <div className={styles.background}></div>
      <section
        className={visible ? styles.workSection : styles.workSectionReveal}
      >
        {/* <MoreInfo /> */}
        <div className={styles.workHeadingContainer}>
          <h1 className={styles.workHeading} id="#workSection">
            Work
          </h1>
        </div>
        <div className={styles.workSlideContainer}>
          <Carousel />
        </div>
      </section>
    </div>
  );

  return (
    <div className="workPageContainer">
      <div className="blueBackground"></div>
      <section className={visible ? "workSection" : "workSectionReveal"}>
        <div className="workHeadingContainer">
          <h1 className="work-heading" id="#sectionThree">
            Work
          </h1>
        </div>

        <div className="grid" ref={domRefWork}>
          <div
            className="grid__item"
            // onMouseOver={handleOverReact}
            // onMouseOut={handleOffReact}
          >
            <h2 className="project-titles">myBond Flix App (React)</h2>
            <p className="workText">
              In this project, I crafted the frontend of the James Bond Movies
              App with ReactJS. Collaborating seamlessly with the Rest API
              project, I successfully delivered a comprehensive full-stack
              application utilizing the MERN stack
            </p>

            <div className="reactImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                CSS, JavaScript, React
              </p>
              <div
                className={
                  reactHover ? "imageContainerNoBlur" : "imageContainer"
                }
              >
                <div className={reactHover ? null : "imageCover"}></div>
                <a
                  href="https://mybond-flix.netlify.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="bondApp.png"
                    alt="bondFlix-react"
                    className="reactImage"
                  />
                </a>
              </div>
            </div>
            <div className="linkContainer">
              {reactGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to myBond Flix React app Github repository
                  </h4>
                </div>
              ) : null}
              {reactSiteHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to myBond Flix React app live site
                  </h4>
                </div>
              ) : null}
              {bondCaseStudyHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to myBond Flix case study</h4>
                </div>
              ) : null}
              <a
                href="https://github.com/bondcab/myBondFlix-client"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
                  alt="github"
                  src="github.svg"
                  onMouseOver={handleMouseOver4}
                  onMouseOut={handleMouseOut4}
                />
              </a>
              <a
                href="https://mybond-flix.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonLive"
                  alt="pokedex-site-link"
                  src="web.png"
                  onMouseOver={handleMouseOver5}
                  onMouseOut={handleMouseOut5}
                />
              </a>
              <a
                href="https://mybondflix-casestudy.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="caseStudy"
                  alt="myBondFlix case study"
                  src="document.png"
                  onMouseOver={handleMouseOver11}
                  onMouseOut={handleMouseOut11}
                />
              </a>
            </div>
          </div>
          <div
            className="grid__item"
            // onMouseOver={handleOverPokemon}
            // onMouseOut={handleOffPokemon}
          >
            <h2 className="project-titles">Pokedex App</h2>
            <p className="workText">
              A small web application built with HTML, CSS, and JavaScript that
              loads data from an external API and enables the viewing of data
              points in detail
            </p>

            <div className="pokedexImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                HTML, CSS, JavaScript
              </p>
              <div
                className={
                  pokemonHover ? "imageContainerNoBlur" : "imageContainer"
                }
              >
                <div className={pokemonHover ? null : "imageCover"}></div>
                <a
                  href="https://bondcab.github.io/Pokemon_App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="pokedex.png"
                    alt="pokedex"
                    className="pokedexImage"
                  />
                </a>
              </div>
            </div>
            <div className="linkContainer">
              {pokemonGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to Pokedex app Github repository
                  </h4>
                </div>
              ) : null}
              {pokemonSiteHovered ? (
                <div className="pokemonSitePopup">
                  <h4 className="popupText">Link to Pokedex app live site</h4>
                </div>
              ) : null}

              <a
                href="https://github.com/bondcab/Pokemon_App"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
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
                  className="pokemonLive"
                  alt="pokedex-site-link"
                  src="web.png"
                  onMouseOver={handleMouseOver2}
                  onMouseOut={handleMouseOut2}
                />
              </a>
            </div>
          </div>
          <div
            className="grid__item"
            // onMouseOver={handleOverAPI}
            // onMouseOut={handleOffAPI}
          >
            <h2 className="project-titles">ToDo List App</h2>
            <p className="workText">
              A ToDo list app created with React JS. Tried to imitate a sticky
              note style. Persistence enabled with local storage.
            </p>

            <div className="apiImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                HTML, CSS, JavaScript, React JS
              </p>
              <div
                className={apiHover ? "imageContainerNoBlur" : "imageContainer"}
              >
                <div className={apiHover ? null : "imageCover"}></div>
                <a
                  href="https://cbond-todolist-application.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="ToDo.png" alt="api" className="apiImage" />
                </a>
              </div>
            </div>
            <div className="linkContainer">
              {apiGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to API Github repository</h4>
                </div>
              ) : null}
              {apiDocHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to live site</h4>
                </div>
              ) : null}
              <a
                href="https://github.com/bondcab/ToDo-List-React"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
                  alt="github"
                  src="github.svg"
                  onMouseOver={handleMouseOver3}
                  onMouseOut={handleMouseOut3}
                />
              </a>
              <a
                href="https://cbond-todolist-application.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonLive"
                  alt="github"
                  src="web.png"
                  onMouseOver={handleMouseOver0}
                  onMouseOut={handleMouseOut0}
                />
              </a>
            </div>
          </div>

          <div
            className="grid__item"
            // onMouseOver={handleOverMeet}
            // onMouseOut={handleOffMeet}
          >
            <h2 className="project-titles">Meet App</h2>
            <p className="workText">
              A serverless, progressive web application (PWA) built with React
              using a test-driven development (TDD) technique. The application
              uses the Google Calendar API to fetch upcoming events
            </p>

            <div className="meetImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                CSS, JavaScript, React, AWS Lambda, Google Calendar API, OAuth2,
                Data Visualisation (Recharts)
              </p>
              <div
                className={
                  meetHover ? "imageContainerNoBlur" : "imageContainer"
                }
              >
                <div className={meetHover ? null : "imageCover"}></div>
                <a
                  href="https://bondcab.github.io/Meet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="meet.png"
                    alt="bondFlix-react"
                    className="reactImage"
                  />
                </a>
              </div>
            </div>
            <div className="linkContainer">
              {meetGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to Meet app Github repository
                  </h4>
                </div>
              ) : null}
              {meetSiteHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to Meet app live site</h4>
                </div>
              ) : null}
              <a
                href="https://github.com/bondcab/Meet"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
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
                  className="pokemonLive"
                  alt="pokedex-site-link"
                  src="web.png"
                  onMouseOver={handleMouseOver7}
                  onMouseOut={handleMouseOut7}
                />
              </a>
            </div>
          </div>
          <div
            className="grid__item"
            // onMouseOver={handleOverChat}
            // onMouseOut={handleOffChat}
          >
            <h2 className="project-titles">Chat Away</h2>
            <p className="workText">
              A chat app for mobile devices built using React Native. The app
              will provide users with a chat interface and options to share
              images and their location
            </p>

            <div className="chatImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                CSS, JavaScript, React Native, Expo, Google Firestore Database,
                Firebase Authentication, Gifted Chat Library
              </p>
              <div
                className={
                  chatHover ? "imageContainerNoBlur" : "imageContainer"
                }
              >
                <div className={chatHover ? null : "imageCover"}></div>
                <img
                  src="chat_background.png"
                  alt="meet-01"
                  className="chatImage01"
                />
              </div>
            </div>
            <div className="linkContainer">
              {chatGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to Chat Away app Github repository
                  </h4>
                </div>
              ) : null}

              <a
                href="https://github.com/bondcab/chat-app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
                  alt="github"
                  src="github.svg"
                  onMouseOver={handleMouseOver8}
                  onMouseOut={handleMouseOut8}
                />
              </a>
            </div>
          </div>
          <div
            className="grid__item"
            // onMouseOver={handleOverAngular}
            // onMouseOut={handleOffAngular}
          >
            <h2 className="project-titles">myBond Flix App (Angular)</h2>
            <p className="workText">
              In this project I undertook the redesign of myBond Flixs front-end
              using Angular, infusing a modern touch to elevate user
              interactions.
            </p>

            <div className="angularImageContainer">
              <p className="technologies">
                <span className="bold" ref={domRefWork}>
                  Technologies Used:{" "}
                </span>
                <br></br>
                HTML, CSS, JavaScript, TypeScript, Angular
              </p>
              <div
                className={
                  angularHover ? "imageContainerNoBlur" : "imageContainer"
                }
              >
                <div className={angularHover ? null : "imageCover"}></div>
                <a
                  href="https://bondcab.github.io/myBondFlix-Angular-client/welcome"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="bondFlixAngular.png"
                    alt="bondFlix-angular"
                    className="angularImage"
                  />
                </a>
              </div>
            </div>
            <div className="linkContainer">
              {angularGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">
                    Link to myBond Flix Angular app Github repository
                  </h4>
                </div>
              ) : null}
              {angularSiteHovered ? (
                <div className="pokemonSitePopup">
                  <h4 className="popupText">
                    Link to myBond Flix Angular app live site
                  </h4>
                </div>
              ) : null}
              <a
                href="https://github.com/bondcab/myBondFlix-Angular-client"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
                  alt="github"
                  src="github.svg"
                  onMouseOver={handleMouseOver9}
                  onMouseOut={handleMouseOut9}
                />
              </a>
              <a
                href="https://bondcab.github.io/myBondFlix-Angular-client/welcome"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonLive"
                  alt="pokedex-site-link"
                  src="web.png"
                  onMouseOver={handleMouseOver10}
                  onMouseOut={handleMouseOut10}
                />
              </a>
            </div>
          </div>
          <div
            className="grid__item"
            // onMouseOver={handleOverAPI}
            // onMouseOut={handleOffAPI}
          >
            <h2 className="project-titles">Rest API</h2>
            <p className="workText">
              The server-side component of a James Bond movies web application.
              The web application will provide users with access to information
              about different Bond films, directors, and lead actors. Users will
              be able to sign up, update their personal information, and create
              a list of their favorite movies
            </p>

            <div className="apiImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                MongoDB, Express.JS, Node.JS, JavaScript
              </p>
              <div
                className={apiHover ? "imageContainerNoBlur" : "imageContainer"}
              >
                <div className={apiHover ? null : "imageCover"}></div>
                {/* <a
                  href="https://bond-flix-9c1709905a90.herokuapp.com/documentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="API.png" alt="api" className="apiImage" />
                </a> */}
              </div>
            </div>
            <div className="linkContainer">
              {apiGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to API Github repository</h4>
                </div>
              ) : null}
              {apiDocHovered ? (
                <div className="pokemonGitPopup">
                  <h4 className="popupText">Link to API documentation</h4>
                </div>
              ) : null}
              <a
                href="https://github.com/bondcab/myBondFlix"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonGithub"
                  alt="github"
                  src="github.svg"
                  onMouseOver={handleMouseOver3}
                  onMouseOut={handleMouseOut3}
                />
              </a>
              <a
                href="https://bond-flix-9c1709905a90.herokuapp.com/documentation"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="pokemonLive"
                  alt="github"
                  src="web.png"
                  onMouseOver={handleMouseOver0}
                  onMouseOut={handleMouseOut0}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionThreeRedo;
