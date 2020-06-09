import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atoms/links';
import Styles from './index.modules.css';

const Pagination = ({currentPageNo = 0, totalPages = 0}) => {
    const previous = Number(currentPageNo) - 1;
    const next =  Number(currentPageNo) + 1;
    return(
        <Fragment>
            {
                (previous > 0) && <ButtonLink to= {`/${previous}`} >Previous </ButtonLink>
            }
            <span className={Styles.orange}>|</span>
            {   
                (next <= totalPages) &&
                <ButtonLink to= {`/${next}`}> Next </ButtonLink>
            }
        </Fragment>);
};

Pagination.propTypes = {
    currentPageNo: PropTypes.number,
    totalPages: PropTypes.number,
}

export default Pagination;