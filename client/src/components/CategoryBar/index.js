import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    Grid,
    Hidden,
    Link as MaterialLink 
} from '@material-ui/core';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import idbPromise from '../../utils/indexedDB';
import useStyles from './styles';

const CategoryBar = () => {
    const classes = useStyles();

    // category slider state 
    const [sliderIndex, setSliderIndex] = useState(0);

    const [state, dispatch] = useStoreContext();

    const { categories, currentCategory } = state; 

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    console.log('categories', categories)

    // category slider functions
    const nextCategory = () => {
        categories.push(categories.splice(0, 1)[0]);

        setSliderIndex(sliderIndex + 1);
    };
    const previousCategory = () => {
        categories.unshift(categories.splice(20, 1)[0]);
        
        setSliderIndex(sliderIndex - 1);
    };

    useEffect(() => {
        // if categoryData exists or has changed from useQuery Response, then run dispatch()
        if (categoryData) {
            
            // store categoryData in Global Store
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            }); 

            // store each category in IndexedDB
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        }
        else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }

    }, [categoryData, currentCategory, dispatch, loading]);

    const changeCategory = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY, 
            currentCategory: id
        });
    };

    return (
        <Box className={classes.categoryContainer_CatBar}>
            <Button
                className={`${classes.arrowButton_CatBar} ${classes.leftArrowBtn_CatBar}`} 
                onClick={() => previousCategory()}
            >
                <KeyboardArrowLeftIcon fontSize='large' />
            </Button>
            <Hidden smUp>
                <Grid container justifyContent='center'>
                    {categories.slice(0,2).map((category, index) => (
                        <Grid 
                            item 
                            className={classes.categoryItemContainer_CatBar}
                            onClick={() => changeCategory(category._id)}
                            key={index} 
                            xs={6}
                        >
                            <MaterialLink 
                                to={`/shop/${category._id}`}
                                className={classes.categories_CatBar}
                                component={RouterLink}
                            >
                                <img src={`/images/categoryImages/${category.image}`} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
                                <Grid container className={classes.categoryContent_CatBar} alignItems='center' justifyContent='center'>
                                    <Typography className={classes.categoryTitle_CatBar} variant='h4'>
                                        {category.name}
                                    </Typography>
                                </Grid>
                            </MaterialLink>
                        </Grid> 
                    ))}
                </Grid>
            </Hidden>
            <Hidden lgUp xsDown>
                <Grid container justifyContent='center'>
                    {categories.slice(0,3).map((category, index) => (
                        <Grid 
                            item 
                            className={classes.categoryItemContainer_CatBar}
                            onClick={() => changeCategory(category._id)}
                            key={index} 
                            sm={4}
                        >
                            <MaterialLink 
                                to={`/shop/${category._id}`}
                                className={classes.categories_CatBar}
                                component={RouterLink}
                            >
                                <img src={`/images/categoryImages/${category.image}`} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
                                <Grid container className={classes.categoryContent_CatBar} alignItems='center' justifyContent='center'>
                                    <Typography className={classes.categoryTitle_CatBar} variant='h4'>
                                        {category.name}
                                    </Typography>
                                </Grid>
                            </MaterialLink>
                        </Grid> 
                    ))}
                </Grid>
            </Hidden>
            <Hidden mdDown>
                <Grid container justifyContent='center'>
                    {categories.slice(0,4).map((category, index) => (
                        <Grid 
                            item 
                            className={classes.categoryItemContainer_CatBar}
                            onClick={() => changeCategory(category._id)}
                            key={index} 
                            xs={6} sm={3}
                        >
                            <MaterialLink 
                                to={`/shop/${category._id}`}
                                className={classes.categories_CatBar}
                                component={RouterLink}
                            >
                                <img src={`/images/categoryImages/${category.image}`} className={classes.categoryImg_CatBar} alt={category.name}  height='250px' width='250px' />   
                                <Grid container className={classes.categoryContent_CatBar} alignItems='center' justifyContent='center'>
                                    <Typography className={classes.categoryTitle_CatBar} variant='h4'>
                                        {category.name}
                                    </Typography>
                                </Grid>
                            </MaterialLink>
                        </Grid> 
                    ))}
                </Grid>
            </Hidden>
            <Button 
                className={`${classes.arrowButton_CatBar} ${classes.rightArrowBtn_CatBar}`}
                onClick={() => nextCategory()}
            >
                <KeyboardArrowRightIcon className={classes.arrowIcon_CatBar} fontSize='large' />
            </Button>
        </Box>
    );
};

export default CategoryBar;