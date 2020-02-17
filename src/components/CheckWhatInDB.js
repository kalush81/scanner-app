import React, { Component } from 'react';
import axios from 'axios';

export class CheckWhatInDB extends Component {
    componentDidMount() {
        // axios.get('http://localhost:3001/job-listing')
        // .then(data => console.log(data))
        // .catch(err=>console.error(err))
    }
    handleClick = () => {
        
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CheckWhatInDB
