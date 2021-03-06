import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  contactId = shortid.generate();

  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleSubmit = (event) => {
    const { name, number } = this.state;

    event.preventDefault();

    this.props.onSubmit({ id: this.contactId, name, number });

    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleInput}
            id={this.numberInputId}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
