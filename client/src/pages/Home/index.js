import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Box,
    Typography,
    Button,
    Link as MaterialLink
} from '@material-ui/core';

import useStyles from './styles';
import CategoryBar from '../../components/CategoryBar';
import Cart from '../../components/Cart';
import hero from '../../assets/images/hero.jpg';

const Home = () => {
    const classes = useStyles();
    
    return (
        <Box className={classes.homeBox_Home}>
            <Box>
                <img src={hero} className={classes.heroImg_Home} alt='background - man standing on mountain' />
            </Box>
            
            <Box className={classes.heroTextBox_Home}>
                <Typography variant='h2' >
                    SEASON SALE
                </Typography>
                <Typography variant='h4'>
                    Save up to 30% sitewide
                </Typography>
                <Button className={classes.shopHeroBtn_Home} >
                    <MaterialLink 
                        to='/Shop'
                        className={classes.shopNowLink_Home}
                        component={RouterLink}
                        underline='none'
                        variant='body1'
                    >
                        Shop Now
                    </MaterialLink>
                </Button>
            </Box>

            <CategoryBar />

            <Cart />
        </Box>
    );
};

export default Home;