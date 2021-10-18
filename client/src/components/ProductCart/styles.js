import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    productContainer_ProductCart: {
        marginTop: '10px', 
        paddingBottom: '10px', 
        borderBottom: '1px solid rgba(0,0,0,.1)'
    },
    imgContainer_ProductCart:{
        width: '100%', 
        marginTop:'5px'
    },
    cartItemImage_ProductCart: {
        width: '100%',
    },
    middleContainer_ProductCart: {
        marginLeft: '10px',
        height: '100%'
    },
    productName_ProductCart: {
        display: 'flex',
        alignItems: 'flex-start',
        height: '100%'     
    },
    middleBottomContainer_ProductCart: {
        display: 'flex', 
        alignItems: 'center'
    },
    qtyInput_ProductCart: {
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
    },
    trash_ProductCart: {
        marginLeft: '10px',
        cursor: 'pointer',
        '&:hover': {
            textShadow: `1px 1px ${theme.palette.secondary.main}`
        }
    },
    price_ProductCart: {
        fontFamily: 'serif',
        fontWeight: 'bold'
    },
    salePercent_ProductCart: {
        fontFamily: 'serif',
        color: theme.palette.secondary.main
    },
    fullPrice_ProductCart: {
        fontFamily: 'serif',
        textDecoration: 'line-through', 
        textDecorationStyle: 'double',
        color: theme.palette.text.disabled
    }
}));

export default useStyles;