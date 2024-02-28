import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactsApp from "./components/contacts/contactsApp";
import store from "./redux/store";
import ContactForm from "./components/form/contactForm";
import { selectContacts } from "./redux/selectors";
import { addContacts } from "./redux/operaction";

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const addContact = ({ name, phone }) => {
    const newContact = {
      name,
      phone,
    };

    const isContactExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
    } else {
      console.log(newContact);
      dispatch(addContacts(newContact));
    }
  };

  return (
    <>
      <Provider store={store}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <ContactsApp />
      </Provider>
    </>
  );
}

export default App;
