import React from 'react';

const ButtonB = (props) => {
    return (
        
        <div className="reg_col">
        <fieldset>
            <button id={props.id} disabled={props.disabled} style={{padding:"10px"}} onClick={props.onClick}>{props.text?props.text:props.children}
                </button> 
        </fieldset>
        </div>
        
    );
};

export default ButtonB;