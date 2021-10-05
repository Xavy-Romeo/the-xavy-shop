import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    Appbar_Header: {
        background: 'rgba(0,0,0.95)',
        height: '100px'
    },
    upperHeader_Header: {
        background:'rgb(230,230,230)', 
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
        textShadow: '1px 1px 3px rgba(100,100,100, .87)',
        padding: '10px 0 0 20px'
    },
    navContainer_Header: {
        height: '100%'
    },
    navGrid_Header: {
        height: '100%'
    },
    cartIcon_Header: {
        position: 'fixed',
        top: '80px',
        right: '1%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        padding: '35px',
        backgroundColor: 'rgba(255,20,20,.87)',
        '&:hover': {
            transform: 'rotate(-15deg)',
        }
    }
});

export default useStyles;