import { useMutation } from "@apollo/client";
import { UPDATE_BOOK } from "../../apollo/books";
import { Book } from "../../app/store/books/actionTypes";
import { FormValues } from "../../shared/books/formValues.types";

export const useEditBook = () => {
  const [editBook] = useMutation(UPDATE_BOOK);

  const handleEditBook = (
    chosenBookData: Book | undefined,
    values: FormValues
  ) => {
    if (values.name && values.year && values.genre && values.author) {
      editBook({
        variables: {
          id: chosenBookData?.id,
          name: values.name,
          year: values.year,
          genre: values.genre,
          author: values.author,
        },
      });
    }
  };

  return { handleEditBook };
};
