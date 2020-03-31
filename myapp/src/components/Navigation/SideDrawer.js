import React from 'react';


import NavItems from './NavItems';
//import classes from './SideDrawer.css';
import Aux from '../hoc/Aux';
import Backdrop from '../../components/UI/Backdrop';
import Logo from '../../images/logo.png';


const SideDrawer = (props) => {
    let classAttach=["SideDrawer_header","SideDrawer_Close"];
    if(props.open){
        classAttach=["SideDrawer_header","SideDrawer_Open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={classAttach.join(" ")}>
                <div className={"SideDrawer_Logo"}><img src={Logo} alt="EduStream"/></div>
                
                <nav className={"Nav_header"}>
                    <NavItems auth={props.isPass}/>
                </nav>
            </div>
        </Aux>
    );
};

export default SideDrawer;
