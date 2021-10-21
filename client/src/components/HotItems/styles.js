import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    newItemsContainer_HotItem: {
        margin: '10px 0',
    },
    hotTitleContainer_HotItem: {
        marginTop: '10px'
    },
    hotTitle_HotItem: {
        fontWeight: 'bold', 
        margin: '0 10px',
    },
    newProductsGridContainer_HotItem: {
        margin: '15px 0'
    },
    newProductContainer_HotItem: {
        display: 'flex',
        justifyContent: 'center'
    },
    productLink_HotItem: {
        cursor: 'default'
    },
    newImage_HotItem: {
        border: '1px solid black',
        borderRadius: '50%',
        height: '200px',
        width: '200px',
        objectFit: 'cover', 
        cursor: 'pointer',
        '&:hover': {
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: '5px 5px 5px black',
            transform: 'scale(1.02)'
        }
    },
}));

export default useStyles;