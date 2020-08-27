import React, { useState } from "react";
import Course from "./Course/Course";
import styles from "./Courses.module.scss";

const Courses = (props) => {
  const allCourses = props.allCourses;
  return (
    <div>
      <div className={styles.Courses}>
        {allCourses.map((course) => (
          <Course
            handleEnroll={props.handleEnroll}
            course={course}
            key={course.id}
          ></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
