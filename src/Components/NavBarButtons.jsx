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
        <button
          className={home ? "navbarHomeSelected" : "navbarButton"}
          onClick={handleHomeClick}
        >
          Home
        </button>
        <button
          className={about ? "navbarAboutSelected" : "navbarButton"}
          onClick={handleAboutClick}
        >
          About
        </button>

        <button
          className={work ? "navbarWorkSelected" : "navbarButton"}
          onClick={handleWorkClick}
        >
          Work
        </button>

        <button
          className={contact ? "navbarContactSelected" : "navbarButton"}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default NavBarButtons;
