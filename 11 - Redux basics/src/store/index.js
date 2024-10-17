import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//global approach(for lots of reducers)
const store = configureStore({
  reducer: {
    // map of different reducers
    // configureStore will merge all those reducers into one big reducer
    counter: counterReducer,
    auth: authReducer,
  },
});

//connect the react-app to the redux-store
export default store;
