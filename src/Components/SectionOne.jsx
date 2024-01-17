function SectionOne() {
  return (
    <div className="landingPageContainer">
      <div className="sectionOneTextContainer">
        <h1 className="sectionOneHeading">Hello World </h1>
        <h1 className="sectionOneSlogan">
          My name is Chris Bond. I am a web developer from the UK
        </h1>
        <p className="sectionOneText">Check out some of my code</p>

        <button className="sectionOneButton" onClick={""} type="button">
          Projects
        </button>
      </div>
      <div className="profilePicContainer">
        <img
          src="portrait.jpeg"
          alt="profile Pic"
          className="profileImagePic"
        />
      </div>
      <div className="sectionOneWhite"></div>
      <div className="sectionOneGrey"></div>
    </div>
  );
}

export default SectionOne;
