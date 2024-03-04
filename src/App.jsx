import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContactsApp from "./components/contacts/contactsApp";

import "./App.css";
import Navigation from "./components/header/navigation/Navigation";
import HomePage from "./components/header/homepage/homepage";
import RegistrationSection from "./components/logingSection/registerSection";
import LoginSection from "./components/logingSection/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegistrationSection />} />
          <Route path="/loging" element={<LoginSection />} />
          <Route path="contactapp" element={<ContactsApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
