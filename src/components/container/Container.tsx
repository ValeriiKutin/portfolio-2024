import { FC, ReactNode } from "react";
import "./container.css";

export interface ChildrenProp {
  children: ReactNode;
}

export const Container: FC<ChildrenProp> = ({ children }) => {
  return <div className="container">{children}</div>;
};
