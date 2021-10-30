import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Logo from '../../assets/images/xr-logo.png';
import useStyles from './styles';

const Page404 = () => {
    window.scrollTo(0, 0);
    const classes = useStyles();
    
    return (
        <Grid 
            container
            className={classes.pageContainer_Page404} 
            direction='column' 
            justifyContent='center' 
            alignItems='center' 
        >
            <Typography className={classes.error_Page404} variant='h2'>
                Error: 404
            </Typography>
            <img src={Logo} className={classes.logo_Page404} alt='logo' />
            <Typography className={classes.uhOh_Page404} variant='h3'>
                Uh-oh...
            </Typography>
            <Typography className={classes.pageNotFound_Page404} variant='h5'>
                Page Not Found 😔
            </Typography>
            <Button className={classes.btnHome_Page404} style={{}}>
                <Typography>
                    Return to Home
                </Typography>
            </Button>  
        </Grid>
            
    );
};

export default Page404;
