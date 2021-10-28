import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';

import { 
    Paper,
    Grid,
    Typography,
    Box,
    Hidden, 
    Link as MaterialLink 
} from '@material-ui/core';

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import useStyles from './styles';

const HotItems = () => {
    const classes = useStyles();
    
    const [state, dispatch] = useStoreContext();

    const { loading, data: productData } = useQuery(QUERY_ALL_PRODUCTS);

    const { products, currentCategory } = state;

    useEffect(() => {
        if(productData) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: productData.products
            });
        }

    }, [productData, dispatch, loading, currentCategory]);

    const filterProductsByCategory = () => {
        if (!currentCategory || currentCategory === '') {
            return products;
        }

        return products.filter(product => product.category._id === currentCategory);  
    };

    return (
        <Grid item xs={12}>
            {currentCategory === '' && 
            <Paper>
                <Grid 
                    container 
                    className={classes.newItemsContainer_HotItem}
                    direction='column'
                >
                    <Grid container className={classes.hotTitleContainer_HotItem}>
                        <Typography className={classes.hotTitle_HotItem} variant='h5'>
                            Hot new items!!!
                        </Typography>
                    </Grid>
                    <Box>
                        {products.length > 0 &&
                            <Grid container className={classes.newProductsGridContainer_HotItem}>
                                <Hidden mdDown>
                                    {filterProductsByCategory().filter(product => product.new === true).slice(0,6).map((product, index) => ( 
                                        <Grid 
                                            item 
                                            className={classes.newProductContainer_HotItem}
                                            lg={2}
                                            key={index}
                                        >
                                            <MaterialLink
                                                to={`/product/${product._id}`}
                                                className={classes.productLink_HotItem}
                                                component={RouterLink}
                                                underline='none'
                                            >
                                                <img 
                                                    src={`/images/productImages/${product.image}`} 
                                                    className={classes.newImage_HotItem}
                                                    height='100%' 
                                                    width='100%'
                                                    alt={product.name}
                                                />
                                            </MaterialLink>
                                        </Grid>
                                    ))}
                                </Hidden>
                                <Hidden lgUp>
                                    {filterProductsByCategory().filter(product => product.new === true).slice(0,4).map((product, index) => ( 
                                        <Grid 
                                            item 
                                            className={classes.newProductContainer_HotItem}
                                            xs={6} sm={3}
                                            key={index}
                                        >
                                            <MaterialLink
                                                to={`/product/${product._id}`}
                                                className={classes.productLink_HotItem}
                                                component={RouterLink}
                                                underline='none'
                                            >
                                                <img 
                                                    src={`/images/productImages/${product.image}`} 
                                                    className={classes.newImage_HotItem}
                                                    height='100%' 
                                                    width='100%'
                                                    alt={product.name}
                                                />
                                            </MaterialLink>
                                        </Grid>
                                    ))}
                                </Hidden>
                            </Grid>
                        }
                    </Box>
                </Grid>
            </Paper>
            }
        </Grid>
    );
};

export default HotItems;