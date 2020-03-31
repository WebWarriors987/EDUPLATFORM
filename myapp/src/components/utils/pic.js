import React from 'react';

const Pic = (props) => {
    return (
        <div >
             <img className="img-responsive img-rounded" src={props.image} alt={props.text} width="150" height="100"/> 
        </div>
    );
};

export default Pic;