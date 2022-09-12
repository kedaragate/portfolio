import React from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Projects from "./components/Projects/Projects";
import { useEffect } from "react";

import "./App.css";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Resume />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
