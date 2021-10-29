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
    selectMenu_Shop: {
        background: 'rgba(20,20,20,.1)'
    },
    dropdownMenu_Shop: {
        background: 'rgb(5,44,133)', 
        width: '200px', 
        padding: '10px 0 10px 30px'
    },
    menuItemLink_Shop: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    }
    
}));

export default useStyles;