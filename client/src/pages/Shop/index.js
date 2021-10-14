import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import ProductShop from '../../components/ProductShop';
import HotItems from '../../components/HotItems';
import Products from './products';

const Shop = () => {
    const classes = useStyles();

    return (
        <Container className={classes.shopContainer_Shop} maxWidth='xl'>
            <Grid container direction='column'>
                <Typography variant='h4'>
                    Category: .....CATEGORY NAME .............
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
        </Container>
    );
};

export default Shop;