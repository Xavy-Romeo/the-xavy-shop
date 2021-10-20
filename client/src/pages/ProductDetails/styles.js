import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    detailsContainer_ProductDetails: {
        marginTop: '120px'
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
    },
    addBtn_ProductDetails: {
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    frequentTitle_ProductDetails: {
        fontWeight: 'bold'
    },
    buyTogetherBtn_ProductDetails: {
        '&:hover': {
            background: theme.palette.primary.light,
        }
    }
}));

export default useStyles;