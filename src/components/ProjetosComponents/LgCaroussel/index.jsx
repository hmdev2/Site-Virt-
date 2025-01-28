import React from "react";
import './styles.css';

export const LgCaroussel = ({ CarousselClass, children }) => {
    return(
    <div className={CarousselClass}>
        <div className="row">
            {children}
        </div>
      </div>
    );
};