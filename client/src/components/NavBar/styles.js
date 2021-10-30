import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    navContainer_NavBar: {
        height: '100%'
    },
    menuIconContainer_NavBar: {
        display: 'flex', 
        justifyContent: 'flex-end'
    },
    menuIcon_NavBar: {
        fontSize: '55px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(255,255,255,.87)',
        borderRadius: '4px',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.87)',
        transition: '.1s ease',
        '&:hover': {
            border: '2px solid rgba(255,255,255,.87)',
            backgroundColor: 'rgb(100,100,100,0.5)',
            color: 'rgb(200,200,200)'
        },
        '@media (max-width:599px)': {
            fontSize: '35px'
        },
        '@media (max-width:420px)': {
            fontSize: '30px'
        }, 
    },
    menuPaper_NavBar: {
        background: 'rgb(5,44,133)', 
        width: '200px', 
        padding: '10px 0 10px 30px'
    },
    menuItemLink_NavBar: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.secondary.main,
        }
    },
    navGrid_NavBar: {
        height: '100%'
    },
    navItemContainer_NavBar: {
        color: theme.palette.primary.contrastText, 
        display: 'flex', 
        alignItems: 'end', 
        '&:hover': {
            color: theme.palette.primary.light,
        }
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
        marginTop: '-8px',
    }
}));

export default useStyles;