import React from "react";
import './styles.css';

export const SmCaroussel = ({ carousselClass ,children }) => {
    return(
        <div className={carousselClass}>
            <div className="row">
                    {children}
            </div>
        </div>
    );
};