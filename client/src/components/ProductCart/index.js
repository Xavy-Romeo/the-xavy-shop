import React from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import useStyles from './styles';


const CartItem = ({ item }) => {
    const classes = useStyles();
    
    return (
        <Grid container 
            style={{
                marginTop: '10px', 
                paddingBottom: '10px', 
                borderBottom: '1px solid rgba(0,0,0,.1)'
            }}>
            <Grid item xs={3} style={{width: '100%', marginTop:'5px'}}>
                <img
                    src={`/images/${item.image}`}
                    // src=''
                    className={classes.cartItemImage_CartItem}
                    alt={item.name}
                />
            </Grid>

            <Grid item xs={7} style={{}}>
                <Grid container direction='column' justifyContent='space-between' 
                    style={{
                        marginLeft: '10px',
                        height: '100%'
                    }}
                >
                    <Box>
                        <Typography variant='body2' style={{height: '100%', display: 'flex', alignItems: 'flex-start'}}>
                            {item.name}
                        </Typography>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant='caption'>
                            Qty:
                        </Typography>
                        <Input
                            style={{
                                width: '50px',
                                border: '1px solid black',
                                borderRadius: '4px',
                                paddingLeft: '5px',
                                background: 'white',
                                height: '25px',
                                fontFamily:'serif',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '16px',
                                margin: '0 5px'
                            }}
                            disableUnderline
                            type='number'
                            value={item.purchaseQuantity}
                        
                        />
                        <Typography 
                            component='span'
                            role='img'
                            aria-label='trash'
                            style={{
                                marginLeft: '10px',
                                // textShadow: '1px 1px red'
                                
                            }}
                        >
                            🗑️
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container direction='column'
                    style={{
                       
                    }}
                >
                    <Typography 
                        variant='body2'
                        component='strong'
                        style={{
                            fontFamily: 'serif',
                            fontWeight: 'bold'
                        }}
                    >
                        ${item.price}
                    </Typography>
                    
                    {item.salePercent !== 0 && 
                        <Grid container direction='column'>
                            <Typography 
                                variant='caption'
                                
                                style={{
                                    fontFamily: 'serif',
                                    color: 'red'
                                }}
                            >
                                {item.salePercent}%
                            </Typography>
                            <Typography 
                                variant='caption'
                                
                                style={{
                                    fontFamily: 'serif',
                                    textDecoration: 'line-through', 
                                    textDecorationStyle: 'double',
                                    color: 'grey'
                                }}
                            >
                                ${item.fullPrice}
                            </Typography>
                        </Grid>
                    }
                </Grid>
                
            </Grid>
        </Grid>
    );
};

export default CartItem;
