import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import Navigation from "./components/header/navigation/Navigation";

const ContactsApp = lazy(() => import("./components/contacts/contactsApp"));
const HomePage = lazy(() => import("./components/header/homepage/homepage"));
const RegistrationSection = lazy(() =>
  import("./components/logingSection/registerSection")
);
const LoginSection = lazy(() => import("./components/logingSection/login"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegistrationSection />} />
            <Route path="/loging" element={<LoginSection />} />
            <Route path="contactapp" element={<ContactsApp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
