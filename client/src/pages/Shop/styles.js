import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    shopContainer_Shop: {
        marginTop: '120px'
    },
    newItemsContainer_Shop: {
        margin: '10px 0',
    },
    hotTitle_Shop: {
        fontWeight: 'bold', 
        margin: '0 10px'
    },
    exploreNewBtn_Shop: {
        background: theme.palette.primary.main,
        width: '200px', 
        color: theme.palette.primary.contrastText,  
        marginLeft: '10px',
        '&:hover': {
            background: theme.palette.primary.light
        }
    },
    newProductContainer_Shop: {
        margin: '20px',
    },
    newImage_Shop: {
        border: '1px solid black',
        borderRadius: '50%',
        height: '200px',
        width: '200px',
        objectFit: 'cover'
    },
    productContainer_Shop: {
        marginBottom: '20px'
    }
}));

export default useStyles;