//This App component will decide which page to render
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  //This property is built into all browsers
  const route = window.location.pathname;
  if (route === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;
