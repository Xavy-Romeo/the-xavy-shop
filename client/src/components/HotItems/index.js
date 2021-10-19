import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
// import Products from '../../pages/Shop/products';

const HotItems = () => {
    const classes = useStyles();
    
    return (
        <Grid item xs={12}>
            <Paper>
                <Grid 
                    container 
                    className={classes.newItemsContainer_HotItem}
                    direction='column'
                >
                    <Grid container>
                        <Typography className={classes.hotTitle_HotItem} variant='h5'>
                            Hot new items!!!
                        </Typography>
                        <Button className={classes.exploreNewBtn_HotItem}>
                            <Typography variant='body1' >
                                Explore New
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid container>
                        {/* {Products.filter(product => product.new === true).map((product, index) => ( 
                            <Grid 
                                item 
                                className={classes.newProductContainer_HotItem}
                                key={index}
                            >
                                <img 
                                    src={product.image} 
                                    className={classes.newImage_HotItem}
                                    height='100%' 
                                    width='100%'
                                    alt={product.name}
                                />
                            </Grid>
                        ))} */}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default HotItems;