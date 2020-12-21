import React from 'react';
import logo from '../../assets/images/logo.png';
import './header.scss';

const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div className={'header-image-wrapper'}>
                <img alt={'logo'} className="header-image" src={logo} />
            </div>
            <ul className={'nav-menu'}>
                <li className={'nav-element'}><a href={'#home'}>HOME</a></li>
                <li className={'nav-element'}><a href={'#performance'}>WHAT WE DO</a></li>
                <li className={'nav-element'}><a href={'#contact'}>CONTACT US</a></li>
            </ul>
        </div>
    )
};

export default Header;
