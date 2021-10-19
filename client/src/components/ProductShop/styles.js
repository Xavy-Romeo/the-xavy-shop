import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    productContainer_ProductShop: {
        marginBottom: '20px'
    },
    productLink_ProductShop: {
        color: theme.palette.text.primary
    },
    productImageContainer_ProductShop: {
        position: 'relative',
    },
    productImage_ProductShop: {
        width: '95%',
        height: '100%',
        objectFit: 'cover', 
    },
    addBtnContainer_ProductShop: {
        position: 'absolute', 
        bottom: '-8%', 
        left: '5%'
    },
    addBtn_ProductShop: {
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    productPriceContainer_ProductShop: {
        marginTop: '30px'
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
    }
}));

export default useStyles;