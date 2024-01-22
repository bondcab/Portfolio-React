import NavBarButtons from "./NavBarButtons";

function NavBar({
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
  return (
    <div className="navBar">
      <img src="logo_white.svg" alt="logo" className="logo" />
      <NavBarButtons
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
        home={home}
        about={about}
        contact={contact}
        work={work}
        workClicked={workClicked}
        setWorkClicked={setWorkClicked}
        aboutClicked={aboutClicked}
        setAboutClicked={setAboutClicked}
        homeClicked={homeClicked}
        setHomeClicked={setHomeClicked}
        contactClicked={contactClicked}
        setContactClicked={setContactClicked}
      />
    </div>
  );
}

export default NavBar;
