import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    shopContainer_Shop: {
        marginTop: '110px'
    },
    categoryMenuContainer_Shop: {
        display: 'flex', 
        marginBottom: '10px'
    },
    categoryTitleContainer_Shop: {
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: '20px', 
    },
    categoryTitle_Shop: {
        fontWeight: 'bold'
    },
    categoryName_Shop: {
        fontWeight: 'bold',
        color: theme.palette.primary.main
    },
    dropdownContainer_Shop: {
        display: 'flex', 
        alignItems: 'center', 
        
    },
    formControlDropdown_Shop: {
        width: '150px',
        
    },
    inputLabelDropdown_Shop: {
        color: theme.palette.primary.main, 
        paddingLeft: '10px',
        
    },
    menuItemLink_Shop: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    productContainer_Shop: {
        marginBottom: '20px'
    },
    PaperProps: {
        background: 'yellow',
        '&:hover': {
            background: 'yellow'
        }
    }
    
}));

export default useStyles;