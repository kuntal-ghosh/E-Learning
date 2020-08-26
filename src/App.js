import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.scss";
import cx from "classnames";
import "./Custom.scss";
import { Button } from "react-bootstrap";
import NavBar from "./Components/Navbar";

function App() {
  let danger = "App_danger";
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="container-fluid">
        <h1 className={cx(styles.App, styles[danger])}>this is container</h1>
        <button className={cx("btn btn-primary d-block m-auto")}>
          bootstrap button
        </button>
        <Button type="btn-danger">jl</Button>
      </div>
    </Fragment>
  );
}

export default App;
