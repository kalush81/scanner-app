import React, { Component } from "react";
import QRCode from "qrcode.react";

export class GenerateQr extends Component {
  constructor(props) {
    super(props);
    this.data = null
  }
  state = {
    name: "",
    lastName: "",
    certificate: "",
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.data = {...this.state};
    this.setState({
      name: '',
      lastName: '',
      certificate: ''
    })
  };
  render() {
    console.log('this.data', this.data)
    return (
      <>
        <form className='form'
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "column", margin: 50 }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Certificate:
            <input
              type="text"
              name="certificate"
              onChange={this.handleChange}
              value={this.state.certificate}
            />
          </label>
          <input
            type="submit"
            value="Generate QR"
            style={{ margin: "auto", maxWidth: 200 }}
          />
        </form>
        {this.data && (
            <>
            <p>Now you can print the QR and test it by using "Scan QR code" button</p>
          <QRCode
            value={JSON.stringify(this.data)}
            renderAs='svg'
          />
          </>
        )}
      </>
    );
  }
}

export default GenerateQr;
