import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import { BooksActionTypes } from "../../../app/store/books/actionTypes";

import { AddBookModal } from "../../../widgets/books/AddBookModal/AddBookModal";
import { EditBookModal } from "../../../widgets/books/EditBookModal/EditBookModal";
import { DeleteBookModal } from "../../../widgets/books/DeleteBookModal/DeleteBookModal";

import BooksGenresChart from "../../../widgets/BooksGenresChart/BooksGenresChart";
import { BookTable } from "../../../widgets/books/BookTable/BookTable";
import { SubHeader } from "../../../widgets/SubHeader/SubHeader";

import { useGetBooks } from "../api/useGetBooks";

import Loader from "../../../shared/Loader/Loader";
import AlertMessage from "../../../shared/Alert/Alert";

export const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const [chosenBookId, setChosenBookId] = useState<null | string>(null);
  const [isAddBookModalOpened, setIsAddBookModalOpened] = useState(false);
  const [isEditBookModalOpened, setIsEditBookModalOpened] = useState(false);
  const [isDeleteBookModalOpened, setIsDeleteBookModalOpened] = useState(false);

  const { loading, error, sortedBooks } = useGetBooks();

  useEffect(() => {
    dispatch({
      type: BooksActionTypes.GET_BOOKS,
      payload: sortedBooks,
    });
  }, [dispatch, loading, error, sortedBooks]);

  if (loading) return <Loader />;
  if (error)
    return (
      <AlertMessage
        message="Error"
        description={error.toString()}
        type="error"
        showIcon
      />
    );

  return (
    <main className="main-page-content">
      <BooksGenresChart />
      <SubHeader>
        <h2>Ваши книги</h2>
        <Button type="primary" onClick={() => setIsAddBookModalOpened(true)}>
          Добавить книгу
        </Button>
      </SubHeader>

      <BookTable
        setChosenBookId={setChosenBookId}
        setIsEditBookModalOpened={setIsEditBookModalOpened}
        setIsDeleteBookModalOpened={setIsDeleteBookModalOpened}
      />
      <EditBookModal
        isVisible={isEditBookModalOpened}
        chosenBookId={chosenBookId}
        setChosenBookId={setChosenBookId}
        setIsEditBookModalOpened={setIsEditBookModalOpened}
      />
      <DeleteBookModal
        isVisible={isDeleteBookModalOpened}
        chosenBookId={chosenBookId}
        setIsDeleteBookModalOpened={setIsDeleteBookModalOpened}
      />
      <AddBookModal
        isVisible={isAddBookModalOpened}
        setIsAddBookModalOpened={setIsAddBookModalOpened}
      />
    </main>
  );
};
