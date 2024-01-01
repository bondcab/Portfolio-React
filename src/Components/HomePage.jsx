function HomePage() {
  return (
    <div className="homePageContainer">
      <div className="introContainer">
        <img src="portrait.jpeg" alt="profile Pic" className="profileImage" />
        <div className="introTextContainer">
          <h2>Hello World</h2>
          <p className="introText">
            My name is Chris Bond. I am a web developer from the UK
          </p>
          <p className="codeLink">Check out some of my code</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
