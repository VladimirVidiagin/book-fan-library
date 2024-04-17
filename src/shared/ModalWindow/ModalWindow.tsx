import { Modal } from "antd";
import { ReactNode } from "react";
import { useEffect } from "react";

interface ModalWindowProps {
  isVisible: boolean;
  modalTitle: string;
  children: ReactNode;
  handleCancel: () => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
  isVisible = false,
  modalTitle,
  children,
  handleCancel,
}) => {
  useEffect(() => {
    const handleWheel = (event: { preventDefault: () => void }) => {
      event.preventDefault();
    };

    if (isVisible) {
      document.body.addEventListener("wheel", handleWheel, { passive: true });
    }

    return () => {
      document.body.removeEventListener("wheel", handleWheel);
    };
  }, [isVisible]);

  return (
    <Modal
      title={modalTitle}
      open={isVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div>{children}</div>
    </Modal>
  );
};
