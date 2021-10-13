import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import useStyles from './styles';
import Categories from './categories';

const CategoryBar = () => {
    const classes = useStyles();

    const [sliderIndex, setSliderIndex] = useState(0);

    const nextCategory = () => {
        Categories.push(Categories.splice(0, 1)[0]);

        setSliderIndex(sliderIndex + 1);
    };
    
    const previousCategory = () => {
        Categories.unshift(Categories.splice(15, 1)[0]);
        
        setSliderIndex(sliderIndex - 1);
    };

    return (
        <Box className={classes.categoryContainer_CatBar}>
            <Button
                className={`${classes.arrowButton_CatBar} ${classes.leftArrow_CatBar}`} 
                onClick={() => previousCategory()}
            >
                <KeyboardArrowLeftIcon fontSize='large' />
            </Button>
            <Grid container justifyContent='center'>
                {Categories.slice(0,4).map((category, index) => (
                    <Grid 
                        item 
                        className={classes.categoryItemContainer_CatBar}
                        key={index} 
                        xs={1} md={3}
                    >
                        <Box className={classes.categories_CatBar}>
                            <img src={category.image} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
                            <Grid container className={classes.categoryContent_CatBar} alignItems='center' justifyContent='center'>
                                <Typography className={classes.categoryTitle_CatBar} variant='h4'>
                                    {category.name}
                                </Typography>
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