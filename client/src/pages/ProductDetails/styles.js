import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    loadingContainer_ProductDetails: { 
        display: 'flex',
        justifyContent: 'center',
        margin: '200px 0 200px 0'
    },
    detailsContainer_ProductDetails: {
        marginTop: '120px'
    },
    aboutPaper_ProductDetails: {
        padding: '15px 20px'
    },
    productImage_ProductDetails: {
        width:'100%',
        display: 'flex',
        justifyContent:'center'
    },
    aboutItemContainer_ProductDetails: {
        paddingLeft: '20px'
    },
    aboutTitle_ProductDetails: {
        fontWeight: 'bold'
    },
    addContainer_ProductDetails: {
        padding: '0 20px',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,.2), 0px 6px 10px 6px rgba(0,0,0,.14), 0px 1px 18px 0px rgba(0,0,0,.12)',
        position: 'relative'
    },
    pricesContainer_ProductDetails: {
        marginTop: '20px'
    },
    price_ProductDetails: {
        fontFamily: 'serif',
        fontWeight: 'bold', 
        marginRight: '15px', 
    },
    discountContainer_ProductDetails: {
        display: 'flex'
    },
    salePercent_ProductDetails: {
        fontFamily: 'serif',
        color: 'red', 
        marginRight: '15px', 
    },
    fullPrice_ProductDetails: {
        fontFamily: 'serif',
        color: theme.palette.text.disabled, 
        textDecoration: 'line-through', 
        textDecorationStyle: 'double', 
    },
    quantityContainer_ProductDetails: {
        display: 'flex'
    },
    quantityInput_ProductDetails: {
        fontFamily: 'serif',
        paddingLeft: '5px',
        marginLeft: '15px', 
        border: '1px solid black', 
        borderRadius: '4px',
        width: '45px'
    },
    addBtn_ProductDetails: {
        marginTop: '15px',
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    boughtTogetherContainer_ProductDetails: {
        borderTop: '1px solid rgba(0,0,0,.05)', 
        margin: '50px 0 20px 0'
    },
    boughtTogetherTitleContainer_ProductDetails: {
        margin: '5px 0 15px 0'
    },
    boughtTogetherTitle_ProductDetails: {
        fontWeight: 'bold'
    },
    boughtTogetherPlusSign_ProductDetails: {
        margin: '10px'
    },
    similarLink_ProductDetails: {
        width: '200px'
    },
    totalPriceContainer_ProductDetails: {
        margin: '10px'
    },
    totalPrice_ProductDetails: {
        fontFamily: 'serif',
        margin: '0 10px', 
    },
    buyTogetherBtn_ProductDetails: {
        '&:hover': {
            background: theme.palette.primary.light,
        }
    }
}));

export default useStyles;