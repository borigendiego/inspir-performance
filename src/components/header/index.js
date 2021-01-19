import React from 'react';
import logo from '../../assets/images/logo.png';
//Components
import MobileMenu from './mobile-menu';
//Styles
import './header.scss';
//Constants
import { MENU_LINKS } from './constants';

const Header = () => {
    return (
        <nav className={'header-wrapper'}>
            <div className={'header-image-wrapper'}>
                <img alt={'logo'} className="header-image" src={logo} />
            </div>
            <ul className={'nav-menu'} id={'large-screen-menu'}>
                <li className={'nav-element'}><a href={'#home'}>HOME</a></li>
                <li className={'nav-element'}><a href={'#performance'}>WHAT WE DO</a></li>
                <li className={'nav-element'}><a href={'#contact'}>CONTACT US</a></li>
            </ul>
            <MobileMenu menuItems={MENU_LINKS} />
            <script type={'text/javascript'}>
                {
                    window.addEventListener('scroll', function() {
                        let header = document.querySelector('nav');

                        if (header) {
                            header.classList.toggle("sticky", window.scrollY > 0);
                        }
                    })
                }
            </script>
        </nav>
    )
};

export default Header;
