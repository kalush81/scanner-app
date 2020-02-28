import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import QrReader from "react-qr-scanner";

export default class GetScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: null
    };
    this.abortController =  new AbortController()
  }
  handleScan = data => {
    this.setState({
      result: JSON.parse(data)
    });
  };
  handleError = err => {
    console.error(err);
  };
  resetResult = () => {
    this.setState({result: null})
  }
  componentWillUnmount() {

    this.abortController.abort()
  }
  render() {
    const previewStyle = {
      margin: "100px auto",
      height: "330px",
      width: "330px",
      objectFit: "cover"
    };

    return (
      <div>
        { !this.state.result && <QrReader
          legacyMode={false}
          facingMode="rear"
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />}
        {this.state.result && (
          <>
            <p>{this.state.result.name}</p>
            <p>{this.state.result.lastName}</p>
            <p>{this.state.result.certificate}</p>
            <button onClick={this.resetResult}>Generate new qr code</button>
          </>
        )}
      </div>
    );
  }
}
