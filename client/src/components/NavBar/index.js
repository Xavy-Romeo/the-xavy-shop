import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
    Grid,
    Box,
    Typography,
    Link as MaterialLink
} from '@material-ui/core';

import useStyles from './styles';
import { QUERY_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';

const NavBar = () => {
    const classes = useStyles();
    
    const { data: userData } = useQuery(QUERY_USER);
    let user;

    if (userData) {
        user = userData.user
    }

    return (
        <Grid 
            container
            className={classes.navContainer_NavBar}
            justifyContent='space-between' 
        >
            <Grid item color='textSecondary' xs={10}>
                <Grid 
                    container
                    className={classes.navGrid_NavBar}
                    justifyContent='space-evenly' 
                    alignItems='center' 
                >
                    <Grid item>
                        <MaterialLink
                            to='/shop'
                            component={RouterLink}
                            underline='none'
                            variant='body1'   
                        >
                            <Box className={classes.navItemContainer_NavBar}>
                                <LocalMallOutlinedIcon className={classes.navIcon_NavBar} fontSize='large' />
                                <Typography className={classes.navItemName_NavBar} variant='body2'>
                                    Shop
                                </Typography>
                            </Box>
                        </MaterialLink>
                    </Grid>
                    <Grid item>
                        {!Auth.loggedIn() 
                            ?                        
                                <MaterialLink
                                    to='/login'
                                    component={RouterLink}
                                    underline='none'
                                    variant='body1'   
                                >
                                    <Box className={classes.navItemContainer_NavBar}>
                                        <PersonOutlineOutlinedIcon className={classes.navIcon_NavBar} fontSize='large' />
                                        <Box className={classes.navAccountContainer_NavBar}>
                                            <Typography variant='caption'>
                                                Sign In
                                            </Typography>
                                            <Typography className={classes.navItemName_NavBar} variant='body2'>
                                                Account
                                            </Typography>
                                        </Box>
                                    </Box>
                                </MaterialLink>
                            :
                                <MaterialLink
                                    to='/account'
                                    component={RouterLink}
                                    underline='none'
                                    variant='body1'   
                                >
                                    <Box className={classes.navItemContainer_NavBar}>
                                        <PersonOutlineOutlinedIcon className={classes.navIcon_NavBar} fontSize='large' />
                                        <Box className={classes.navAccountContainer_NavBar}>
                                            {!userData
                                                ?
                                                    <Typography variant='caption'>
                                                        Hi, ...
                                                    </Typography>
                                                :
                                                    <Typography variant='caption'>
                                                        Hi, {user.firstName}
                                                    </Typography>
                                            }
                                            <Typography className={classes.navItemName_NavBar} variant='body2'>
                                                Account
                                            </Typography>
                                        </Box>
                                    </Box>
                                </MaterialLink>
                        }
                    </Grid>

                    {Auth.loggedIn() &&
                        <Grid item>
                            <MaterialLink
                                to='/order-history'
                                component={RouterLink}
                                underline='none'
                                variant='body1'   
                            >
                                <Box className={classes.navItemContainer_NavBar}>
                                    <ReceiptIcon className={classes.navIcon_NavBar} fontSize='large' />
                                    <Typography className={classes.navItemName_NavBar} variant='body2'>
                                        Order History
                                    </Typography>
                                </Box>
                            </MaterialLink>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NavBar;