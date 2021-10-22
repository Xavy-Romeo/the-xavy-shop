import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import { ADD_TO_CART, UPDATE_PRODUCTS } from '../../utils/actions';
import useStyles from './styles';


const ProductShop = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();

    const { products, currentCategory } = state;

    const { loading, data: productData } = useQuery(QUERY_ALL_PRODUCTS);

    useEffect(() => {
            if(productData) {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: productData.products
                });
            }

    }, [loading, productData, dispatch]);


    // const addToCart = (event, element, item) => {
    //     if (event.target !== element) {
    //         event.stopPropagation();
    //         return;
    //     }

    //     dispatch({
    //         type: ADD_TO_CART,
    //         product: { ...item, purchaseQuantity: 1}
    //     });
    // };

    const addToCart = item => {
        dispatch({
            type: ADD_TO_CART,
            product: { ...item, purchaseQuantity: 1}
        });
    };

    const filterProductsByCategory = () => {
        if (!currentCategory || currentCategory === '') {
            return products;
        }

        return products.filter(product => product.category._id === currentCategory); 
    };

    // calculate total price after sale discount and set to 2 decimals
    const calcTotal = (fullPrice, salePercent) => {
        let total = (fullPrice*(1 - (salePercent/100))).toFixed(2);
        return total;
    };

    if (loading) {
        return(
            <Box style={{marginTop: '200px'}}>
                <Typography variant='h1'>
                    LOADING...
                </Typography>
            </Box>
        );
    }

    return (
        <Box>
            {products.length && 
                <Grid container>
                    {filterProductsByCategory().map((product, index) => (
                        <Grid item className={classes.productContainer_ProductShop} xs={2} key={index}>
                            <Link
                                href={`/product/${product._id}`}
                                className={classes.productLink_ProductShop}
                                underline='none'  
                            >
                                <Grid container direction='column'>
                                    <Box className={classes.productImageContainer_ProductShop}>
                                        <img 
                                            src={`/images/productImages/${product.image}`} 
                                            className={classes.productImage_ProductShop} 
                                            alt={product.name} 
                                        />
                                    </Box>
                                    <Grid container className={classes.productPriceContainer_ProductShop}>
                                        <Typography className={classes.productPrice_ProductShop}>
                                            $ {calcTotal(product.fullPrice, product.salePercent)}
                                        </Typography>

                                        {product.salePercent !== 0 &&
                                            <Box style={{display: 'flex'}}>
                                                <Typography className={classes.productSale_ProductShop} variant='caption'>
                                                    {product.salePercent}% off
                                                </Typography>
                                                <Typography className={classes.productStrikePrice_ProductShop} variant='caption'>
                                                    $ {product.fullPrice}
                                                </Typography>
                                            </Box>
                                        }   
                                    </Grid>
                                    <Box>
                                        <Typography >
                                            {product.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Link>
                            <Box className={classes.addBtnContainer_ProductShop}>
                                <Button 
                                    className={classes.addBtn_ProductShop}
                                    onClick={() => addToCart(product)}
                                >
                                    <Typography>
                                        + Add to Cart
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            }
        </Box>
    );
};

export default ProductShop;