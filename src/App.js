import "./App.css";
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";
import { useState } from "react";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";

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
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* {home ? (
        <HomePage
          setHome={setHome}
          setAbout={setAbout}
          setContact={setContact}
          setWork={setWork}
        />
      ) : null} */}

      <Socials />
    </div>
  );
}

export default App;
