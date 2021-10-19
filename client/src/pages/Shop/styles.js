import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    shopContainer_Shop: {
        marginTop: '120px'
    },
    productContainer_Shop: {
        marginBottom: '20px'
    },
    menuItem_Shop: {
        color: theme.palette.primary.main,
    },
    menuItemLink_Shop: {
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));

export default useStyles;