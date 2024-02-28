import { Provider } from "react-redux";
import "./App.css";
import ContactsApp from "./components/contacts/contactsApp";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ContactsApp />
      </Provider>
    </>
  );
}

export default App;
