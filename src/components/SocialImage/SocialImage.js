import React from 'react';

import fbLogo from '../../assets/images/facebook.png';
import twLogo from '../../assets/images/twitter.png';
import ggLogo from '../../assets/images/google.png';
import classes from './SocialImage.module.css';

const SocialImage = (props) => {
    let image = null;

    switch (props.ImageType) {
        case ('facebook'):
            image = <img src={fbLogo} className={classes.Image} alt="facebook logo" />
            break;
        case ('twitter'):
            image = <img src={twLogo} className={classes.Image} alt="twitter logo" />
            break;
        case ('google'):
            image = <img src={ggLogo} className={classes.Image} alt="google logo" />
            break;
        default:
            //do nothing
            break;
    }


    return (
        <React.Fragment>
            {image}
        </React.Fragment>
    );
}

export default SocialImage;