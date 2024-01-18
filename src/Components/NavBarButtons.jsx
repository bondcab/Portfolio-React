import { Link } from "react-scroll";

function NavBarButtons({
  setHome,
  setAbout,
  setContact,
  setWork,
  home,
  about,
  contact,
  work,
}) {
  function handleHomeClick() {
    setHome(true);
    setAbout(false);
    setContact(false);
    setWork(false);
  }

  function handleAboutClick() {
    setHome(false);
    setAbout(true);
    setContact(false);
    setWork(false);
  }

  function handleContactClick() {
    setHome(false);
    setAbout(false);
    setContact(true);
    setWork(false);
  }

  function handleWorkClick() {
    setHome(false);
    setAbout(false);
    setContact(false);
    setWork(true);
  }

  return (
    <div className="navButtonsContainer">
      <div className="navButtons">
        <Link
          to="#sectionOne"
          smooth={true}
          duration={500}
          className={home ? "navbarHomeSelected" : "navbarButton"}
          onClick={handleHomeClick}
        >
          Home
        </Link>
        <Link
          to="#sectionTwo"
          smooth={true}
          duration={500}
          className={about ? "navbarAboutSelected" : "navbarButton"}
          onClick={handleAboutClick}
        >
          About
        </Link>
        <Link
          to="#sectionThree"
          smooth={true}
          duration={500}
          offset={-100}
          className={work ? "navbarWorkSelected" : "navbarButton"}
          onClick={handleWorkClick}
        >
          Work
        </Link>
        <Link
          to="#sectionFour"
          smooth={true}
          duration={500}
          offset={-100}
          className={contact ? "navbarContactSelected" : "navbarButton"}
          onClick={handleContactClick}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBarButtons;
