import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import hero from '../../assets/images/hero.jpg';

const Home = () => {
    const classes = useStyles();
    
    return (
        <>
            <Box style={{position: 'relative'}}>
                <Box>
                    <img src={hero} className={classes.heroImg_Home} alt='site home image of man standing on mountain' />
                </Box>
                
                <Box className={classes.heroTextBox_Home}>
                    <Typography variant='h2' >
                        SEASON SALE
                    </Typography>
                    <Typography variant='h4'>
                        Save up to 30% sitewide
                    </Typography>
                    {/* <Box style={{display: 'flex', justifyContent: 'center'}}> */}
                        <Button 
                            style={{width: '50%', borderRadius: '30px', marginTop: '20px', background: 'black', color: 'white'}}
                        >
                            <Typography>
                                Shop Now
                            </Typography>
                        </Button>
                    {/* </Box> */}
                    
                </Box>
                <h1>
                    HOMEPAGE
                </h1>
                <h2>
                    THE XAVY SHOP!!!
                </h2>
            </Box>
        </>
    );
};

export default Home;