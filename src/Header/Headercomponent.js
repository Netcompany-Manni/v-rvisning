import React from 'react';
import '../CSS/HeaderStyling.css';

const defaultHeader = (props) => {
    return(
        <div className="default_header">
            <p>{props.tekst}</p>


        </div>
    )
};

export default defaultHeader;
