import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Expansion.module.css';

const Expansion = props => {

    return(
        <React.Fragment>
            <ul className={classes.List}
                style= {{
                    opacity: props.show ? '1' : '0',
            }}>
                <li>Account</li>
                <li> <NavLink to='/logout'>Logout</NavLink> </li>
            </ul>
          
        </React.Fragment>
    );
}

export default Expansion;