//This App component will decide which page to render
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";

//In Js we can nest functions inside functions
//GetPage deleted, will not be used
//The 'exact' word indicates this route should only match if the URL is exactly
//At this point, each component is reloaded when you choose a menu
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}
//We need to wrap on {} for tue correct detection of JSX
export default App;
