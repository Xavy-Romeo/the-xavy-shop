import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import ProductShop from '../../components/ProductShop';
import Products from '../../components/ProductShop/products';

const Shop = () => {
    const classes = useStyles();
    

    return (
        <Container maxWidth='xl' style={{marginTop: '120px'}}>
            <Grid container direction='column'>
                <Typography variant='h4'>
                    Category: .....CATEGORY NAME .............
                </Typography>
                <Grid container>
                    <Box  style={{border: '1px solid black'}}>
                        Choose Cat dropdown
                    </Box>
                    
                    {Products.map((category, index) => (
                        <Box style={{border: '1px solid black', margin: '5px', background: 'blue', color: 'white'}}>
                            {category.name}
                        </Box>
                    ))}
                    <Grid container 
                        style={{
                            border: '1px solid black',
                            margin: '10px 0',
                        }}
                        direction='column'
                    >
                        <Box>
                            Check out our new items!!! (View on all category state only)
                        </Box>
                        <Grid container>
                            {Products.filter(category => category.new === true).map((category, index) => ( 
                                <Grid 
                                    item 
                                    key={index}
                                    style={{
                                        margin: '10px',
                                    }}
                                >
                                    <img src={category.image} height='100%' width='100%'
                                        style={{
                                            border: '1px solid black',
                                            borderRadius: '50%',
                                            height: '200px',
                                            width: '200px',
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
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
