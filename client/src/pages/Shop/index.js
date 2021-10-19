import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';
import { QUERY_CATEGORIES, QUERY_GET_CATEGORY } from '../../utils/queries';
import ProductShop from '../../components/ProductShop';
import HotItems from '../../components/HotItems';
import Cart from '../../components/Cart';
import Products from './products';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';


const Shop = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const { categoryId } = useParams();

    const [currentCat, setCurrentCat] = useState([{name: 'All'}]);

    const { loading, data } = useQuery(QUERY_CATEGORIES);

    const { categories } = state;

    useEffect(() => {
        const getCategory = async () => {
            if (data) {
                let current = await data.categories.filter(category => category._id === categoryId);

                if (current.length === 0) {
                    setCurrentCat([{name: 'All'}]);
                }
                else {
                    setCurrentCat(current);
                }

                console.log('current category', current[0].name)
            }
        };

        getCategory();
    }, [data, categoryId]);

    return (
        <Container className={classes.shopContainer_Shop} maxWidth='xl'>
            <Grid container direction='column'>
                <Typography variant='h4'>
                    Category: {currentCat[0].name}
                </Typography>
                <Grid container>
                    <Box  style={{border: '1px solid black'}}>
                        Choose Cat dropdown
                    </Box>
                    
                    {Products.map((category, index) => (
                        <Box key={index} style={{border: '1px solid black', margin: '5px', background: 'rgb(5,44,133)', color: 'white'}}>
                            {category.name}
                        </Box>
                    ))}

                    <HotItems />

                </Grid>
            </Grid>

            <Grid container>
                {Products.map((product, index) => (
                    <Grid item className={classes.productContainer_Shop} key={index} xs={2}>
                        <ProductShop product={product} />
                    </Grid>
                ))}
            </Grid>

            <Cart />
        </Container>
    );
};

export default Shop;