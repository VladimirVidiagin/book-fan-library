import { useQuery } from "@apollo/client";
import { ALL_BOOKS } from "../../../apollo/books";
import { Book } from "../../../app/store/books/actionTypes";

export const useGetBooks = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  if (loading) return { loading: true, error: null, sortedBooks: [] };
  if (error) return { loading: false, error, sortedBooks: [] };

  let sortedBooks: Book[] = [];

  if (data.books) {
    sortedBooks = [...data.books];

    sortedBooks.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return { loading: false, error: null, sortedBooks };
};
