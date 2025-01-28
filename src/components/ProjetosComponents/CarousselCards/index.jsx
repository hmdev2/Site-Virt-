import React from "react";

export const CarousselCards = ({ src, alt, dataSrc, dataIndex, classNameCol }) => {
    return(
        <div className={classNameCol}>
            <div className="card">
                <a className="abreVisualizador" data-src={dataSrc} data-index={dataIndex}>
                    <img
                        src={src}
                        className="card-img-top"
                        alt={alt}
                    />
                </a>
            </div>
        </div>
    );
};
