import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import useStyles from './styles';
// import Categories from './categories';

const CategoryBar = () => {
    const classes = useStyles();

    // category slider state 
    const [sliderIndex, setSliderIndex] = useState(0);

    const [state, dispatch] = useStoreContext();

    const { categories } = state; 

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);


    // category slider functions
    const nextCategory = () => {
        categories.push(categories.splice(0, 1)[0]);

        setSliderIndex(sliderIndex + 1);
    };
    const previousCategory = () => {
        categories.unshift(categories.splice(15, 1)[0]);
        
        setSliderIndex(sliderIndex - 1);
    };

    useEffect(() => {
        // if categoryData exists or has changed from useQuery Response, then run dispatch()
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            }); 
        }

        console.log('categoryData', categoryData);
    }, [categoryData, dispatch])

    return (
        <Box className={classes.categoryContainer_CatBar}>
            <Button
                className={`${classes.arrowButton_CatBar} ${classes.leftArrow_CatBar}`} 
                onClick={() => previousCategory()}
            >
                <KeyboardArrowLeftIcon fontSize='large' />
            </Button>
            <Grid container justifyContent='center'>
                {categories.slice(0,4).map((category, index) => (
                    <Grid 
                        item 
                        className={classes.categoryItemContainer_CatBar}
                        key={index} 
                        xs={1} md={3}
                    >
                        <Box className={classes.categories_CatBar}>
                            <img src={`/images/categoryImages/${category.image}`} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
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