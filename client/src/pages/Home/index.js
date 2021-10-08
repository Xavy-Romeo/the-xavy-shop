import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                <Button className={classes.shopHeroBtn_Home}>
                    <Typography>
                        Shop Now
                    </Typography>
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