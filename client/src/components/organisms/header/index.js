import React from 'react';
import Logo from '../../atoms/logo';
import Styles from './index.module.css';

const Header = (headerClassName) => {
    return ( 
        <header className={headerClassName}>
            <button className={Styles.linkButton} >
                <Logo></Logo>
            </button>
        </header>
    )
};

export default Header;
