import React from "react";

/**
 * With this we separate logic from our markup.
 * CoursesPageViews it's focused on state concerns, in this case
 * is an "smart" component. it goes out get data and passes it down
 * to the dumb component below.
 * CourseList only defines markup
 */

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
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
  );
}

export default CourseList;
