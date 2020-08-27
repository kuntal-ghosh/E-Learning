import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";
import cx from "classnames";
import "./Custom.scss";
// import { Button } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import context from "react-bootstrap/esm/AccordionContext";
import courses from "./FakeData/index";

function App() {
  const [allCourses, setallCourses] = useState(courses);
  const [cart, setCart] = useState([]);
  function handleEnroll(newCourse) {
    const newCart = [...cart, newCourse];
    setCart(newCart);
    const newAllCourses = [];
    // newAllCourses.filter((c) => c.id === newCourse.id);
    allCourses.forEach((element) => {
      if (element.id !== newCourse.id) {
        newAllCourses.push(element);
      }
    });
    setallCourses(newAllCourses);
  }
  console.log(`new courses ${allCourses}`);
  return (
    <Fragment>
      <NavBar />
      <div className={cx("container-fluid mt-3", styles.App_container)}>
        {/* <h1 className={cx(styles.App, styles[danger])}>this is container</h1>
        <button className={cx("btn btn-primary d-block m-auto")}>
          bootstrap button
        </button>
        <Button type="btn-danger">jl</Button> */}
        <div className={cx(styles.App_sidenav)}></div>
        <div className={cx(styles.App_courses)}>
          <Courses
            allCourses={allCourses}
            handleEnroll={handleEnroll}
          ></Courses>
        </div>
        <div className={cx(styles.App_cart)}>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
