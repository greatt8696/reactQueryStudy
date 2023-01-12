import { createSlice, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: userReducer,
});

export default rootReducer;
