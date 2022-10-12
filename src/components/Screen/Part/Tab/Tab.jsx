/**
 * The stone dam built the house of (Tam) likes.
 * @version 2.
 * @package core/Tab
*/
import React from 'react';

import bg from '../../../UI/assets/footer-bg.jpg';
import '../../../UI/tab.scss';

const Tab = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
}


export default Tab;