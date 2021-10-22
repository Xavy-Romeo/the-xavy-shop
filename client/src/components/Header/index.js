import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Grid,
    Link as MaterialLink
} from '@material-ui/core';

import useStyles from './styles';
import Logo from '../../assets/images/xr-logo.png';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.Appbar_Header}>
            <Box className={classes.upperHeader_Header}>
                <Typography 
                    className={classes.upperHeaderSpan_Header}
                    color='secondary'
                    component='span' 
                    variant='body2' 
                >
                    FREE GROUND SHIPPING 
                </Typography>
                <Typography color='textPrimary' variant='body2'>
                    ON ORDERS OVER $
                </Typography>
                <Typography 
                    className={classes.upperHeaderNumb_Header}
                    color='textPrimary' 
                    variant='body2' 
                    component='span'
                >
                    49
                </Typography>
            </Box>

            <Toolbar>
                <Grid 
                    container 
                    className={classes.toolbarGrid_Header} 
                    justifyContent='space-between'
                >
                    <Box>
                        <Grid container alignItems='center'>
                            <img 
                                src={Logo} 
                                className={classes.xrLogo_Header}
                                alt='site logo'
                            />
                            <MaterialLink
                                to='/'
                                component={RouterLink}
                                underline='none'
                            >
                                <Typography 
                                    className={classes.title_Header}
                                    variant='h1'
                                    color='secondary' 
                                >
                                    The Xavy Shop
                                </Typography>
                            </MaterialLink>
                        </Grid>
                    </Box>
                    <Grid item xs={5}>
                        <Grid 
                            container
                            className={classes.navContainer_Header}
                            justifyContent='space-between' 
                        >
                            <Grid item color='textSecondary' xs={10}>
                                <Grid 
                                    container
                                    className={classes.navGrid_Header}
                                    justifyContent='space-evenly' 
                                    alignItems='center' 
                                >
                                    <Grid item>
                                        <MaterialLink
                                            to='/shop'
                                            className={classes.fakeClass}
                                            component={RouterLink}
                                            underline='none'
                                            variant='body1'   
                                        >
                                            <Typography className={classes.navItem_Header}>
                                                Shop
                                            </Typography>
                                        </MaterialLink>
                                    </Grid>
                                    <Grid item>
                                        <MaterialLink
                                            to='/login'
                                            className={classes.fakeClass}
                                            component={RouterLink}
                                            underline='none'
                                            variant='body1'   
                                        >
                                            <Typography className={classes.navItem_Header}>
                                                Account
                                            </Typography>
                                        </MaterialLink>
                                    </Grid>
                                    <Grid item>
                                        <MaterialLink
                                            to='/order-history'
                                            className={classes.fakeClass}
                                            component={RouterLink}
                                            underline='none'
                                            variant='body1'   
                                        >
                                            <Typography className={classes.navItem_Header}>
                                                Order History
                                            </Typography>
                                        </MaterialLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;