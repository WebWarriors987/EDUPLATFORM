import React from 'react';
//import classes from './Toolbar.css';
import Logo from '../../images/logo.png';
import NavItems from "./NavItems";
import Hamburger from './Hamburger';

const Toolbar = (props) => {
    return (
        <header className={"Toolbar_header"}>
            <Hamburger openDrawer={props.show} clicked={props.toggle} />
        
        <Logo height="80%"/>
        <nav className={"DesktopOnly_header"}>
        <NavItems auth={props.isPass} logout={props.logout}/>
        </nav>
        </header>
    );
};

export default Toolbar;