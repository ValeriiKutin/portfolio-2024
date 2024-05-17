import { FC } from "react";
import "./index.css";
import { ChildrenProp } from "../container/Container";

export const AboutContainer: FC<ChildrenProp> = ({ children }) => {
  return (
    <div className="box-about">
      <div className="about-container">
        <div className="about-container__topPanel">
          <div className="box-circle">
            <span className="circle red"></span>
            <span className="circle orange"></span>
            <span className="circle green"></span>
          </div>
        </div>
        <div className="about-container__main-text">{children}</div>
      </div>
    </div>
  );
};
