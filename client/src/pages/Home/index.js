import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import hero from '../../assets/images/hero.jpg';

import tempImg from '../../assets/images/xr-logo.png';

const tempCategories = [
    {name: "Men's"},
    {name: "Women's"},
    {name: "Kids"},
    {name: "Weights"},
    {name: "Baseball"},
    {name: "Soccer"},
    {name: "Football"},
    {name: "Hockey"},
    {name: "Tennis"},
    {name: "Fishing"},
    {name: "Volleyball"},
    {name: "Fitness"},
    {name: "Running"},
    {name: "Yoga"},
    {name: "Hiking"},
    {name: "Snow"},
];

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

                <Box>
                    <Grid container>
                        {tempCategories.map((category) => (
                           <Grid item key={category.name}>
                               <Box style={{border: '1px solid black', margin: '5px', width: '250px', height: '250px', position: 'relative', borderRadius: '10px'}}>
                                    <img src={tempImg} alt={category.name + 'category'}  height='250px' width='250px' style={{borderRadius: '10px'}} />   
                                    <Grid container direction='column' justifyContent='space-between'
                                        style={{position: 'absolute', left: '5%', top: '0%', width: '100%', height: '100%'}}
                                    >
                                        <Typography 
                                            style={{
                                                margin: '35% 10px 0 10px', 
                                                color: 'rgba(255,255,255,.87)',
                                                
                                            }}
                                            variant='h4'
                                        >
                                            {category.name}
                                        </Typography>
                                        <Button 
                                            style={{
                                                width: '50%', 
                                                margin: '10px', 
                                                borderRadius: '30px',
                                                background: 'rgba(255,255,255,.05)',
                                                border: '2px solid rgba(255,255,255,.87)',
                                                color: 'rgba(255,255,255,.87)'
                                                
                                            }}>
                                            <Typography>
                                                Explore
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Box>
                           </Grid> 
                        ))}
                    </Grid>
                </Box>

                <Box style={{background: 'rgba(140,210,255)', height: '80px', margin: '20px 0 25px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'rgba(255,255,255,.87)'}}>
                    <Typography>
                        Download our App
                    </Typography>
                    <Button 
                        style={{
                            borderRadius: '30px', 
                            width: '150px', 
                            marginLeft: '20px', 
                            background: 'rgb(5,44,133)',
                            color: 'rbga(255,255,255,.87)'
                        }}>
                        <Typography variant='body2'>
                            Download
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Home;