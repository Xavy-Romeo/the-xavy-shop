import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import useStyles from './styles';
import ProductShop from '../../components/ProductShop';
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
                        <Box style={{border: '1px solid black', margin: '5px', background: 'rgb(5,44,133)', color: 'white'}}>
                            {category.name}
                        </Box>
                    ))}

                    <Grid item xs={12}>
                        <Paper>
                            <Grid 
                                container 
                                className={classes.newItemsContainer_Shop}
                                direction='column'
                            >
                                <Grid container>
                                    <Typography className={classes.hotTitle_Shop} variant='subtitle1'>
                                        Hot new items!!!
                                    </Typography>
                                    <Button className={classes.exploreNewBtn_Shop}>
                                        <Typography variant='body1' >
                                            Explore New
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid container>
                                    {Products.filter(product => product.new === true).map((product, index) => ( 
                                        <Grid 
                                            item 
                                            className={classes.newProductContainer_Shop}
                                            key={index}
                                        >
                                            <img 
                                                src={product.image} 
                                                className={classes.newImage_Shop}
                                                height='100%' 
                                                width='100%'
                                                alt={product.name}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Paper>
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