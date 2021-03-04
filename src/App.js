import { Component } from "react";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  nameInputId = shortid.generate();

  handleInput = (event) => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        ...[{ name: this.state.name, id: this.nameInputId }],
      ],
    }));
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input type="text" name="name" onChange={this.handleInput}></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
