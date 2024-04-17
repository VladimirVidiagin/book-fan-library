export interface Book {
  __ref: string;
  id: string;
  name: string;
  year: string;
  genre: string;
  author: string;
  createdAt: string;
}

export interface BooksState {
  books: Book[];
}

export enum BooksActionTypes {
  GET_BOOKS = "GET_BOOKS",
  ADD_BOOK = "ADD_BOOK",
}

interface GetBooksAction {
  type: BooksActionTypes.GET_BOOKS;
  payload: Book[];
}

interface AddBookAction {
  type: BooksActionTypes.ADD_BOOK;
  payload: Book;
}

export type BooksActions = GetBooksAction | AddBookAction;
