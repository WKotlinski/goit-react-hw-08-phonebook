import { useEffect } from "react";

import Filter from "../filter/filter";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/contactsSlice";
import { deleteContacts, getContacts } from "../../redux/operaction";
import Contact from "../list/contact";

const ContactsApp = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const deleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : "";

    return contacts.filter((contact) =>
      contact.name
        ? contact.name.toLowerCase().includes(normalizedFilter)
        : false
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      {filteredContacts.map((con) => (
        <Contact key={con.id} contact={con} handleClick={deleteContact} />
      ))}
    </div>
  );
};

export default ContactsApp;
