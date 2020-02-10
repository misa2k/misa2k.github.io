import React from 'react';

import logo from '../../assets/logo/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="logo" id='logo'/>
            <div id='brand'>Shopee Images</div>
        </div>
    );
}

export default Header;