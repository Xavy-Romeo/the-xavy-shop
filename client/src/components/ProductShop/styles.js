import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    loadingContainer_ProductShop: {
        marginTop: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh'
    },
    loadingIcon_ProductShop: {
        color: theme.palette.secondary.main
    },
    productContainer_ProductShop: {
        position: 'relative',
        marginBottom: '20px',
        padding: '5px',
        '&:hover': {
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: '5px 5px 5px black',
            borderRadius: '4px'
        }
    },
    productLink_ProductShop: {
        color: theme.palette.text.primary
    },
    productImageContainer_ProductShop: {
        height: 'calc(100vw/6*.95*1.333)',
        maxHeight: '360px',
        '@media (max-width:1279px)': {
            height: 'calc(100vw/4*.95*1.333)',
        },
        '@media (max-width:959px)': {
            height: 'calc(100vw/3*.95*1.333)',
        }, 
        '@media (max-width:599px)': {
            height: 'calc(100vw/2*.95*1.333)',
        },
        '@media (max-width:400px)': {
            height: '200px',
        }, 
        '@media (max-width:350px)': {
            height: '170px',
        },
        '@media (max-width:300px)': {
            height: '150px',
        },
    },
    productImage_ProductShop: {
        display: 'block',
        objectFit: 'cover',        
    },
    addBtnContainer_ProductShop: {
        position: 'absolute', 
        bottom: '20%', 
        left: '5%',
        '@media (min-width:1800px)': {
            bottom: '15%',
        },
        '@media (max-width:1508px)': {
            bottom: '25%',
        },
        '@media (max-width:1279px)': {
            bottom: '17%',
        },
        '@media (max-width:1130px)': {
            bottom: '22%',
        },
        '@media (max-width:959px)': {
            bottom: '16%',
        },
        '@media (max-width:880px)': {
            bottom: '20%',
        },
        '@media (max-width:730px)': {
            bottom: '23%',
        },
        '@media (max-width:599px)': {
            bottom: '20%',
        },
        '@media (max-width:400px)': {
            position: 'relative',
            marginTop: '-50px'
        }, 
    },
    addBtn_ProductShop: {
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    addBtnTypography_ProductShop: {
        '@media (max-width:350px)': {
            fontSize: '12px'
        }
    },
    productPriceContainer_ProductShop: {
        marginTop: '30px',
        '@media (max-width:400px)': {
            paddingTop: '20px'
        }
    },
    productPrice_ProductShop: {
        fontFamily: 'serif',
        fontWeight: 'bold', 
        marginRight: '15px'
    },
    productSale_ProductShop: {
        fontFamily: 'serif',
        color: theme.palette.secondary.main, 
        marginRight: '15px',
        display: 'flex',
        alignItems: 'flex-end'
    },
    productStrikePrice_ProductShop: {
        fontFamily: 'serif',
        color: theme.palette.text.disabled, 
        textDecoration: 'line-through', 
        textDecorationStyle: 'double',
        display: 'flex',
        alignItems: 'flex-end'
    },
    
}));

export default useStyles;