import React, { Component } from "react";
import axios from "axios";

const heroURL = "https://myjson-demo.herokuapp.com";
const localURL = "http://localhost:3001";

export class GetAllPosts extends Component {
  state = {
    data: [],
    message: ""
  };
  componentDidMount() {
    axios
      .get(`${heroURL}/certificate-listing`)
      .then(data => {
        //console.log(data);
        if (data.data.length < 1) {
          //return console.log('nie ma nic')
          this.setState({ message: "database is empty" });
        }
        setTimeout(() => {
          this.setState({ data: data.data });
        }, 100);
      })
      .catch(err => console.error(err));
  }
  handleDelete = id => {
    axios
      .delete(`${localURL}/certificate-listing/${id}`)
      .then(this.updateComponent(id))
      .catch(err => console.log(err));
  };
  updateComponent = (id) => {
    this.setState({
      data: this.state.data.filter(el => el.id !== id )
    }, () => {
      if (this.state.data.length < 1) {
        this.setState({message: 'you have emptied your database'})
      }
    })
    
    
  }
  render() {
    const { data, message } = this.state;
    return (
      <div>
        {data.length > 0 ? (
          data.map(post => (
            <ul key={post.id}>
              <li>name: &nbsp;&nbsp; {post.name}</li>
              <li>last name: &nbsp;&nbsp; {post.lastName}</li>
              <li>certificate issued: &nbsp;&nbsp; {post.certificate}</li>
              <button onClick={() => this.handleDelete(post.id)}>Delete</button>
              <hr></hr>
            </ul>
          ))
        ) : !message ? (
          <div>
            <div className="loader"></div>
            <p>...data is being loaded from the server</p>
          </div>
        ) : (
          message
        )}
      </div>
    );
  }
}

export default GetAllPosts;
