import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import { ModalWindow } from "../../../shared/ModalWindow/ModalWindow";
import { Button, Space, Flex, Typography } from "antd";
import { useDeleteBook } from "../../../features/books/useDeleteBook";
const { Text } = Typography;

export const DeleteBookModal: React.FC<{
  isVisible: boolean;
  setIsDeleteBookModalOpened: (isOpen: boolean) => void;
  chosenBookId: string | null;
}> = ({ isVisible, setIsDeleteBookModalOpened, chosenBookId }) => {
  const { books } = useTypedSelector((state) => state.books);

  const chosenBookData = books?.find((book) => book.id === chosenBookId);

  const { deleteChosenBook } = useDeleteBook();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    deleteChosenBook(chosenBookData?.id);
    setIsDeleteBookModalOpened(false);
  };

  const handleCancel = () => {
    setIsDeleteBookModalOpened(false);
  };

  return (
    <ModalWindow
      isVisible={isVisible}
      modalTitle="Удаление книги"
      handleCancel={handleCancel}
    >
      <Flex justify="space-between" gap={10}>
        <Text>Удалить выбранную книгу?</Text>
        <Space>
          <Button type="primary" onClick={handleSubmit}>
            Удалить
          </Button>
          <Button onClick={handleCancel}>Отменить</Button>
        </Space>
      </Flex>
    </ModalWindow>
  );
};
