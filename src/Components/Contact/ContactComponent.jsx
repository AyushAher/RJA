import "./ContactComponent.css";
import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Component } from "react";
import { ContactUsEmail } from "../../Services/SendEmail";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phoneNumber: "", case: "" };

    this.handleCaseChange = this.handleCaseChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneNumberChange(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  handleCaseChange(event) {
    this.setState({ case: event.target.value });
  }

  sendEmail = (e) => {
    e.preventDefault();
    ContactUsEmail(this.state);
  };

  render = () => {
    return (
      <>
        <Container fluid className="contact">
          <div className="mainBody">
            <h6>Contact Us</h6>
            <div className="underline" />
            <div className="d-flex justify-content-center">
              <Form className="contact-form my-5" onSubmit={this.sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    className="input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    value={this.state.email}
                    type="email"
                    onChange={this.handleEmailChange}
                    className="input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number *</Form.Label>
                  <Form.Control
                    value={this.state.phoneNumber}
                    type="text"
                    onChange={this.handlePhoneNumberChange}
                    className="input"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Describe Your Case *</Form.Label>
                  <Form.Control
                    value={this.state.case}
                    onChange={this.handleCaseChange}
                    as="textarea"
                    className="input"
                  />
                </Form.Group>
                <Button variant="outline-secondary" className="submit" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </>
    );
  };
}

export default ContactComponent;
