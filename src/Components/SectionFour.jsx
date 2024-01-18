function SectionFour() {
  return (
    <div className="contactPageContainer" id="#sectionFour">
      <div className="contactInfoContainer">
        <h2 className="contact">Contact</h2>

        <p className="contactInfoText">
          <span className="bold">Phone:</span>{" "}
          <span className="hidden">...</span>07787541167
        </p>
        <p className="contactInfoText">
          <span className="bold">Email:</span>{" "}
          <span className="hidden">...</span>
          cbond.email@gmail.com
        </p>
        <p className="contactInfoText">
          <span className="bold">LinkedIn:</span>{" "}
          <span className="hidden">...</span>
          https://www.linkedin.com/in/cabond/
        </p>
        <p className="contactInfoText">
          <span className="bold">GitHub:</span>{" "}
          <span className="hidden">...</span>
          <a href="https://github.com/bondcab" target="_blank" rel="noreferrer">
            github.com/bondcab
          </a>
        </p>
      </div>
      <div className="downloadContainer">
        <a href="resume.pdf" download>
          <button className="downloadButton">Download my CV</button>
        </a>
      </div>
    </div>
  );
}

export default SectionFour;
