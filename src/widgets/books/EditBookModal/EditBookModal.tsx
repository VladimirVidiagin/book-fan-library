import { useState, useEffect } from "react";
import { ModalWindow } from "../../../shared/ModalWindow/ModalWindow";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import { genreOptions } from "../../../shared/books/genreOptions.types";
import SelectField from "../../../shared/SelectField/SelectField";
import { Button, Form, Space } from "antd";
import InputField from "../../../shared/InputField/InputField";
import { useEditBook } from "../../../features/books/useEditBook";
import { FormValues } from "../../../shared/books/formValues.types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const EditBookModal: React.FC<{
  isVisible: boolean;
  chosenBookId: null | string;
  setChosenBookId: (id: null | string) => void;
  setIsEditBookModalOpened: (isOpen: boolean) => void;
}> = ({
  isVisible,
  chosenBookId,
  setChosenBookId,
  setIsEditBookModalOpened,
}) => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const { books } = useTypedSelector((state) => state.books);
  const chosenBookData = books?.find((user) => user.id === chosenBookId);
  const { handleEditBook } = useEditBook();

  useEffect(() => {
    if (chosenBookData) {
      form.setFieldsValue({
        name: chosenBookData.name,
        year: chosenBookData.year,
        genre: chosenBookData.genre,
        author: chosenBookData.author,
      });
    }
  }, [chosenBookData, form]);

  const onFinish = (values: FormValues) => {
    handleEditBook(chosenBookData, values);
    setIsEditBookModalOpened(false);
    setChosenBookId(null);
  };

  const onCancel = () => {
    form.resetFields();
    setIsEditBookModalOpened(false);
    setChosenBookId(null);
  };

  const onValuesChange = () => {
    const fields = form.getFieldsValue();
    setIsFormValid(
      !!fields.name && !!fields.year && !!fields.genre && !!fields.author
    );
  };

  return (
    <ModalWindow
      isVisible={isVisible}
      modalTitle="Редактирование книги"
      handleCancel={onCancel}
    >
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
        style={{ maxWidth: 600 }}
      >
        <InputField
          name="name"
          label="Название"
          placeholder="Введите название книги"
          required
        />
        <InputField
          name="year"
          label="Год выпуска"
          placeholder="Введите год выпуска книги"
          type="number"
          required
        />
        <SelectField
          name="genre"
          label="Жанр"
          placeholder="Выберите жанр"
          options={genreOptions}
          required
        />
        <InputField
          name="author"
          label="Автор"
          placeholder="Введите имя и фамилию автора"
          required
        />
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit" disabled={!isFormValid}>
              Редактировать
            </Button>
            <Button htmlType="button" onClick={onCancel}>
              Отменить
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </ModalWindow>
  );
};
