import React, { Component } from "react";
import axios from "axios";

export class GetAllPosts extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get("https://myjson-demo.herokuapp.com/certificate-listing")
      .then(data => {
        console.log(data);
        this.setState({ data: data.data });
      })
      .catch(err => console.error(err));
  }
  render() {
    const data = this.state.data;
    return (
      <div>
        {data.map(post => (
          <ul key={post.id}>
            <li>name: {post.name}</li>
            <li>last name: {post.lastName}</li>
            <li>certificate issued: {post.certificate}</li>
            <hr></hr>
          </ul>
        ))}
      </div>
    );
  }
}

export default GetAllPosts;
