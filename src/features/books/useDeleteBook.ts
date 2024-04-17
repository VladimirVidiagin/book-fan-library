import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../../apollo/books";
import { Book } from "../../app/store/books/actionTypes";

export const useDeleteBook = () => {
  const [removeBook] = useMutation(DELETE_BOOK, {
    update(cache, { data: { removeBook } }) {
      cache.modify({
        fields: {
          allBooks(currentBooks = []) {
            return currentBooks.filter(
              (book: Book) => book.__ref !== `Book:${removeBook.id}`
            );
          },
        },
      });
    },
  });

  const deleteChosenBook = (bookId: string | undefined) => {
    removeBook({
      variables: { id: bookId },
    });
  };

  return { deleteChosenBook };
};
