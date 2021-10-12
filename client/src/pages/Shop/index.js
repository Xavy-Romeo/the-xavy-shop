import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import ProductShop from '../../components/ProductShop';

const Shop = () => {
    const classes = useStyles();

    let sampleCategories = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    
    return (
        <Container maxWidth='xl' style={{marginTop: '100px'}}>
            <Grid container direction='column'>
                <Typography variant='h4'>
                    Category: .....CATEGORY NAME .............
                </Typography>
                <Grid container>
                    <Box  style={{border: '1px solid black'}}>
                        Choose Cat dropdown
                    </Box>
                    
                    {sampleCategories.map((category, index) => (
                        <Box style={{border: '1px solid black', margin: '5px', background: 'blue', color: 'white'}}>
                            {category}
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
                            {sampleCategories.map((category, index) => (
                                <Grid item key={index}
                                    style={{
                                        border: '1px solid black',
                                        borderRadius: '50%',
                                        height: '200px',
                                        width: '200px',
                                        margin: '10px',
                                        background: 'lightblue'
                                    }}
                                >
                                    {category}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                {sampleCategories.map((category, index) => (
                    <Grid item className={classes.productContainer_Shop} key={index} xs={2}>
                        <ProductShop />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Shop;
