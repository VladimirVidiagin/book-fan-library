import { ReactNode } from "react";

export const SubHeader: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className="subheader">{children}</div>;
};
