import React from 'react';
import PropTypes from 'prop-types';
import Styles from './index.module.css'

export const Theme = {
    white: 'white'
}

const HeaderLabel = ({theme, children}) => {
    const selectedTheme = Theme[theme] || 'white';
    return (<label
                className={`${Styles[selectedTheme]} ${Styles.label}`}
            >
                {children}
            </label>) 
}

HeaderLabel.defaultProps = {
    theme: 'white'
}

HeaderLabel.propTypes = {
    theme: PropTypes.string,
    children: PropTypes.any
}

export default HeaderLabel;