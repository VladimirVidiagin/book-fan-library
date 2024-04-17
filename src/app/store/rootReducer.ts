import { combineReducers } from "@reduxjs/toolkit";
import { BooksReducer } from "./books/reducer";

export const rootReducer = combineReducers({
  books: BooksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
