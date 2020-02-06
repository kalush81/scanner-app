import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
export default class GetScan extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan = (data) =>{
    this.setState({
      result: data,
    })
  }
  handleError = (err) => {
    console.error(err)
  }
  render(){
    const previewStyle = {
      margin: 'auto auto',  
      height: 140,
      width: 220,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}