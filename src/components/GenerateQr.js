import React, { PureComponent } from "react";
import QRCode from "qrcode.react";
import Modal from "react-modal";
import axios from 'axios';

const localUrl = "http://localhost:3001/post";
const heroUrl = "https://myjson-demo.herokuapp.com/post"

Modal.setAppElement("#root");

export class GenerateQr extends PureComponent {
  constructor(props) {
    super(props);
    this.data = null;
    this.inputRef = React.createRef();
  }
  state = {
    getModal: false,
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
      certificate: "",
      getModal: true
    });
  };
  focusInput() {
    this.inputRef.current.focus();
  }
  handleCLick = () => {
    this.setState({ getModal: false })
    console.log('data to be send', this.data)
    axios.post(heroUrl, this.data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  render() {
    const { name, lastName, certificate } = this.state;
    let isDisabled = name === "" && lastName === "" && certificate === "";
    return (
      <>
        <Modal isOpen={this.state.getModal}>
          <p>Your data:</p>
          {this.data && (
            <>
              <p>{this.data.name}</p>
              <p>{this.data.lastName}</p>
              <p>{this.data.certificate}</p>
              <button onClick={this.handleCLick}>
                Confirm
              </button>
            </>
          )}
        </Modal>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "50px auto",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <label>
            Name:
            <input
              maxLength="20"
              ref={this.inputRef}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              maxLength="20"
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Certificate:
            <input
              maxLength="20"
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
          <div className="QrCodeResult">
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
          </div>
        )}
      </>
    );
  }
}

export default GenerateQr;
