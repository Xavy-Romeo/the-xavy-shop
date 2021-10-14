import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    newItemsContainer_HotItem: {
        margin: '10px 0',
    },
    hotTitle_HotItem: {
        fontWeight: 'bold', 
        margin: '0 10px'
    },
    exploreNewBtn_HotItem: {
        width: '200px',  
        marginLeft: '10px',
        '&:hover': {
            background: theme.palette.primary.light
        }
    },
    newProductContainer_HotItem: {
        margin: '20px',
    },
    newImage_HotItem: {
        border: '1px solid black',
        borderRadius: '50%',
        height: '200px',
        width: '200px',
        objectFit: 'cover'
    }
}));

export default useStyles;