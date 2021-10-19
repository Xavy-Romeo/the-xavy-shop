import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './styles';

const ProductShop = ({ product }) => {
    const classes = useStyles();

    return (
        <Link
            href={`/product/${product._id}`}
            className={classes.productLink_ProductShop}
            underline='none'
        >
            <Grid container direction='column'>
                <Box className={classes.productImageContainer_ProductShop}>
                    <img 
                        src={product.image} 
                        className={classes.productImage_ProductShop} 
                        alt={product.name} 
                    />
                    <Box className={classes.addBtnContainer_ProductShop}>
                        <Button className={classes.addBtn_ProductShop}>
                            <Typography>
                                + Add to Cart
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Grid container className={classes.productPriceContainer_ProductShop}>
                    <Typography className={classes.productPrice_ProductShop}>
                        $ 99.99
                    </Typography>
                    <Typography className={classes.productSale_ProductShop} variant='caption'>
                        30% off
                    </Typography>
                    <Typography className={classes.productStrikePrice_ProductShop} variant='caption'>
                        $ 130.00
                    </Typography>   
                </Grid>
                <Box>
                    <Typography >
                        {product.name}
                    </Typography>
                </Box>
            </Grid>
        </Link>
    );
};

export default ProductShop;