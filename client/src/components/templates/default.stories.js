import React, {Fragment} from 'react';
import Styles from './index.module.css';


export const ToStorybook = () => <Fragment>
        <div className={Styles.mainHeader}>

        </div>
        <div className={Styles.mainContainer}>

        </div>
        <div className={Styles.graphWrapper}>
            <div className={Styles.graph}></div>
        </div>
    
    </Fragment>;

ToStorybook.story = {
    name: 'Default Layout',
};

  
export default {
    title: 'Default Layout',
};


