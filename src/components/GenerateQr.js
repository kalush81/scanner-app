import React, { Component } from "react";
import QRCode from "qrcode.react";

export class GenerateQr extends Component {
  constructor(props) {
    super(props);
    this.data = null;
  }
  state = {
    name: "",
    lastName: "",
    certificate: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.data = { ...this.state };
    this.setState({
      name: "",
      lastName: "",
      certificate: ""
    });
  };
  render() {
    const { name, lastName, certificate } = this.state;
    let isDisabled = name === "" && lastName === "" && certificate === "";
    return (
      <>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: '50px auto',
            paddingLeft: '10%',
            paddingRight: '10%'
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Certificate:
            <input
              type="text"
              name="certificate"
              onChange={this.handleChange}
              value={certificate}
            />
          </label>
          <input
            id="testId"
            type="submit"
            value="Generate QR"
            disabled={isDisabled}
          />
        </form>
        {this.data && (
          <>
            <p>
              Now you can print the QR and test it by using "Scan QR code"
              button
            </p>
            <QRCode
              includeMargin={true}
              size={265}
              value={JSON.stringify(this.data)}
              renderAs="svg"
            />
          </>
        )}
      </>
    );
  }
}

export default GenerateQr;
