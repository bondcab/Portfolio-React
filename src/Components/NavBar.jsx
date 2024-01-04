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
      />
    </div>
  );
}

export default NavBar;
