import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursesPageHooks() {
  const [courses, setCourses] = useState([]);
  /**
   * StateHooks returns an array with two valunes.
   * The first value is the name of our state
   *  The second vaule is the name of our setter method
   * Inside of the call to useState we can declare a default value
   * With hooks we need to remove calls like componentDidMount lyfecicle
   * method. For functions components we can do the similar instruction
   * trhough useEffect
   */

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);
  /**
   * useEffect receives a function
   * We need to declare a second argument on useEffect when it runs
   * It will be the dependency array, where we tell useEffect when it
   * should re-run.
   * Without that argument, it will be run every time that our function
   * re-renders.
   * An empty array indicates it will only run this effect one time
   */

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
        <tbody>
          {courses.map((course) => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursesPageHooks;
