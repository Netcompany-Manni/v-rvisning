import React from 'react';
import '../CSS/SingleNavComponentStyling.css';

const singleNavComponent = (props) => {

return(
<div className="singleNavComponent">
<p>{props.tekst}</p>
</div>
)

}

export default singleNavComponent;