import React from 'react';

//import classes from "./Hamburger.css"


const Hamburger = (props) => {
    return (
        <div onClick={props.clicked} className={"Hamburger"}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Hamburger;