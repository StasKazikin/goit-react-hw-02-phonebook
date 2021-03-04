import { Component } from "react";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

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
    event.preventDefault();

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        ...[
          {
            name: this.state.name,
            number: this.state.number,
            id: shortid.generate(),
          },
        ],
      ],
    }));

    this.reset();
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              id={this.nameInputId}
            ></input>
          </label>
          <label htmlFor={this.numberInputId}>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleInput}
              id={this.numberInputId}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
