import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atoms/links';
import Styles from './index.modules.css';

const Pagination = ({currentPageNo, totalPages}) => {
    const previous = currentPageNo - 1;
    const next =  currentPageNo + 1;
    return(
        <Fragment>
            {
                (previous > 0) && <ButtonLink to= {`/page/${previous}`} >Previous </ButtonLink>
            }
            <span className={Styles.orange}>|</span>
            {   
                (next <= totalPages) &&
                <ButtonLink to= {`/page/${next}`}> Next </ButtonLink>
            }
        </Fragment>);
};

Pagination.propTypes = {
    currentPageNo: PropTypes.number,
    totalPages: PropTypes.number,
}

export default Pagination;