import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { userReducer } from "./userSlice";

const store = configureStore({
  reducer: { contacts: contactsReducer, user: userReducer },
});
export default store;
