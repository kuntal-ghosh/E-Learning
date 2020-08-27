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

function App() {
  // let danger = "App_danger";
  const [cart, setCart] = useState([]);
  function handleEnroll(course) {
    // console.log(course);
    const newCart = [...cart, course];
    setCart(newCart);
  }
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
          <Courses handleEnroll={handleEnroll}></Courses>
        </div>
        <div className={cx(styles.App_cart)}>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
