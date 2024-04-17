import { BooksState, BooksActions, BooksActionTypes } from "./actionTypes";

const initialState: BooksState = {
  books: [],
};

export const BooksReducer = (
  state = initialState,
  action: BooksActions
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.GET_BOOKS:
      return { books: action.payload };
    case BooksActionTypes.ADD_BOOK:
      return { books: [action.payload, ...state.books] };
    default:
      return state;
  }
};
