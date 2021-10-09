import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import useStyles from './styles';
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

const CategoryBar = () => {
    const classes = useStyles();

    const [sliderIndex, setSliderIndex] = useState(0);

    const nextCategory = () => {
        tempCategories.push(tempCategories.splice(0, 1)[0]);

        setSliderIndex(sliderIndex+1);
    };
    
    const previousCategory = () => {
        tempCategories.unshift(tempCategories.splice(15, 1)[0]);
        
        setSliderIndex(sliderIndex-1);
    };

    return (
        <Box style={{position: 'relative'}}>
            <Button
                className={`${classes.arrowButton_CatBar} ${classes.leftArrow_CatBar}`} 
                onClick={() => previousCategory()}
            >
                <KeyboardArrowLeftIcon fontSize='large' />
            </Button>
            <Grid container justifyContent='center'>
                {tempCategories.slice(0,4).map((category, index) => (
                    <Grid item key={index} xs={1} md={3} style={{display: 'flex', justifyContent: 'center'}}>
                        <Box className={classes.categories_CatBar}>
                            <img src={tempImg} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
                            <Grid container className={classes.categoryContent_CatBar} direction='column' justifyContent='space-between'>
                                <Typography className={classes.categoryTitle_CatBar} variant='h4'>
                                    {category.name}
                                </Typography>
                                <Button className={classes.categoryExploreBtn_CatBar}>
                                    <Typography>
                                        Explore
                                    </Typography>
                                </Button>
                            </Grid>
                        </Box>
                    </Grid> 
                ))}
            </Grid>
            <Button 
                className={`${classes.arrowButton_CatBar} ${classes.rightArrow_CatBar}`}
                onClick={() => nextCategory()}
            >
                <KeyboardArrowRightIcon fontSize='large' />
            </Button>
        </Box>
    );
};

export default CategoryBar;