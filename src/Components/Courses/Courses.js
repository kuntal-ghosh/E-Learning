import React, { useState } from "react";
import courses from "../../FakeData/index";
import Course from "./Course/Course";
import styles from "./Courses.module.scss"

const Courses = () => {
  const [allCourses, setallCourses] = useState(courses);
  return (
    <div>
      <div className={styles.Courses}>
        {allCourses.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
