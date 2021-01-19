import React from 'react';
//Style
import './mobileMenu.scss';

const MobileMenu = (props) => {
    const { menuItems } = props;

    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={'menu'}>
                {
                    menuItems.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;