import React from 'react';
import Logo from '../../atoms/logo';

const Header = (headerClassName) => {
    return ( 
        <header className={headerClassName}>
            <a href="#">
                <Logo></Logo>
            </a>
        </header>
    )
};

export default Header;
