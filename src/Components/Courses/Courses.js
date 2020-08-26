import React, { useState } from "react";
import courses from "../../FakeData/index";
import course from "./Course/Course";
const Courses = () => {
  const [allCourses, setallCourses] = useState(courses);
  return (
    <div>
      <div>courses will be added here</div>
      <div>{allCourses.length}</div>
      <div></div>
    </div>
  );
};

export default Courses;
