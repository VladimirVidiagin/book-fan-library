import { useMutation } from "@apollo/client";
import { ADD_BOOK, ALL_BOOKS } from "../../apollo/books";
import { Book } from "../../app/store/books/actionTypes";

export const useAddBook = () => {
  const [addBook] = useMutation(ADD_BOOK, {
    update(cache, { data: { newBook } }) {
      const data = cache.readQuery<{ books: Book[] }>({
        query: ALL_BOOKS,
      });
      const books = data?.books || [];
      cache.writeQuery({
        query: ALL_BOOKS,
        data: {
          books: [newBook, ...books],
        },
      });
    },
  });

  const addNewBook = (values: {
    name: string;
    year: string;
    genre: string;
    author: string;
  }) => {
    addBook({
      variables: {
        name: values.name,
        year: values.year,
        genre: values.genre,
        author: values.author,
        createdAt: new Date().toISOString(),
      },
    });
  };

  return { addNewBook };
};
