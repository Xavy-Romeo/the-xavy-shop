import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    navContainer_NavBar: {
        height: '100%'
    },
    navGrid_NavBar: {
        height: '100%'
    },
    navItemContainer_NavBar: {
        color: theme.palette.primary.contrastText, 
        display: 'flex', 
        alignItems: 'end'
    },
    navIcon_NavBar: {
        marginRight: '5px'
    },
    navAccountContainer_NavBar: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    navItemName_NavBar: {
        color: theme.palette.primary.contrastText,
        marginTop: '-8px'
    },
}));

export default useStyles;