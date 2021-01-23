import React from 'react';

import teamLogo from '../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={teamLogo} alt="Logo Team" />
    </div>
);

export default Logo;