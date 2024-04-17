import { useState } from "react";
import { Button, Form, Space } from "antd";
import InputField from "../../../shared/InputField/InputField";
import SelectField from "../../../shared/SelectField/SelectField";
import { ModalWindow } from "../../../shared/ModalWindow/ModalWindow";

import { genreOptions } from "../../../shared/books/genreOptions.types";
import { useAddBook } from "../../../features/books/useAddBook";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const AddBookModal: React.FC<{
  isVisible: boolean;
  setIsAddBookModalOpened: (isOpen: boolean) => void;
}> = ({ isVisible, setIsAddBookModalOpened }) => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const { addNewBook } = useAddBook();

  const onFinish = (values: any) => {
    if (values.name && values.year && values.genre && values.author) {
      addNewBook(values);
      setIsAddBookModalOpened(false);
    }
  };

  const onCancel = () => {
    form.resetFields();
    setIsAddBookModalOpened(false);
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
      modalTitle="Добавить книгу"
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
          label="Назавание"
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
              Добавить
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
