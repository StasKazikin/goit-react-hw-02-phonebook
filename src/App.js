import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    const sameContact = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (sameContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = (event) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== event.target.id),
      };
    });
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
      </div>
    );
  }
}

export default App;
