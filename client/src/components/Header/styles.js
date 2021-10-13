import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    Appbar_Header: {
        background: 'rgba(0,0,0.95)',
        height: '100px'
    },
    upperHeader_Header: {
        background: theme.palette.background.default, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    upperHeaderSpan_Header: {
        paddingRight: '5px'
    },
    upperHeaderNumb_Header: {
        marginBottom: '3px'
    },
    toolbarGrid_Header: {
        paddingTop: '4px'
    },
    xrLogo_Header: {
        height: '60px', 
        width: '60px'
    },
    title_Header: {
        fontFamily: 'Special Elite, serif', 
        fontWeight: 'bold', 
        textShadow: '1px 1px 3px rgba(100,100,100,.87)',
        padding: '10px 0 0 20px', 
        opacity: '.87'
    },
    navContainer_Header: {
        height: '100%'
    },
    navGrid_Header: {
        height: '100%'
    },
    navItem_Header: {
        color: theme.palette.primary.contrastText
    },
    cartIcon_Header: {
        position: 'fixed',
        top: '60px',
        right: '1%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '30px',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            transform: 'rotate(-15deg)',
        }
    }
}));

export default useStyles;