import NavBarButtons from "./NavBarButtons";

function NavBar() {
  return (
    <div className="navBar">
      <img src="logo_white.svg" alt="logo" className="logo" />
      <NavBarButtons />
    </div>
  );
}

export default NavBar;
