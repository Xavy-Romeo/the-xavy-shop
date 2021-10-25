import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Link as MaterialLink
} from '@material-ui/core';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';
import { QUERY_CATEGORIES } from '../../utils/queries';
import ProductShop from '../../components/ProductShop';
import HotItems from '../../components/HotItems';
import Cart from '../../components/Cart';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import idbPromise from '../../utils/indexedDB';

const Shop = () => {
    const classes = useStyles();

    const [, dispatch] = useStoreContext();
    const { categoryId } = useParams();

    const [currentCat, setCurrentCat] = useState([{name: 'All'}]);

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        const getCategory = async () => {
            if (categoryData) {
                let current = await categoryData.categories.filter(category => category._id === categoryId);

                if (current.length === 0) {
                    return;
                }
                else {
                    setCurrentCat(current);
                }

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
        };

        getCategory();
        
        if (categoryId) {
            dispatch({
                type: UPDATE_CURRENT_CATEGORY,
                currentCategory: categoryId
            });
        }

    }, [categoryData, categoryId, dispatch, loading]);

    return (
        <Container className={classes.shopContainer_Shop} maxWidth='xl'>
            <Box className={classes.categoryMenuContainer_Shop}>
                
                <Box className={classes.dropdownContainer_Shop}>
                    <FormControl className={classes.formControlDropdown_Shop}>
                        <InputLabel className={classes.inputLabelDropdown_Shop}>
                            <Typography variant='caption'>
                                Select Category
                            </Typography>
                        </InputLabel>
                        <Select 
                            MenuProps={{
                                PaperProps: { 
                                    style: {background: 'rgb(5,44,133)', width: '250px', paddingLeft: '10px'}
                                }
                            }}
                            variant='outlined'
                        >
                            {loading === undefined &&
                                <Box>
                                    <MenuItem className={classes.menuItem_Shop}>
                                        <MaterialLink
                                            to='/shop'
                                            className={classes.menuItemLink_Shop}
                                            component={RouterLink}
                                            underline='none'
                                        >
                                            All
                                        </MaterialLink>
                                    </MenuItem>
                                
                                    {categoryData.categories.map((category, index) => (
                                        <MenuItem
                                            key={index}
                                            className={classes.menuItem_Shop}
                                        >
                                            <MaterialLink
                                                to={`/shop/${category._id}`}
                                                className={classes.menuItemLink_Shop}
                                                component={RouterLink}
                                                underline='none'
                                            >
                                                {category.name}
                                            </MaterialLink>
                                        </MenuItem>
                                    ))}
                                </Box>
                            }
                        </Select>
                    </FormControl>
                </Box>

                <Box className={classes.categoryTitleContainer_Shop}>
                    <Typography className={classes.categoryTitle_Shop} variant='h5'>
                        Category: 
                    </Typography>
                    <Typography className={classes.categoryName_Shop} variant='subtitle1'>
                        {currentCat[0].name}
                    </Typography>
                </Box>

            </Box>

            <HotItems />
            <ProductShop /> 
            <Cart />

        </Container>
    );
};

export default Shop;