//This App component will decide which page to render
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPageViews from "./CoursesPageViews";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

//In Js we can nest functions inside functions
//GetPage deleted, will not be used
//The 'exact' word indicates this route should only match if the URL is exactly
//Switch will be work to match one by one the route, that's why not found is at the end
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPageViews} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
//We will use the Redirect component to redirect conditionally later
export default App;
