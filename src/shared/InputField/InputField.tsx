import { Form, Input } from "antd";

const InputField: React.FC<{
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  required?: boolean;
}> = ({
  name,
  label = "",
  placeholder = "",
  type = "text",
  value,
  required = false,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: required ? true : false }]}
    >
      <Input value={value} placeholder={placeholder} type={type} />
    </Form.Item>
  );
};

export default InputField;
