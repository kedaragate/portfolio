import React from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Projects from "./components/Projects/Projects";

import "./App.css";
import Resume from "./components/Resume/Resume";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Sidebar />
      {/* <Resume /> */}
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
