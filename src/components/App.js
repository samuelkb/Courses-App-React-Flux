//This App component will decide which page to render
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

//In Js we can nest functions inside functions

function App() {
  function getPage() {
    //This property is built into all browsers
    const route = window.location.pathname;
    if (route === "/courses") return <CoursesPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}
//We need to wrap on {} for tue correct detection of JSX
export default App;
