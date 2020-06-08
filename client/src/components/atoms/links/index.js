import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './index.module.css'


export const LinkButtonSize= {
    SMALL: 'small',
    MEDIUM: 'medium',   
    LARGE: 'large',
}
export const Theme = {
    orange: 'orange'
}

const LinkButton = ({to, theme, children}) => {
    return (<Link
                to={to}
                className={Styles[Theme[theme]]}
            >
                {children}
            </Link>)
}

LinkButton.defaultProps = {
    to: "#",
    theme: 'orange'
}

LinkButton.propTypes = {
    to: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    theme: PropTypes.string,
    children: PropTypes.any
}

export default LinkButton;