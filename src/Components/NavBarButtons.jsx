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
  workClicked,
  setWorkClicked,
  homeClicked,
  setHomeClicked,
  contactClicked,
  setContactClicked,
  aboutClicked,
  setAboutClicked,
}) {
  function handleHomeClick() {
    setHome(true);
    setAbout(false);
    setContact(false);
    setWork(false);
    setHomeClicked(true);
    function clickReset() {
      setHomeClicked(false);
    }

    setTimeout(clickReset, 500);
  }

  function handleAboutClick() {
    setHome(false);
    setAbout(true);
    setContact(false);
    setWork(false);
    setAboutClicked(true);
    function clickReset() {
      setAboutClicked(false);
    }

    setTimeout(clickReset, 500);
  }

  function handleContactClick() {
    setHome(false);
    setAbout(false);
    setContact(true);
    setWork(false);
    setContactClicked(true);

    function clickReset() {
      setContactClicked(false);
    }

    setTimeout(clickReset, 500);
  }

  function handleWorkClick() {
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

  return (
    <div className="navButtonsContainer">
      <div className="navButtons">
        <Link
          to="#sectionOne"
          smooth={true}
          duration={500}
          id={
            homeClicked || workClicked || aboutClicked || contactClicked
              ? "navbarButtonCopy"
              : null
          }
          className={home ? "navbarHomeSelected" : "navbarButton"}
          onClick={handleHomeClick}
        >
          Home
        </Link>
        <Link
          to="#sectionTwo"
          smooth={true}
          duration={500}
          offset={-100}
          id={
            homeClicked || workClicked || aboutClicked || contactClicked
              ? "navbarButtonCopy"
              : null
          }
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
          id={
            homeClicked || workClicked || aboutClicked || contactClicked
              ? "navbarButtonCopy"
              : null
          }
          className={work ? "navbarWorkSelected" : "navbarButton"}
          onClick={handleWorkClick}
        >
          Work
        </Link>
        <Link
          to="#sectionFour"
          smooth={true}
          duration={500}
          id={
            homeClicked || workClicked || aboutClicked || contactClicked
              ? "navbarButtonCopy"
              : null
          }
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
