import "./App.css";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import WorkPage from "./Components/WorkPage";
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";
import ContactPage from "./Components/ContactPage";
import { useState } from "react";
import SectionOne from "./Components/SectionOne";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [work, setWork] = useState(false);

  return (
    <div className="App">
      <NavBar
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
        home={home}
        about={about}
        contact={contact}
        work={work}
      />
      {home ? <SectionOne /> : null}
      {home ? (
        <HomePage
          setHome={setHome}
          setAbout={setAbout}
          setContact={setContact}
          setWork={setWork}
        />
      ) : null}
      {about ? <AboutPage /> : null}
      {work ? <WorkPage /> : null}
      {contact ? <ContactPage /> : null}

      <Socials />
    </div>
  );
}

export default App;
