import React, { useState } from 'react';

// import classes from './Account.module.css';
import Button from '../UI/Button/Button';
import Expansion from './Expansion/Expansion';
import Backdrop from '../UI/Backdrop/Backdrop';

const Account = props => {
    const [showOption, setShowOption] = useState(false);

    const showOptionHandler = () => {
        setShowOption(!showOption);
    }

    return(
        <div>
            <Backdrop show={showOption} clicked={showOptionHandler} />
            <Button btnType="WhiteLink" clicked={showOptionHandler}>Account Name</Button>
            <Expansion show={showOption} modalClosed={showOptionHandler} />
        </div>
    );
}

export default Account;