import { Form, Select } from "antd";

const { Option } = Select;

interface selectOption {
  label: string;
  value: string;
}

const SelectField: React.FC<{
  name: string;
  label?: string;
  placeholder?: string;
  options: selectOption[];
  value?: any;
  required: boolean;
}> = ({
  name,
  label = "",
  placeholder = "",
  options,
  value,
  required = false,
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: required ? true : false }]}
    >
      <Select placeholder={placeholder} value={value} allowClear>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectField;
