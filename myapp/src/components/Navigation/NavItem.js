import React from 'react';
//import classes from './NavItem.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className={"NavItem_header"}>
            <NavLink exact={props.exact} activeClassName={"NavItem_active"} to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavItem;