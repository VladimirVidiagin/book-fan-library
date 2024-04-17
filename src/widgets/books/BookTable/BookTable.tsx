import { Table, Space, Button } from "antd";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";

export const BookTable: React.FC<{
  setChosenBookId: (id: string) => void;
  setIsEditBookModalOpened: (isOpen: boolean) => void;
  setIsDeleteBookModalOpened: (isOpen: boolean) => void;
}> = ({
  setChosenBookId,
  setIsEditBookModalOpened,
  setIsDeleteBookModalOpened,
}) => {
  const { books } = useTypedSelector((state) => state.books);
  const columns = [
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Жанр",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Автор",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Год выпуска",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Действия",
      key: "action",
      render: (_: any, record: { id: string }) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                setIsEditBookModalOpened(true);
                setChosenBookId(record.id);
              }}
            >
              Редактировать
            </Button>
            <Button
              onClick={() => {
                setIsDeleteBookModalOpened(true);
                setChosenBookId(record.id);
              }}
            >
              Удалить
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Table
      dataSource={books?.map((book) => ({ ...book, key: book.id }))}
      columns={columns}
    />
  );
};
