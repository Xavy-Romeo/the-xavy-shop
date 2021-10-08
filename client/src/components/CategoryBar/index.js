import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    
    return (
        <Box>
            <Grid container>
                {tempCategories.map((category) => (
                    <Grid item key={category.name}>
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
        </Box>
    );
};

export default CategoryBar;