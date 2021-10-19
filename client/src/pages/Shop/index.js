import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';
import { QUERY_CATEGORIES, QUERY_GET_CATEGORY } from '../../utils/queries';
import ProductShop from '../../components/ProductShop';
import HotItems from '../../components/HotItems';
import Cart from '../../components/Cart';
import { UPDATE_CATEGORIES } from '../../utils/actions';

const Shop = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const { categoryId } = useParams();

    const [currentCat, setCurrentCat] = useState([{name: 'All'}]);

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    const { categories } = state;

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
                
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categoryData.categories
                }); 
            }
        };

        getCategory();
    }, [categoryData, categoryId, dispatch]);

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
                            <MenuItem className={classes.menuItem_Shop}>
                                <Link
                                    href='/shop'
                                    className={classes.menuItemLink_Shop}
                                    underline='none'
                                >
                                    All
                                </Link>
                            </MenuItem>
                            <MenuItem className={classes.menuItem_Shop}>
                                <Link
                                    href='/shop'
                                    className={classes.menuItemLink_Shop}
                                    underline='none'
                                >
                                    New
                                </Link>
                            </MenuItem>
                        
                            {!loading && 
                                categoryData.categories.map((category, index) => (
                                    <MenuItem
                                        key={index}
                                        className={classes.menuItem_Shop}
                                    >
                                        <Link
                                            href={`/shop/${category._id}`}
                                            className={classes.menuItemLink_Shop}
                                            underline='none'
                                        >
                                            {category.name}
                                        </Link>
                                    </MenuItem>
                                ))
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