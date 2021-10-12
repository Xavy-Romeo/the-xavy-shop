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
            href='/shop/item'
            underline='none'
        >
            <Grid container direction='column'>
                <Box style={{position: 'relative'}}>
                    
                        <img 
                            src={product.image} 
                            className={classes.productImage_ProductShop} 
                            alt={product.name} 
                        />
                    
                    <Box 
                        style={{position: 'absolute', bottom: '-8%', left: '5%'}}
                    >
                        <Button
                            style={{
                                borderRadius: '30px',
                                background: 'blue',
                                color: 'white'
                            }}
                        >
                            <Typography>
                                + Add to Cart
                            </Typography>
                        </Button>
                    </Box>
                </Box>
                <Grid container style={{marginTop: '20px'}}>
                    <Typography style={{fontWeight: 'bold', marginRight: '15px'}}>
                        $ 99.99
                    </Typography>
                    <Typography style={{color: 'red', marginRight: '15px'}}>
                        30% off
                    </Typography>
                    <Typography style={{color: 'grey', textDecoration: 'line-through', textDecorationStyle: 'double'}}>
                        $ 130.00
                    </Typography>   
                </Grid>
                <Box>
                    <Typography >
                        Product Name
                    </Typography>
                </Box>
            </Grid>
        </Link>
    );
};

export default ProductShop;