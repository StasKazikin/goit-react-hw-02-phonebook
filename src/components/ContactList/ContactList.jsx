import { Component } from "react";
import PropTypes from "prop-types";

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
