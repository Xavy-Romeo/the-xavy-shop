import React from 'react';
// import { Link } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link'

import useStyles from './styles';
import CategoryBar from '../../components/CategoryBar';
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
                    <Link 
                        href='/Shop'
                        underline='none'
                        variant='body1'
                        style={{width: '100%', height: '100%', color: 'rgba(255,255,255,.87)'}}
                    >
                    
                        Shop Now
                    </Link>
                </Button>
            </Box>

            <CategoryBar />

            <Box className={classes.downloadAppBox_Home}>
                <Typography>
                    Download our App
                </Typography>
                <Button className={classes.downloadAppBtn_Home}>
                    <Typography variant='body2'>
                        Download
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default Home;