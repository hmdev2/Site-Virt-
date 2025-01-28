import React from "react";
import './styles.css';

export const LogoSection = () => {
    return(
        <section id="logo" className="col-12 d-flex align-items-center justify-content-center">
             <span>
                <img 
                    className="img-fluid" 
                    src="../../../images/logo/virtu_logo5.png" 
                    alt="Logo Virtú" 
                />
            </span>
        </section>
    );
};