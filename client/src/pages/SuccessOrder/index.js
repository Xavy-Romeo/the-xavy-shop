import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Logo from '../../assets/images/xr-logo.png';

const SuccessOrder = () => {
    const classes = useStyles();

    const [countDown, setCountDown] = useState(8);

    setTimeout(() => {
        if (countDown > 0) {
            let count = countDown - 1; 
            setCountDown(count);
        }
    }, 1000);

    setTimeout(() => {
        window.location.assign('/');
    }, 8000);

    return (
        <Box className={classes.pageContainer_SuccessOrder}>
            <Box className={classes.contentBox_SuccessOrder}>
                <img src={Logo} height='200px' width='200px' alt='Logo' />

                <Typography className={classes.successText_SuccessOrder} variant='h3'>
                    🌟 🌟 🌟 SUCCESS! 🌟 🌟 🌟
                </Typography>
                <Typography className={classes.thankYou_SuccessOrder} variant='h4'>
                    Thank you for your purchase!
                </Typography>
                <Typography variant='h5'>
                    You will be redirected to homepage
                </Typography>

                <Box className={classes.countDownContainer_SuccessOrder}>
                    <Typography className={classes.countDown_SuccessOrder} variant='h5'>
                        {countDown}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SuccessOrder;
