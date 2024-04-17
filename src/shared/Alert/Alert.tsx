import { Alert } from "antd";

interface AlertMessageProps {
  message: string;
  description: string;
  type: "success" | "info" | "warning" | "error";
  showIcon: boolean;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  message,
  description,
  type,
  showIcon = false,
}) => (
  <Alert
    message={message}
    description={description}
    type={type}
    showIcon={showIcon ? true : false}
  />
);

export default AlertMessage;
