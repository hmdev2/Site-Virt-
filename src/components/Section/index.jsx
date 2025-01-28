import React from "react";
import './styles.css';

export const Section = ({ id, children, content, classImg}) => {
    return (
        <section id={id}>
            <div className={classImg}>
                {children}
            </div>
            {content}
        </section>
    );
}