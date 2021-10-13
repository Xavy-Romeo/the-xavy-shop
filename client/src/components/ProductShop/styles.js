import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
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
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    productPriceContainer_ProductShop: {
        marginTop: '30px'
    },
    productPrice_ProductShop: {
        fontWeight: 'bold', 
        marginRight: '15px'
    },
    productSale_ProductShop: {
        color: theme.palette.secondary.main, 
        marginRight: '15px'
    },
    productStrikePrice_ProductShop: {
        color: theme.palette.text.disabled, 
        textDecoration: 'line-through', 
        textDecorationStyle: 'double'
    }
}));

export default useStyles;