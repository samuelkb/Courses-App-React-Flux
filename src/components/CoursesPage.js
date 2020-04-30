import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
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

  renderRow(course) {
    return (
      <tr>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
