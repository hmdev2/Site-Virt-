import React from "react";
import './styles.css';

export const TitleSections = ({ text }) => {
    return(
    <div className="container">
      <div className="row">
        <div className="col-12">
          <span className="montserratOpty500">{text}</span>
        </div>
      </div>
    </div>
    );
};