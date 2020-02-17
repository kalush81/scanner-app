import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class CheckWhatInDB extends Component {

  render() {
    return (
      <div>
        <Link to="all-posts">
          <button>
            go to see what's in the database
          </button>
        </Link>
      </div>
    );
  }
}

export default CheckWhatInDB;
