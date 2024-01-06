function ContactPage() {
  return (
    <div className="contactPageContainer">
      <div className="contactInfoContainer">
        <h2>Contact</h2>

        <p>
          <span className="bold">Phone:</span>{" "}
          <span className="hidden">...</span>07787541167
        </p>
        <p>
          <span className="bold">Email:</span>{" "}
          <span className="hidden">...</span>
          cbond.email@gmail.com
        </p>
        <p>
          <span className="bold">LinkedIn:</span>{" "}
          <span className="hidden">...</span>
          Will add later
        </p>
        <p>
          <span className="bold">GitHub:</span>{" "}
          <span className="hidden">...</span>
          <a href="https://github.com/bondcab" target="_blank" rel="noreferrer">
            github.com/bondcab
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
