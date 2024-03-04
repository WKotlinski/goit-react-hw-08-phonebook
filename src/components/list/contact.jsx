import PropTypes from "prop-types";
const Contact = ({ contact, handleClick }) => {
  return (
    <li key={contact.id}>
      Name:{contact.name} <br />
      Number: {contact.number} <br />
      <button onClick={() => handleClick(contact.id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Contact;
