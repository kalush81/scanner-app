import React, { Component } from "react";
import axios from "axios";

const heroURL = "https://myjson-demo.herokuapp.com";
const localURL = "http://localhost:3001";

export class GetAllPosts extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(`${localURL}/certificate-listing`)
      .then(data => {
        console.log(data);
        setTimeout(()=>{this.setState({ data: data.data })},1000)
        
      })
      .catch(err => console.error(err));
  }
  render() {
    const data = this.state.data;
    return (
      <div>
        {data.length > 0 ? data.map(post => (
          <ul key={post.id}>
            <li>name: &nbsp;&nbsp; {post.name}</li>
            <li>last name: &nbsp;&nbsp; {post.lastName}</li>
            <li>certificate issued: &nbsp;&nbsp; {post.certificate}</li>
            <hr></hr>
          </ul>
        )) : <div>
            <div className='loader'></div>
            <p>...data is being loaded from the server</p>
            </div>}
      </div>
    );
  }
}

export default GetAllPosts;
