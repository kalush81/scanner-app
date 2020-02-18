import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "../styles.module.css";

export class CheckWhatInDB extends Component {

  render() {
    return (
      <div>
        <Link to="all-posts">
          <button className={classes.button}>
            go to see what's in the database
          </button>
        </Link>
      </div>
    );
  }
}

export default CheckWhatInDB;
