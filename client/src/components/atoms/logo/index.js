import React from 'react';
import Styles from './index.module.css'

const Logo = () => {
    return (<img
                src={process.env.PUBLIC_URL +'/logo.gif'}
                alt='Hacker News Logo'
                className={Styles.img}
            >
            </img>)
}

export default Logo;