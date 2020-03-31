import React from 'react';

const ButtonB = (props) => {
    return (
        
        <div className="reg_col">
        <fieldset>
            <button id={props.id} style={{padding:"10px"}} onClick={props.onClick}>{props.text}
                </button> 
        </fieldset>
        </div>
        
    );
};

export default ButtonB;