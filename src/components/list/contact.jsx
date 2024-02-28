import PropTypes from "prop-types";
const Contact = ({ contact, handleClick }) => {
  return (
    <li key={contact.id}>
      ID: {contact.id} <br />
      Name:{contact.name} <br />
      Phone: {contact.phone} <br />
      <button onClick={() => handleClick(contact.id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Contact;
