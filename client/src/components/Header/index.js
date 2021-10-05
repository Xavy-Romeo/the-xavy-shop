import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
                    variant='caption' 
                >
                    FREE GROUND SHIPPING 
                </Typography>
                <Typography color='textPrimary' variant='caption'>
                    ON ORDERS OVER $
                </Typography>
                <Typography 
                    className={classes.upperHeaderNumb_Header}
                    color='textPrimary' 
                    variant='caption' 
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
                                alt='cart icon'
                            />
                            <Typography 
                                className={classes.title_Header}
                                variant='h1'
                                color='secondary' 
                            >
                                The Xavy Shop
                            </Typography>
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
                                        <Typography color='rgba(255,255,255,.87)'>
                                            Shop
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color='rgba(255,255,255,.87)'>
                                            Sign In
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography color='rgba(255,255,255,.87)'>
                                            Order History
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box 
                                className={classes.cartIcon_Header}
                                component='span'
                            >
                                <ShoppingCartIcon fontSize='large' />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;