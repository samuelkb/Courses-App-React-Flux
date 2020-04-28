import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    Courses: [],
  };

  componentDidMount() {
    /*
      getCourses uses Fetch and that is a promise for async.
      The function I declare in .then will be called when the API call is completed.
      We specify an object inside setState and set the courses property to the courses
      that we just received.
      setState calls only update the properties you specify
       */
    /* 
      getCourses().then(function(courses) {
          this.setState({courses: courses});
      })
      */
    getCourses().then((courses) => this.setState({ courses: courses }));
    //get courses from the API. When the call completes, store the array of courses in state.
  }

  render() {
    return <h2>Courses</h2>;
  }
}

export default CoursesPage;
