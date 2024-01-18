import { useState } from "react";

function SectionThree() {
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
    <div className="workPageContainer">
      <section className="workSection">
        <div className="workHeadingContainer">
          <h1 className="work-heading" id="#sectionThree">
            Work
          </h1>
        </div>

        <div className="grid">
          <div className="grid__item">
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
              <img src="pokedex.png" alt="pokedex" className="pokedexImage" />
            </div>
            <div className="linkContainer">
              {pokemonGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to Pokedex app Github repository</h4>
                </div>
              ) : null}
              {pokemonSiteHovered ? (
                <div className="pokemonSitePopup">
                  <h4>Link to Pokedex app live site</h4>
                </div>
              ) : null}

              <a
                href="https://github.com/bondcab/simple-js-app"
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
                href="https://bondcab.github.io/simple-js-app/"
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
          <div className="grid__item" href="">
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

              <img src="API.png" alt="api" className="apiImage" />
            </div>
            <div className="linkContainer">
              {apiGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to API Github repository</h4>
                </div>
              ) : null}
              {apiDocHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to API documentation</h4>
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
          <div
            className="grid__item"
            href="https://mybond-flix.netlify.app/"
            target="_blank"
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
              <img
                src="bondFlixReact.png"
                alt="bondFlix-react"
                className="reactImage"
              />
            </div>
            <div className="linkContainer">
              {reactGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to myBond Flix React app Github repository</h4>
                </div>
              ) : null}
              {reactSiteHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to myBond Flix React app live site</h4>
                </div>
              ) : null}
              {bondCaseStudyHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to myBond Flix case study</h4>
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
            href="https://bondcab.github.io/Meet/"
            target="_blank"
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

              <img src="meet.png" alt="bondFlix-react" className="reactImage" />
            </div>
            <div className="linkContainer">
              {meetGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to Meet app Github repository</h4>
                </div>
              ) : null}
              {meetSiteHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to Meet app live site</h4>
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
          <div className="grid__item">
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
              <img
                src="chat_background.png"
                alt="meet-01"
                className="chatImage01"
              />
            </div>
            <div className="linkContainer">
              {chatGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to Chat Away app Github repository</h4>
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
          <div className="grid__item">
            <h2 className="project-titles">myBond Flix App (Angular)</h2>
            <p className="workText">
              In this project I undertook the redesign of myBond Flixs front-end
              using Angular, infusing a modern touch to elevate user
              interactions.
            </p>

            <div className="angularImageContainer">
              <p className="technologies">
                <span className="bold">Technologies Used: </span>
                <br></br>
                HTML, CSS, JavaScript, TypeScript, Angular
              </p>

              <img
                src="bondFlixAngular.png"
                alt="bondFlix-angular"
                className="angularImage"
              />
            </div>
            <div className="linkContainer">
              {angularGitHovered ? (
                <div className="pokemonGitPopup">
                  <h4>Link to myBond Flix Angular app Github repository</h4>
                </div>
              ) : null}
              {angularSiteHovered ? (
                <div className="pokemonSitePopup">
                  <h4>Link to myBond Flix Angular app live site</h4>
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
        </div>
      </section>
    </div>
  );
}

export default SectionThree;
